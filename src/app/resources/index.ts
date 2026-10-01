// Config (locale-independent) — safe to import directly in components
export { baseURL, routes, style, display, contact, consent, social } from "@/app/resources/config";

// Content is locale-specific — use getDictionary(locale) from @/lib/i18n.
// Types can still be imported from @/app/resources/content.
