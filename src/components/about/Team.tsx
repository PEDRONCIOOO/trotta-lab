"use client";

import { useState } from "react";
import classNames from "classnames";
import { Button, Reveal, Section, SectionHead } from "@/ui/components";
import type { TeamMember } from "@/app/resources/content";
import styles from "./Team.module.scss";

type Props = {
  team: {
    title: string;
    description: string;
    members: TeamMember[];
    cta: { label: string; href: string };
    showMore?: string;
  };
};

export function Team({ team: t }: Props) {
  const [expanded, setExpanded] = useState(false);

  if (!t.members.length) return null;
  return (
    <Section id="time" tone="dark-soft">
      <SectionHead
        title={t.title}
        description={t.description}
        action={<Button variant="secondary" size="m" href={t.cta.href}>{t.cta.label}</Button>}
      />
      <div className={classNames(styles.grid, !expanded && styles.collapsed)}>
        {t.members.map((m, i) => (
          <Reveal as="article" key={m.name || i} delay={i * 60} className={`${styles.card} card cut`}>
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
      {!expanded && t.members.length > 2 && (
        <div className={styles.showMore}>
          <Button variant="secondary" size="m" onClick={() => setExpanded(true)}>
            {t.showMore ?? "Ver mais"}
          </Button>
        </div>
      )}
    </Section>
  );
}
