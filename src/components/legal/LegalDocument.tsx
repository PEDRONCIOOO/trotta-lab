import { Container, PageHero } from "@/ui/components";
import type { LegalDoc } from "@/app/resources/content";
import styles from "./LegalDocument.module.scss";

type Props = {
  doc: LegalDoc;
  lastUpdatedLabel?: string;
};

export function LegalDocument({ doc, lastUpdatedLabel = "Última atualização" }: Props) {
  return (
    <>
      <PageHero title={doc.title} subtitle={`${lastUpdatedLabel}: ${doc.updated}`} />
      <Container className={styles.wrap}>
        <article className={styles.prose}>
          <p className={styles.intro}>{doc.intro}</p>
          {doc.sections.map((s) => (
            <section key={s.title}>
              <h2>{s.title}</h2>
              {s.paragraphs?.map((p) => <p key={p}>{p}</p>)}
              {s.bullets && <ul>{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
            </section>
          ))}
        </article>
      </Container>
    </>
  );
}
