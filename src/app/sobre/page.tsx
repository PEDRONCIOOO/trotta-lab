import type { Metadata } from "next";
import { PageHero } from "@/ui/components";
import { Community, Impact, Journey, Mission, Team } from "@/components/about";
import { aboutPage, baseURL } from "@/app/resources";

export const metadata: Metadata = {
  title: aboutPage.meta.title,
  description: aboutPage.meta.description,
  alternates: { canonical: `https://${baseURL}/sobre` },
};

/**
 * Ordem (modelo /about da referência):
 * hero → missão & valores → jornada → time → impacto social → comunidade
 */
export default function SobrePage() {
  return (
    <>
      <PageHero title={aboutPage.hero.title} subtitle={aboutPage.hero.subtitle} />
      <Mission />
      <Journey />
      <Team />
      <Impact />
      <Community />
    </>
  );
}
