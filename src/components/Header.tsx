"use client";

import { useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import { Button, Chip, Container } from "@/ui/components";
import { display, nav, brand } from "@/app/resources";
import { Logo } from "@/components/Logo";
import styles from "./Header.module.scss";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      {display.topbar && (
        <div className={styles.topbar}>
          {nav.topbar.text} <b>{nav.topbar.region}</b>. {nav.topbar.switchLabel}{" "}
          <a className="link-underline" href="#">
            {nav.topbar.switchTo}
          </a>
        </div>
      )}
      <Container>
        <nav className={styles.nav}>
          <Link href="#top" className={styles.logo} aria-label={`${brand.name} — início`}>
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
