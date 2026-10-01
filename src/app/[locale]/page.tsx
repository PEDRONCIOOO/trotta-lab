import {
  About,
  Contact,
  Expertise,
  Hero,
  Lab,
  Offers,
  Process,
  Projects,
  Sectors,
  Services,
  Testimonials,
} from "@/components/home";
import { baseURL, contact, display } from "@/app/resources";
import { getDictionary, type Locale } from "@/lib/i18n";

export default function Home({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD estático
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: dict.brand.name,
            description: dict.brand.description,
            url: `https://${baseURL}`,
          }),
        }}
      />
      <Hero hero={dict.hero} display={display} />
      <Sectors sectors={dict.sectors} />
      <Services services={dict.services} />
      <Lab lab={dict.lab} />
      <Process process={dict.process} />
      <Offers offers={dict.offers} />
      <Testimonials testimonials={dict.testimonials} />
      <Expertise expertise={dict.expertise} />
      <About about={dict.about} />
      <Projects projects={dict.projects} />
      <Contact content={dict.contactSection} contact={contact} locale={locale} />
    </>
  );
}
