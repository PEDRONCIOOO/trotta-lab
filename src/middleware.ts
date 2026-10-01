import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Locale routing middleware.
 *
 * - PT (default): root URLs (`/`, `/servicos`, …) → rewrite to `/pt/…`
 * - EN: `/en`, `/en/services`, … → rewrite English slugs to internal PT slugs
 *   (`/en/services` → `/en/servicos`)
 *
 * The `[locale]` dynamic segment receives "pt" or "en".
 * An `x-locale` header is set so the root layout can read `lang`.
 */

const EN_TO_INTERNAL: Record<string, string> = {
  services: "servicos",
  about: "sobre",
  privacy: "privacidade",
  "thank-you": "obrigado",
  // "cookies" is the same in both locales
};

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // --- English locale --------------------------------------------------
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const rest = pathname.slice(3); // "" or "/services" …
    const segment = rest.replace(/^\//, "").split("/")[0]; // "services" | ""
    const internal = segment ? EN_TO_INTERNAL[segment] : undefined;

    if (internal) {
      const rewritten = `/en/${internal}${rest.slice(1 + segment.length)}`;
      const url = req.nextUrl.clone();
      url.pathname = rewritten;
      const res = NextResponse.rewrite(url);
      res.headers.set("x-locale", "en");
      return res;
    }

    // /en or /en/cookies — no mapping needed
    const res = NextResponse.next();
    res.headers.set("x-locale", "en");
    return res;
  }

  // --- Default locale (PT): add /pt prefix internally -------------------
  const url = req.nextUrl.clone();
  url.pathname = `/pt${pathname}`;
  const res = NextResponse.rewrite(url);
  res.headers.set("x-locale", "pt");
  return res;
}

export const config = {
  matcher: ["/((?!_next|api|images|favicon\\.ico|sitemap\\.xml|robots\\.txt|.*\\.).*)"],
};
