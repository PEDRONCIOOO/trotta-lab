import { Chip, Reveal, Section } from "@/ui/components";
import styles from "./Industries.module.scss";

type Props = {
  industries: { title: string; items: string[] };
};

export function Industries({ industries }: Props) {
  return (
    <Section id="setores">
      <Reveal className={styles.wrap}>
        <h2 className={styles.title}>{industries.title}</h2>
        <ul className={styles.grid}>
          {industries.items.map((i) => (
            <li key={i}>
              <Chip className={styles.chip}>{i}</Chip>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
