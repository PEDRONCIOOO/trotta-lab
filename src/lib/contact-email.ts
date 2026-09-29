// Validação + montagem do e-mail de contato (usado pela rota /api/contact).

export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  source?: string;
  stage: string;
  need: string;
  budget: string;
  message: string;
};

const LIMITS: Record<keyof ContactPayload, number> = {
  name: 120,
  email: 200,
  company: 160,
  source: 200,
  stage: 120,
  need: 160,
  budget: 120,
  message: 5000,
};

const REQUIRED: (keyof ContactPayload)[] = ["name", "email", "company", "stage", "need", "budget", "message"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Normaliza e valida. Retorna o payload limpo ou a lista de campos inválidos. */
export function parseContact(input: unknown): { ok: true; data: ContactPayload } | { ok: false; fields: string[] } {
  const raw = (input ?? {}) as Record<string, unknown>;
  const data = {} as ContactPayload;
  const bad: string[] = [];
  for (const key of Object.keys(LIMITS) as (keyof ContactPayload)[]) {
    const v = typeof raw[key] === "string" ? (raw[key] as string).trim() : "";
    if (v.length > LIMITS[key]) bad.push(key);
    (data as Record<string, string>)[key] = v.slice(0, LIMITS[key]);
  }
  for (const key of REQUIRED) if (!data[key]) bad.push(key);
  if (data.email && !EMAIL_RE.test(data.email)) bad.push("email");
  return bad.length ? { ok: false, fields: [...new Set(bad)] } : { ok: true, data };
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const ROWS: [keyof ContactPayload, string][] = [
  ["name", "Nome"],
  ["email", "E-mail"],
  ["company", "Empresa"],
  ["source", "Como nos conheceu"],
  ["stage", "Estágio do projeto"],
  ["need", "Tipo de necessidade"],
  ["budget", "Orçamento"],
];

export function buildContactEmail(d: ContactPayload, meta: { page?: string; ip?: string; date: Date }) {
  const subject = `Novo contato: ${d.name} — ${d.company} (${d.need})`;
  const when = meta.date.toLocaleString("pt-BR", { timeZone: "America/Campo_Grande" });

  const text = [
    ...ROWS.map(([k, label]) => `${label}: ${d[k] || "—"}`),
    "",
    "Mensagem:",
    d.message,
    "",
    `Enviado em ${when}${meta.page ? ` · página ${meta.page}` : ""}`,
  ].join("\n");

  const rows = ROWS.map(
    ([k, label]) =>
      `<tr><td style="padding:6px 12px 6px 0;color:#6f6f6f;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:6px 0;color:#0a0a0a">${esc(d[k] || "—")}</td></tr>`,
  ).join("");

  const html = `<!doctype html><html><body style="margin:0;padding:24px;background:#f7f7f7;font-family:Arial,Helvetica,sans-serif">
<table role="presentation" width="100%" style="max-width:600px;margin:0 auto;background:#fff;border:1px solid #e0e0e0">
<tr><td style="background:#0a0a0a;color:#fff;padding:18px 24px;font-size:16px;font-weight:bold;letter-spacing:.12em">TROTTA · NOVO CONTATO</td></tr>
<tr><td style="padding:24px">
<table role="presentation" style="font-size:14px;line-height:1.5;border-collapse:collapse">${rows}</table>
<p style="margin:20px 0 6px;color:#6f6f6f;font-size:13px">Mensagem</p>
<div style="white-space:pre-wrap;font-size:14px;line-height:1.6;color:#0a0a0a;border-left:3px solid #0a0a0a;padding-left:12px">${esc(d.message)}</div>
<p style="margin:24px 0 0;font-size:12px;color:#9a9a9a">Enviado em ${esc(when)}${meta.page ? ` · página ${esc(meta.page)}` : ""}. Responder este e-mail responde direto para ${esc(d.email)}.</p>
</td></tr></table></body></html>`;

  return { subject, text, html };
}
