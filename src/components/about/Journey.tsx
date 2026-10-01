import { Button, Reveal, Section, SectionHead } from "@/ui/components";
import type { Milestone } from "@/app/resources/content";
import styles from "./Journey.module.scss";

type Props = {
  journey: {
    title: string;
    start: string;
    end: string;
    milestones: Milestone[];
    cta: { label: string; href: string };
  };
};

export function Journey({ journey: j }: Props) {
  return (
    <Section id="jornada" flushTop>
      <SectionHead title={j.title} />
      <Reveal className={styles.timeline}>
        <span className={`${styles.tag} ${styles.start}`}>{j.start}</span>
        <ol className={styles.list}>
          {j.milestones.map((m, i) => (
            <li key={m.text} className={i % 2 ? styles.below : styles.above}>
              <div className={`${styles.card} card cut-sm`}>
                {m.year && <b>{m.year}</b>}
                {m.text}
              </div>
              <span className={styles.dot} />
            </li>
          ))}
        </ol>
        <span className={`${styles.tag} ${styles.end}`}>{j.end}</span>
      </Reveal>
      <div className={styles.cta}>
        <Button href={j.cta.href}>{j.cta.label}</Button>
      </div>
    </Section>
  );
}
