import type { Metadata } from "next";
import { PageHero } from "@/ui/components";
import { Community, Impact, Journey, Mission, Team } from "@/components/about";
import { baseURL } from "@/app/resources";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);
  const canonical = localePath("sobre", locale);
  return {
    title: dict.aboutPage.meta.title,
    description: dict.aboutPage.meta.description,
    alternates: {
      canonical: `https://${baseURL}${canonical}`,
      languages: {
        "pt-BR": `https://${baseURL}/sobre`,
        en: `https://${baseURL}/en/about`,
      },
    },
  };
}

export default function SobrePage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero title={dict.aboutPage.hero.title} subtitle={dict.aboutPage.hero.subtitle} />
      <Mission mission={dict.aboutPage.mission} />
      <Journey journey={dict.aboutPage.journey} />
      <Team team={dict.aboutPage.team} />
      <Impact impact={dict.aboutPage.impact} />
      <Community community={dict.aboutPage.community} />
    </>
  );
}
