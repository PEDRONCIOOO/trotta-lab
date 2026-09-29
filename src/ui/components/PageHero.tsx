import type { ReactNode } from "react";
import { Button } from "./Button";
import { Container } from "./Container";
import { Peak } from "./Peak";
import styles from "./PageHero.module.scss";

interface PageHeroProps {
  title: ReactNode;
  subtitle?: ReactNode;
  cta?: { label: string; href: string };
}

/** Hero centralizado de páginas internas (modelo: /services da referência) */
export function PageHero({ title, subtitle, cta }: PageHeroProps) {
  return (
    <section className={`${styles.hero} on-dark cave`}>
      <Container className={styles.inner}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {cta && (
          <div className={styles.cta}>
            <Button href={cta.href}>{cta.label}</Button>
          </div>
        )}
      </Container>
      <Peak />
    </section>
  );
}
