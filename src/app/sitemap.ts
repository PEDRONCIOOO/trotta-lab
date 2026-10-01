import { baseURL } from "@/app/resources";
import { locales, routeMap, defaultLocale, type Locale } from "@/lib/i18n";

export default function sitemap() {
  const today = new Date().toISOString().split("T")[0];
  const entries: { url: string; lastModified: string }[] = [];

  for (const locale of locales) {
    const prefix = locale === defaultLocale ? "" : `/${locale}`;

    // Home
    entries.push({ url: `https://${baseURL}${prefix || ""}`, lastModified: today });

    // Subpages (exclude obrigado — noindex)
    for (const [slug, segment] of Object.entries(routeMap[locale])) {
      if (slug === "obrigado") continue;
      entries.push({ url: `https://${baseURL}${prefix}/${segment}`, lastModified: today });
    }
  }

  return entries;
}
