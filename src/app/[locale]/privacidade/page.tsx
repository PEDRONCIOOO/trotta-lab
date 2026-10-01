import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { baseURL } from "@/app/resources";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);
  const canonical = localePath("privacidade", locale);
  return {
    title: dict.legal.privacy.meta.title,
    description: dict.legal.privacy.meta.description,
    alternates: {
      canonical: `https://${baseURL}${canonical}`,
      languages: {
        "pt-BR": `https://${baseURL}/privacidade`,
        en: `https://${baseURL}/en/privacy`,
      },
    },
  };
}

export default function PrivacidadePage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);
  return <LegalDocument doc={dict.legal.privacy} lastUpdatedLabel={dict.legal.lastUpdatedLabel} />;
}
