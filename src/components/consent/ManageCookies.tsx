"use client";

import { clearConsent } from "@/lib/consent";
import type { Locale } from "@/lib/i18n";

/** Footer button: clears cookie consent to reopen the banner. */
export function ManageCookies({ className, locale }: { className?: string; locale: Locale }) {
  const label = locale === "en" ? "Cookie preferences" : "Preferências de cookies";
  return (
    <button type="button" className={className} onClick={clearConsent}>
      {label}
    </button>
  );
}
