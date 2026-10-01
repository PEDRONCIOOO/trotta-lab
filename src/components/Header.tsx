"use client";

import { useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, Chip, Container } from "@/ui/components";
import { alternatePath, type Locale } from "@/lib/i18n";
import { Logo } from "@/components/Logo";
import styles from "./Header.module.scss";

type NavContent = {
  topbar: { text: string; region: string; switchLabel: string; switchTo: string };
  items: { label: string; href: string; chip?: string }[];
  cta: { label: string; href: string };
};

type HeaderProps = {
  nav: NavContent;
  brand: { name: string };
  display: { topbar: boolean };
  locale: Locale;
};

export const Header = ({ nav, brand, display, locale }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const alt = alternatePath(pathname, locale);

  return (
    <header className={styles.header}>
      {display.topbar && (
        <div className={styles.topbar}>
          {nav.topbar.text} <b>{nav.topbar.region}</b>. {nav.topbar.switchLabel}{" "}
          <a className="link-underline" href={alt.path}>
            {nav.topbar.switchTo}
          </a>
        </div>
      )}
      <Container>
        <nav className={styles.nav}>
          <Link href="#top" className={styles.logo} aria-label={`${brand.name} — ${locale === "en" ? "home" : "início"}`}>
            <Logo />
            {brand.name}
          </Link>
          <ul className={styles.menu}>
            {nav.items.map((item) => (
              <li key={item.href}>
                <a className="link-underline" href={item.href}>
                  {item.label}
                </a>
                {item.chip && <Chip variant="lamp">{item.chip}</Chip>}
              </li>
            ))}
            <li>
              <Button href={nav.cta.href} size="m" className={styles.cta}>
                {nav.cta.label}
              </Button>
            </li>
          </ul>
          <button
            type="button"
            className={styles.menuBtn}
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </nav>
        <div className={classNames(styles.mobile, open && styles.open)}>
          {nav.items.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <Button href={nav.cta.href} className={styles.cta}>
            {nav.cta.label}
          </Button>
        </div>
      </Container>
    </header>
  );
};
