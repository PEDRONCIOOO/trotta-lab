import { Button, Reveal, Section, SectionHead } from "@/ui/components";
import type { ServiceItem } from "@/app/resources/content";
import styles from "./Services.module.scss";

type ServicesProps = {
  services: {
    title: string;
    description: string;
    cta: { label: string; href: string };
    detailsLabel: string;
    includedLabel: string;
    idealLabel: string;
    featured: ServiceItem;
    items: ServiceItem[];
  };
};

export function Services({ services }: ServicesProps) {
  const f = services.featured;
  return (
    <Section id="servicos">
      <SectionHead
        title={services.title}
        description={services.description}
        action={<Button variant="secondary" size="m" href={services.cta.href}>{services.cta.label}</Button>}
      />
      <div className={styles.grid}>
        <Reveal as="article" className={`${styles.big} cut-lg`}>
          <h3>{f.title}</h3>
          <p>{f.summary}</p>
          <Lists item={f} includedLabel={services.includedLabel} idealLabel={services.idealLabel} />
          <div className={styles.bigArt} aria-hidden="true">
            <ProductionLine />
          </div>
        </Reveal>

        <div className={styles.side}>
          {services.items.map((item) => (
            <Reveal as="article" key={item.title} className={`${styles.card} card cut`}>
              <div className={styles.icon} aria-hidden="true">
                <ServiceIcon name={item.icon} />
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <details className={styles.details}>
                  <summary>{services.detailsLabel}</summary>
                  <Lists item={item} includedLabel={services.includedLabel} idealLabel={services.idealLabel} />
                </details>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Lists({ item, includedLabel, idealLabel }: { item: ServiceItem; includedLabel: string; idealLabel: string }) {
  return (
    <div className={styles.lists}>
      <div>
        <h4>{includedLabel}</h4>
        <ul>{item.included.map((t) => <li key={t}>{t}</li>)}</ul>
      </div>
      <div>
        <h4>{idealLabel}</h4>
        <ul>{item.idealFor.map((t) => <li key={t}>{t}</li>)}</ul>
      </div>
    </div>
  );
}

function ServiceIcon({ name }: { name: ServiceItem["icon"] }) {
  const common = { viewBox: "0 0 96 96", width: 80, fill: "none", stroke: "currentColor", strokeWidth: 2 };
  switch (name) {
    case "product":
      return (
        <svg {...common}>
          <rect x="14" y="20" width="68" height="48" rx="2" />
          <path d="M14 34h68M30 76h36M48 68v8" />
          <path d="M34 50l8 6-8 6M50 62h12" strokeLinecap="round" />
        </svg>
      );
    case "audit":
      return (
        <svg {...common}>
          <circle cx="42" cy="42" r="22" />
          <path d="M58 58l20 20" strokeLinecap="round" />
          <path d="M32 42l7 7 13-14" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "hire":
      return (
        <svg {...common}>
          <circle cx="34" cy="34" r="10" />
          <circle cx="64" cy="34" r="10" />
          <path d="M16 74c0-12 8-20 18-20s18 8 18 20M46 74c0-12 8-20 18-20s18 8 18 20" />
          <path d="M44 46l8 4 8-4" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

function ProductionLine() {
  return (
    <svg viewBox="0 0 420 200" width="380" fill="none" stroke="#fff" strokeWidth="1.5" strokeOpacity=".7">
      <rect x="20" y="120" width="380" height="50" />
      <path d="M20 145h380" />
      <path d="M120 120 90 60h60zM200 120l-30-60h60zM280 120l-30-60h60z" fill="#fff" fillOpacity=".12" />
      <path d="M60 120V95h30v25M330 120V85h40v35" fill="#fff" fillOpacity=".08" />
      <circle cx="360" cy="40" r="10" />
      <circle cx="60" cy="50" r="5" />
    </svg>
  );
}
