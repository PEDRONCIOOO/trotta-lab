import type { Metadata } from "next";
import { Button, Container, PageHero } from "@/ui/components";
import { baseURL, thanks } from "@/app/resources";
import styles from "./obrigado.module.scss";

// Página de confirmação pós-envio. Fora do sitemap e sem indexação:
// só deve ser vista por quem enviou o formulário (URL de conversão do Google Ads).
export const metadata: Metadata = {
  title: thanks.meta.title,
  description: thanks.meta.description,
  alternates: { canonical: `https://${baseURL}/obrigado` },
  robots: { index: false, follow: false },
};

export default function ObrigadoPage() {
  return (
    <>
      <PageHero title={thanks.title} subtitle={thanks.subtitle} />
      <Container className={styles.wrap}>
        <h2 className={styles.title}>{thanks.nextTitle}</h2>
        <ol className={styles.steps}>
          {thanks.steps.map((s) => (
            <li key={s.num} className="card cut">
              <span className={styles.num}>{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
        <div className={styles.actions}>
          <Button href={thanks.primary.href}>{thanks.primary.label}</Button>
          <Button href={thanks.secondary.href} variant="secondary" size="m">
            {thanks.secondary.label}
          </Button>
        </div>
      </Container>
    </>
  );
}
