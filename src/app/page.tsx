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
import { baseURL, brand } from "@/app/resources";

/**
 * Ordem das seções segue o modelo de referência (Code Miner):
 * hero → faixa de confiança → serviços → lab → processo → ofertas →
 * depoimentos → expertise → sobre → projetos → contato
 */
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD estático
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: brand.name,
            description: brand.description,
            url: `https://${baseURL}`,
          }),
        }}
      />
      <Hero />
      <Sectors />
      <Services />
      <Lab />
      <Process />
      <Offers />
      <Testimonials />
      <Expertise />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
