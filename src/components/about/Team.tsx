import { Button, Reveal, Section, SectionHead } from "@/ui/components";
import type { TeamMember } from "@/app/resources/content";
import styles from "./Team.module.scss";

type Props = {
  team: {
    title: string;
    description: string;
    members: TeamMember[];
    cta: { label: string; href: string };
  };
};

export function Team({ team: t }: Props) {
  if (!t.members.length) return null;
  return (
    <Section id="time" tone="dark-soft">
      <SectionHead
        title={t.title}
        description={t.description}
        action={<Button variant="secondary" size="m" href={t.cta.href}>{t.cta.label}</Button>}
      />
      <div className={styles.grid}>
        {t.members.map((m, i) => (
          <Reveal as="article" key={m.name} delay={i * 60} className={`${styles.card} card cut`}>
            <div className={styles.avatar}>
              {m.avatar ? (
                // biome-ignore lint/performance/noImgElement: avatar estático pequeno
                <img src={m.avatar} alt={m.name} width={120} height={120} />
              ) : (
                <span>{m.name.charAt(0)}</span>
              )}
            </div>
            <h3>{m.name}</h3>
            <span className={styles.role}>{m.role}</span>
            {m.quote && <p>&ldquo;{m.quote}&rdquo;</p>}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
