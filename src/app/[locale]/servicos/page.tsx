import type { Metadata } from "next";
import { Container, PageHero } from "@/ui/components";
import { Industries, ServiceDetail } from "@/components/services";
import { Contact, Testimonials } from "@/components/home";
import { baseURL, contact } from "@/app/resources";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";
import styles from "./servicos.module.scss";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);
  const canonical = localePath("servicos", locale);
  return {
    title: dict.servicesPage.meta.title,
    description: dict.servicesPage.meta.description,
    alternates: {
      canonical: `https://${baseURL}${canonical}`,
      languages: {
        "pt-BR": `https://${baseURL}/servicos`,
        en: `https://${baseURL}/en/services`,
      },
    },
  };
}

export default function ServicosPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero
        title={dict.servicesPage.hero.title}
        subtitle={dict.servicesPage.hero.subtitle}
        cta={dict.servicesPage.hero.cta}
      />
      <Container className={styles.list}>
        {dict.servicesPage.items.map((item) => (
          <ServiceDetail key={item.slug} item={item} labels={dict.servicesPage.labels} />
        ))}
      </Container>
      <Testimonials testimonials={dict.testimonials} />
      <Industries industries={dict.servicesPage.industries} />
      <Contact
        content={dict.contactSection}
        contact={contact}
        locale={locale}
        title={dict.servicesPage.contact.title}
        lead={dict.servicesPage.contact.lead}
      />
    </>
  );
}
