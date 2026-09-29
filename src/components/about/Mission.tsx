import { Reveal, Section, SectionHead } from "@/ui/components";
import { aboutPage } from "@/app/resources";
import styles from "./Mission.module.scss";

export function Mission() {
  const m = aboutPage.mission;
  return (
    <Section id="missao">
      <SectionHead title={m.title} description={m.text} />
      <div className={styles.grid}>
        {m.values.map((v, i) => (
          <Reveal as="article" key={v.title} delay={i * 60} className={`${styles.card} card cut`}>
            <h3>{v.title}</h3>
            <p>{v.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
