import { Chip, Reveal, Section, SectionHead } from "@/ui/components";
import type { CommunityEvent } from "@/app/resources/content";
import styles from "./Community.module.scss";

type Props = {
  community: {
    title: string;
    description: string;
    events: CommunityEvent[];
  };
};

export function Community({ community: c }: Props) {
  if (!c.events.length) return null;
  return (
    <Section id="comunidade" tone="cave" peak>
      <SectionHead title={c.title} description={c.description} />
      <div className={styles.rail}>
        {c.events.map((e) => (
          <Reveal as="article" key={`${e.name}-${e.year}`} className={`${styles.card} card cut-sm`}>
            <h3>{e.name}</h3>
            <span className={styles.year}>{e.year}</span>
            <div className={styles.roles}>
              {e.roles.map((r) => <Chip key={r}>{r}</Chip>)}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
