"use client";

import { useRef } from "react";
import { Eyebrow, Reveal, Section } from "@/ui/components";
import type { Testimonial } from "@/app/resources/content";
import styles from "./Testimonials.module.scss";

type TestimonialsProps = {
  testimonials: {
    eyebrow: string;
    featured: { quote: string; name: string; role: string };
    items: Testimonial[];
    disclaimer?: string;
  };
};

export function Testimonials({ testimonials }: TestimonialsProps) {
  const rail = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => rail.current?.scrollBy({ left: 360 * dir, behavior: "smooth" });

  return (
    <Section id="depoimentos" tone="dark-soft">
      <Eyebrow>{testimonials.eyebrow}</Eyebrow>
      <Reveal as="blockquote" className={styles.big}>
        &ldquo;{testimonials.featured.quote}&rdquo;
      </Reveal>
      <Reveal className={styles.author}>
        <span className={styles.avatar} />
        <span>
          <b>{testimonials.featured.name}</b>, {testimonials.featured.role}
        </span>
      </Reveal>

      <div className={styles.rail} ref={rail}>
        {testimonials.items.map((t) => (
          <article key={t.brand} className={`${styles.card} card cut`}>
            <div className={styles.brand}>{t.brand}</div>
            <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
            <div className={styles.author}>
              <span className={styles.avatar} />
              <div>
                <b>{t.name}</b>
                <br />
                <span className={styles.role}>{t.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className={styles.nav}>
        <button type="button" aria-label="Anterior" onClick={() => scroll(-1)}>←</button>
        <button type="button" aria-label="Próximo" onClick={() => scroll(1)}>→</button>
      </div>
      {testimonials.disclaimer && <p className={styles.fine}>{testimonials.disclaimer}</p>}
    </Section>
  );
}
