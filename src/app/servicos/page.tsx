import type { Metadata } from "next";
import { Container, PageHero } from "@/ui/components";
import { Industries, ServiceDetail } from "@/components/services";
import { Contact, Testimonials } from "@/components/home";
import { baseURL, servicesPage } from "@/app/resources";
import styles from "./servicos.module.scss";

export const metadata: Metadata = {
  title: servicesPage.meta.title,
  description: servicesPage.meta.description,
  alternates: { canonical: `https://${baseURL}/servicos` },
};

/**
 * Ordem (modelo /services da referência):
 * hero → blocos de serviço → depoimentos → setores → contato
 */
export default function ServicosPage() {
  return (
    <>
      <PageHero
        title={servicesPage.hero.title}
        subtitle={servicesPage.hero.subtitle}
        cta={servicesPage.hero.cta}
      />
      <Container className={styles.list}>
        {servicesPage.items.map((item) => (
          <ServiceDetail key={item.slug} item={item} />
        ))}
      </Container>
      <Testimonials />
      <Industries />
      <Contact title={servicesPage.contact.title} lead={servicesPage.contact.lead} />
    </>
  );
}
