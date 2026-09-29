import { Eyebrow, Reveal, Section } from "@/ui/components";
import { about } from "@/app/resources";
import styles from "./About.module.scss";

export function About() {
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
