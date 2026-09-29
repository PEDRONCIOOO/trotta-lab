"use client";

import { cookieBanner } from "@/app/resources";
import { clearConsent } from "@/lib/consent";

/** Botão do rodapé: apaga a escolha e reabre o banner. */
export function ManageCookies({ className }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={clearConsent}>
      {cookieBanner.manage}
    </button>
  );
}
