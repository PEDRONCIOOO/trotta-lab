import { Chip, Container, Eyebrow } from "@/ui/components";
import type { FooterLink } from "@/app/resources/content";
import { localeHome, type Locale } from "@/lib/i18n";
import { ManageCookies } from "@/components/consent";
import styles from "./Footer.module.scss";

type FooterContent = {
  newsletter: { title: string; description: string; placeholder: string };
  columns: { title: string; links: FooterLink[] | "social" }[];
  region: { label: string; options: string[]; active: string };
  copyright: string;
};

type FooterProps = {
  footer: FooterContent;
  social: { name: string; link: string }[];
  display: { newsletter: boolean; regionToggle: boolean };
  locale: Locale;
};

export const Footer = ({ footer, social, display, locale }: FooterProps) => {
  const altLocale: Locale = locale === "pt" ? "en" : "pt";
  const altPath = localeHome(altLocale);

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
                <button type="submit" aria-label={locale === "en" ? "Subscribe" : "Assinar"}>→</button>
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
                      <ManageCookies className={`${styles.linkBtn} link-underline`} locale={locale} />
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
              {footer.region.options.map((o) =>
                o === footer.region.active ? (
                  <span key={o} className={styles.active}>{o}</span>
                ) : (
                  <a key={o} href={altPath} className="link-underline">{o}</a>
                ),
              )}
            </div>
          </div>
        )}

        <div className={styles.copyright}>{footer.copyright}</div>
      </Container>
    </footer>
  );
};
