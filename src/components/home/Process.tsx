import { Button, Reveal, Section, SectionHead } from "@/ui/components";
import type { Step } from "@/app/resources/content";
import styles from "./Process.module.scss";

type ProcessProps = {
  process: {
    title: string;
    description: string;
    cta: { label: string; href: string };
    steps: Step[];
  };
};

export function Process({ process }: ProcessProps) {
  return (
    <Section id="processo">
      <SectionHead
        title={process.title}
        description={process.description}
        action={<Button variant="secondary" size="m" href={process.cta.href}>{process.cta.label}</Button>}
      />
      <div className={styles.list}>
        {process.steps.map((s) => (
          <Reveal key={s.num} className={styles.step}>
            <div className={styles.num}>{s.num}</div>
            <div>
              <h3>{s.title}</h3>
              <span className={styles.time}>{s.time}</span>
            </div>
            <p>{s.description}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
