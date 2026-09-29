import classNames from "classnames";
import { Chip, Eyebrow, Reveal, Section } from "@/ui/components";
import { expertise } from "@/app/resources";
import styles from "./Expertise.module.scss";

export function Expertise() {
  return (
    <Section id="expertise" tone="cave" peak className={styles.section}>
      <Eyebrow>{expertise.eyebrow}</Eyebrow>
      <Reveal as="ul" className={styles.list}>
        {expertise.items.map((t) => (
          <li key={t.label} className={classNames(t.dim && styles.dim)}>
            {t.label}
            {t.chip && <Chip variant="lamp">{t.chip}</Chip>}
          </li>
        ))}
      </Reveal>
    </Section>
  );
}
