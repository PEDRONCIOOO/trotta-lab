import { Container, Eyebrow } from "@/ui/components";
import styles from "./Sectors.module.scss";

type SectorsProps = {
  sectors: { eyebrow: string; items: string[] };
};

export function Sectors({ sectors }: SectorsProps) {
  const items = [...sectors.items, ...sectors.items];
  return (
    <Container className={styles.wrap}>
      <Eyebrow>{sectors.eyebrow}</Eyebrow>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {items.map((s, i) => (
            <span key={`${s}-${i}`}>{s}</span>
          ))}
        </div>
      </div>
    </Container>
  );
}
