import { Button, Reveal, Section, SectionHead } from "@/ui/components";
import styles from "./Impact.module.scss";

type Props = {
  impact: {
    title: string;
    description: string;
    cta: { label: string; href: string };
    missionTitle: string;
    mission: string[];
    highlightsTitle: string;
    highlights: { value: string; label: string }[];
  };
};

export function Impact({ impact: im }: Props) {
  return (
    <Section id="impacto">
      <SectionHead
        title={im.title}
        description={im.description}
        action={<Button variant="secondary" size="m" href={im.cta.href}>{im.cta.label}</Button>}
      />
      <h3 className={styles.sub}>{im.missionTitle}</h3>
      <div className={styles.grid}>
        {im.mission.map((m, i) => (
          <Reveal key={m} delay={i * 60} className={`${styles.card} card cut-sm`}>{m}</Reveal>
        ))}
      </div>
      {im.highlights.length > 0 && (
        <>
          <h3 className={styles.sub}>{im.highlightsTitle}</h3>
          <div className={styles.grid}>
            {im.highlights.map((h, i) => (
              <Reveal key={h.label} delay={i * 60} className={`${styles.stat} card cut-sm`}>
                <b>{h.value}</b>
                <span>{h.label}</span>
              </Reveal>
            ))}
          </div>
        </>
      )}
    </Section>
  );
}
