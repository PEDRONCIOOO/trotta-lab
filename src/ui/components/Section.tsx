import classNames from "classnames";
import type { CSSProperties, ReactNode } from "react";
import { Container } from "./Container";
import { Peak } from "./Peak";
import styles from "./Section.module.scss";

type Tone = "light" | "dark" | "cave" | "dark-soft";

interface SectionProps {
  id?: string;
  tone?: Tone;
  /** divisor "montanha" no rodapé da seção (transição escuro → claro) */
  peak?: boolean;
  /** remove o padding superior (seções encadeadas na mesma cor) */
  flushTop?: boolean;
  /** conteúdo sem Container (ex.: hero com grid próprio) */
  bare?: boolean;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export function Section({
  id,
  tone = "light",
  peak,
  flushTop,
  bare,
  className,
  style,
  children,
}: SectionProps) {
  const dark = tone !== "light";
  return (
    <section
      id={id}
      style={style}
      className={classNames(
        styles.section,
        styles[tone],
        dark && "on-dark",
        tone === "cave" && "cave",
        flushTop && styles.flushTop,
        className,
      )}
    >
      {bare ? children : <Container>{children}</Container>}
      {peak && <Peak />}
    </section>
  );
}
