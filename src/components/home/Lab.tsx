import { Eyebrow, Reveal, Section } from "@/ui/components";
import { lab } from "@/app/resources";
import styles from "./Lab.module.scss";

export function Lab() {
  return (
    <Section id="lab" tone="cave" peak>
      <Reveal className={styles.manifesto}>
        <div>
          <Eyebrow>{lab.eyebrow}</Eyebrow>
          <h2 className={styles.title}>{lab.title}</h2>
        </div>
        <div className={styles.body}>
          {lab.manifesto.map((p, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: conteúdo estático
            <p key={i}>{p}</p>
          ))}
        </div>
      </Reveal>

      <div className={styles.ways}>
        {lab.ways.map((w, i) => (
          <Reveal as="article" key={w.num} delay={i * 80} className={`${styles.way} cut`}>
            <div className={styles.num}>{w.num}</div>
            <h3>{w.title}</h3>
            <p>{w.description}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
