import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { baseURL } from "@/app/resources";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);
  const canonical = localePath("cookies", locale);
  return {
    title: dict.legal.cookies.meta.title,
    description: dict.legal.cookies.meta.description,
    alternates: {
      canonical: `https://${baseURL}${canonical}`,
      languages: {
        "pt-BR": `https://${baseURL}/cookies`,
        en: `https://${baseURL}/en/cookies`,
      },
    },
  };
}

export default function CookiesPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);
  return <LegalDocument doc={dict.legal.cookies} lastUpdatedLabel={dict.legal.lastUpdatedLabel} />;
}
