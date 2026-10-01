"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/ui/components";
import { CONSENT_EVENT, type ConsentValue, getConsent, setConsent } from "@/lib/consent";
import styles from "./CookieConsent.module.scss";

type BannerContent = {
  title: string;
  text: string;
  accept: string;
  reject: string;
  more: { label: string; href: string };
};

export function CookieConsent({ banner }: { banner: BannerContent }) {
  const [choice, setChoice] = useState<ConsentValue | null | undefined>(undefined);

  useEffect(() => {
    setChoice(getConsent());
    const onChange = (e: Event) => setChoice((e as CustomEvent<ConsentValue | null>).detail);
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (choice !== null) return null;

  const decide = (v: ConsentValue) => {
    setConsent(v);
    setChoice(v);
  };

  return (
    <div className={`${styles.banner} cut`} role="dialog" aria-live="polite" aria-label={banner.title}>
      <div className={styles.text}>
        <b>{banner.title}</b>
        <p>
          {banner.text}{" "}
          <Link className="link-underline" href={banner.more.href}>
            {banner.more.label}
          </Link>
        </p>
      </div>
      <div className={styles.actions}>
        <Button size="s" variant="secondary" onClick={() => decide("rejected")}>
          {banner.reject}
        </Button>
        <Button size="s" onClick={() => decide("accepted")}>
          {banner.accept}
        </Button>
      </div>
    </div>
  );
}
