import { Container, Eyebrow } from "@/ui/components";
import { sectors } from "@/app/resources";
import styles from "./Sectors.module.scss";

/** Marquee de setores (equivale à faixa "Trusted by" da referência) */
export function Sectors() {
  const items = [...sectors.items, ...sectors.items]; // duplicado para loop contínuo
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
