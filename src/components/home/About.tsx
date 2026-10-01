import type { ReactNode } from "react";
import { Eyebrow, Reveal, Section } from "@/ui/components";
import styles from "./About.module.scss";

type AboutProps = {
  about: {
    eyebrow: string;
    title: ReactNode;
    paragraphs: ReactNode[];
  };
};

export function About({ about }: AboutProps) {
  return (
    <Section id="sobre">
      <Reveal className={styles.grid}>
        <div>
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <h2 className={styles.title}>{about.title}</h2>
        </div>
        <div className={styles.body}>
          {about.paragraphs.map((p, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: conteúdo estático
            <p key={i}>{p}</p>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
