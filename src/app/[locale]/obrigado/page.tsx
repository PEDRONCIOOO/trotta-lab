import type { Metadata } from "next";
import { Button, Container, PageHero } from "@/ui/components";
import { baseURL } from "@/app/resources";
import { getDictionary, type Locale } from "@/lib/i18n";
import styles from "./obrigado.module.scss";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);
  return {
    title: dict.thanks.meta.title,
    description: dict.thanks.meta.description,
    robots: { index: false, follow: false },
  };
}

export default function ObrigadoPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);
  const t = dict.thanks;

  return (
    <>
      <PageHero title={t.title} subtitle={t.subtitle} />
      <Container className={styles.wrap}>
        <h2 className={styles.title}>{t.nextTitle}</h2>
        <ol className={styles.steps}>
          {t.steps.map((s) => (
            <li key={s.num} className="card cut">
              <span className={styles.num}>{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
        <div className={styles.actions}>
          <Button href={t.primary.href}>{t.primary.label}</Button>
          <Button href={t.secondary.href} variant="secondary" size="m">
            {t.secondary.label}
          </Button>
        </div>
      </Container>
    </>
  );
}
