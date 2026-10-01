import { Button, Container, Peak } from "@/ui/components";
import { HeroArt } from "./HeroArt";
import { HeroSceneLoader } from "./scene/HeroSceneLoader";
import styles from "./Hero.module.scss";

type HeroProps = {
  hero: {
    eyebrow: string;
    headline: string;
    cta: { label: string; href: string };
    stats: { value: string; label: string }[];
  };
  display: { hero3d: boolean };
};

export function Hero({ hero, display }: HeroProps) {
  return (
    <section className={`${styles.hero} on-dark cave`} id="top">
      <div className={styles.beam} aria-hidden="true" />
      <Container className={styles.grid}>
        <div className={styles.text}>
          <span className={styles.eyebrow}>{hero.eyebrow}</span>
          <h1 className={styles.headline}>{hero.headline}</h1>
          <div className={styles.cta}>
            <Button href={hero.cta.href}>{hero.cta.label}</Button>
          </div>
          <div className={styles.stats}>
            {hero.stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.art} aria-hidden="true">
          {display.hero3d ? <HeroSceneLoader /> : <HeroArt />}
        </div>
      </Container>
      <Peak />
    </section>
  );
}
