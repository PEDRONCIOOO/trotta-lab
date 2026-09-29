"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/ui/components";
import { cookieBanner } from "@/app/resources";
import { CONSENT_EVENT, type ConsentValue, getConsent, setConsent } from "@/lib/consent";
import styles from "./CookieConsent.module.scss";

/**
 * Banner de consentimento. Aparece só quando não há escolha gravada;
 * a escolha persiste em cookie first-party por `consent.maxAgeDays` (config.ts).
 */
export function CookieConsent() {
  const [choice, setChoice] = useState<ConsentValue | null | undefined>(undefined);

  useEffect(() => {
    setChoice(getConsent());
    const onChange = (e: Event) => setChoice((e as CustomEvent<ConsentValue | null>).detail);
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  // undefined = ainda não leu o cookie (evita flash no SSR); string = já decidiu
  if (choice !== null) return null;

  const decide = (v: ConsentValue) => {
    setConsent(v);
    setChoice(v);
  };

  return (
    <div className={`${styles.banner} cut`} role="dialog" aria-live="polite" aria-label={cookieBanner.title}>
      <div className={styles.text}>
        <b>{cookieBanner.title}</b>
        <p>
          {cookieBanner.text}{" "}
          <Link className="link-underline" href={cookieBanner.more.href}>
            {cookieBanner.more.label}
          </Link>
        </p>
      </div>
      <div className={styles.actions}>
        <Button size="s" variant="secondary" onClick={() => decide("rejected")}>
          {cookieBanner.reject}
        </Button>
        <Button size="s" onClick={() => decide("accepted")}>
          {cookieBanner.accept}
        </Button>
      </div>
    </div>
  );
}
