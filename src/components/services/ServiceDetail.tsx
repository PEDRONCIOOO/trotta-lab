import { Reveal } from "@/ui/components";
import { servicesPage } from "@/app/resources";
import type { ServiceDetail as ServiceDetailType } from "@/app/resources/content";
import { ServiceIllustration } from "./ServiceIllustration";
import styles from "./ServiceDetail.module.scss";

/** Bloco de serviço expandido: ilustração + título, tagline, descrição e listas */
export function ServiceDetail({ item }: { item: ServiceDetailType }) {
  return (
    <Reveal as="article" className={`${styles.card} card cut-lg`}>
      <div className={styles.art} aria-hidden="true">
        <ServiceIllustration name={item.icon} />
      </div>
      <div className={styles.body}>
        <h2 id={item.slug} className={styles.title}>{item.title}</h2>
        <p className={styles.tagline}>{item.tagline}</p>
        <p className={styles.description}>{item.description}</p>

        <h3 className={styles.label}>{servicesPage.labels.included}</h3>
        <ul className={styles.list}>{item.included.map((t) => <li key={t}>{t}</li>)}</ul>

        <h3 className={styles.label}>{servicesPage.labels.ideal}</h3>
        <ul className={styles.list}>{item.idealFor.map((t) => <li key={t}>{t}</li>)}</ul>
      </div>
    </Reveal>
  );
}
