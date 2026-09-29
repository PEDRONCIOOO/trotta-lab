import { Chip, Reveal, Section, SectionHead } from "@/ui/components";
import { aboutPage } from "@/app/resources";
import styles from "./Community.module.scss";

export function Community() {
  const c = aboutPage.community;
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
