import { Button, Section } from "@/ui/components";

export default function NotFound() {
  return (
    <Section tone="cave" style={{ minHeight: "60vh", display: "grid", placeItems: "center" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "var(--display-3)" }}>404</h1>
        <p style={{ margin: "16px 0 32px", color: "var(--ink-300)" }}>Essa página não existe.</p>
        <Button href="/">Voltar ao início</Button>
      </div>
    </Section>
  );
}
