import { Chip, Reveal, Section } from "@/ui/components";
import { servicesPage } from "@/app/resources";
import styles from "./Industries.module.scss";

export function Industries() {
  return (
    <Section id="setores">
      <Reveal className={styles.wrap}>
        <h2 className={styles.title}>{servicesPage.industries.title}</h2>
        <ul className={styles.grid}>
          {servicesPage.industries.items.map((i) => (
            <li key={i}>
              <Chip className={styles.chip}>{i}</Chip>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
