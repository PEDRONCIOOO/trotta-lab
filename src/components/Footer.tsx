import { Chip, Container, Eyebrow } from "@/ui/components";
import { display, footer, social } from "@/app/resources";
import type { FooterLink } from "@/app/resources/content";
import { ManageCookies } from "@/components/consent";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={`${styles.footer} cave on-dark`}>
      <Container>
        <div className={styles.grid}>
          {display.newsletter && (
            <div className={styles.newsletter}>
              <h3>{footer.newsletter.title}</h3>
              <p>{footer.newsletter.description}</p>
              <form>
                <input type="email" placeholder={footer.newsletter.placeholder} aria-label="E-mail" />
                <button type="submit" aria-label="Assinar">→</button>
              </form>
            </div>
          )}
          {footer.columns.map((col) => {
            const links: FooterLink[] =
              col.links === "social" ? social.map((s) => ({ label: s.name, href: s.link })) : col.links;
            return (
              <div className={styles.col} key={col.title}>
                <h4>{col.title}</h4>
                <ul>
                  {links.map((l) => (
                    <li key={l.label}>
                      <a className="link-underline" href={l.href}>{l.label}</a>
                      {l.chip && <Chip variant="lamp">{l.chip}</Chip>}
                    </li>
                  ))}
                  {col.title === "Legal" && (
                    <li>
                      <ManageCookies className={`${styles.linkBtn} link-underline`} />
                    </li>
                  )}
                </ul>
              </div>
            );
          })}
        </div>

        {display.regionToggle && (
          <div className={styles.region}>
            <Eyebrow className={styles.regionLabel}>{footer.region.label}</Eyebrow>
            <div className={styles.toggle}>
              {footer.region.options.map((o) => (
                <span key={o} className={o === footer.region.active ? styles.active : undefined}>{o}</span>
              ))}
            </div>
          </div>
        )}

        <div className={styles.copyright}>{footer.copyright}</div>
      </Container>
    </footer>
  );
};
