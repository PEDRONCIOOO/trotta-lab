import { Button, Chip, Reveal, Section, SectionHead } from "@/ui/components";
import { projects } from "@/app/resources";
import styles from "./Projects.module.scss";

export function Projects() {
  return (
    <Section id="projetos" flushTop>
      <SectionHead
        title={projects.title}
        description={projects.description}
        action={<Button variant="secondary" size="m" href={projects.cta.href}>{projects.cta.label}</Button>}
      />
      <div className={styles.grid}>
        {projects.items.map((p, i) => (
          <Reveal as="article" key={p.title} delay={i * 60} className={`${styles.card} card cut`}>
            <div className={styles.tag}>{p.tag}</div>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <Chip className={styles.status}>{p.status}</Chip>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
