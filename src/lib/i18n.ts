export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

/** Internal route slugs (filesystem) → public URL segments per locale */
export const routeMap = {
  pt: {
    servicos: "servicos",
    sobre: "sobre",
    privacidade: "privacidade",
    cookies: "cookies",
    obrigado: "obrigado",
  },
  en: {
    servicos: "services",
    sobre: "about",
    privacidade: "privacy",
    cookies: "cookies",
    obrigado: "thank-you",
  },
} as const satisfies Record<Locale, Record<string, string>>;

type InternalSlug = keyof (typeof routeMap)["pt"];

/** Reverse lookup for EN: public segment → internal slug */
export const enSlugToInternal: Record<string, string> = Object.fromEntries(
  Object.entries(routeMap.en).map(([k, v]) => [v, k]),
);

/** Build the public URL for an internal slug + locale. */
export function localePath(slug: InternalSlug, locale: Locale): string {
  const segment = routeMap[locale][slug];
  return locale === defaultLocale ? `/${segment}` : `/${locale}/${segment}`;
}

/** Home path for a locale. */
export function localeHome(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

/**
 * Given the current pathname and locale, return the equivalent path in the
 * alternate locale (preserves hash fragments).
 */
export function alternatePath(
  pathname: string,
  fromLocale: Locale,
): { locale: Locale; path: string } {
  const toLocale: Locale = fromLocale === "pt" ? "en" : "pt";

  let raw = pathname;
  if (fromLocale === "en") {
    raw = pathname.replace(/^\/en\/?/, "");
  } else {
    raw = pathname.replace(/^\//, "");
  }

  const [slug] = raw.split("#");

  if (!slug) return { locale: toLocale, path: localeHome(toLocale) };

  const internal =
    fromLocale === "en" ? (enSlugToInternal[slug] ?? slug) : slug;

  const segment =
    routeMap[toLocale][internal as InternalSlug] ?? internal;
  const path =
    toLocale === defaultLocale ? `/${segment}` : `/${toLocale}/${segment}`;

  return { locale: toLocale, path };
}

// ---------------------------------------------------------------------------
// Dictionary
// ---------------------------------------------------------------------------
import * as pt from "@/app/resources/content";
import * as en from "@/app/resources/content.en";

export type Dictionary = typeof pt;

const dictionaries: Record<Locale, Dictionary> = { pt, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.pt;
}
