import classNames from "classnames";
import { Reveal, Section, SectionHead } from "@/ui/components";
import { offers } from "@/app/resources";
import styles from "./Offers.module.scss";

export function Offers() {
  return (
    <Section id="ofertas" flushTop>
      <SectionHead title={offers.title} description={offers.description} />
      <div className={styles.grid}>
        {offers.items.map((o, i) => (
          <Reveal
            as="article"
            key={o.num}
            delay={i * 60}
            className={classNames(styles.offer, "cut", o.featured ? styles.featured : "card")}
          >
            <div className={styles.num}>{o.num}</div>
            <h3>{o.title}</h3>
            <p>{o.description}</p>
            <div className={styles.ideal}>{o.ideal}</div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
