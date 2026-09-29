import { Button, Reveal, Section, SectionHead } from "@/ui/components";
import { process } from "@/app/resources";
import styles from "./Process.module.scss";

export function Process() {
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
