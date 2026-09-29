import { NextResponse } from "next/server";
import { buildContactEmail, parseContact } from "@/lib/contact-email";

// Formulário de contato → e-mail na caixa de entrada (via Resend, API HTTP).
// Variáveis de ambiente (.env.local / painel da hospedagem):
//   RESEND_API_KEY  obrigatória
//   CONTACT_TO      destino (padrão: pedrojava1911@hotmail.com)
//   CONTACT_FROM    remetente (padrão: "Trotta <onboarding@resend.dev>"; troque após verificar o domínio)

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RESEND_URL = process.env.RESEND_API_URL || "https://api.resend.com/emails";
const TO = process.env.CONTACT_TO || "pedrojava1911@hotmail.com";
const FROM = process.env.CONTACT_FROM || "Trotta <onboarding@resend.dev>";

// Limite simples por IP (5 envios / 10 min). Em serverless é por instância — suficiente contra abuso básico.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();
function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: campo invisível; bots preenchem, humanos não. Responde 200 sem enviar.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "local";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const parsed = parseContact(body);
  if (!parsed.ok) {
    return NextResponse.json({ ok: false, error: "invalid_fields", fields: parsed.fields }, { status: 422 });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error("[contact] RESEND_API_KEY ausente — e-mail não enviado");
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const page = typeof body.page === "string" ? body.page.slice(0, 200) : undefined;
  const { subject, text, html } = buildContactEmail(parsed.data, { page, ip, date: new Date() });

  try {
    const res = await fetch(RESEND_URL, {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: parsed.data.email,
        subject,
        text,
        html,
      }),
    });
    if (!res.ok) {
      console.error("[contact] Resend respondeu", res.status, await res.text());
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("[contact] falha de rede ao enviar", err);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
