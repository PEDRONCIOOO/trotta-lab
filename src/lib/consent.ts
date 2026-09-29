import { consent } from "@/app/resources/config";

export type ConsentValue = "accepted" | "rejected";
export const CONSENT_EVENT = "trotta:consent";

/** Lê a escolha gravada no cookie próprio (null = ainda não decidiu). Só no cliente. */
export function getConsent(): ConsentValue | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${consent.cookieName}=([^;]*)`));
  const v = match ? decodeURIComponent(match[1]) : null;
  return v === "accepted" || v === "rejected" ? v : null;
}

/** Grava a escolha por `consent.maxAgeDays` dias (cookie first-party, SameSite=Lax) e avisa a app. */
export function setConsent(value: ConsentValue) {
  const maxAge = consent.maxAgeDays * 24 * 60 * 60;
  const secure = typeof location !== "undefined" && location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${consent.cookieName}=${value}; Max-Age=${maxAge}; Path=/; SameSite=Lax${secure}`;
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

/** Apaga a escolha (reabre o banner). */
export function clearConsent() {
  document.cookie = `${consent.cookieName}=; Max-Age=0; Path=/; SameSite=Lax`;
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: null }));
}

/** true somente se o visitante aceitou — use para carregar analytics. */
export function analyticsAllowed() {
  return getConsent() === "accepted";
}
