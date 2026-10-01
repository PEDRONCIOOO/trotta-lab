import { Reveal, Section, SectionHead } from "@/ui/components";
import styles from "./Mission.module.scss";

type Props = {
  mission: {
    title: string;
    text: string;
    values: { title: string; text: string }[];
  };
};

export function Mission({ mission: m }: Props) {
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
