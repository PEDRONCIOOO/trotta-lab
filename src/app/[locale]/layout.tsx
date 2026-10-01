import type { Metadata } from "next";
import { Header, Footer } from "@/components";
import { CookieConsent } from "@/components/consent";
import { baseURL, display, social } from "@/app/resources";
import { locales, getDictionary, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);
  return {
    title: `${dict.brand.name} — ${dict.brand.tagline}`,
    description: dict.brand.description,
    openGraph: {
      title: `${dict.brand.name} — ${dict.brand.tagline}`,
      description: dict.brand.description,
      url: locale === "pt" ? `https://${baseURL}` : `https://${baseURL}/en`,
      siteName: dict.brand.name,
      locale: locale === "en" ? "en_US" : "pt_BR",
      type: "website",
    },
    alternates: {
      languages: {
        "pt-BR": `https://${baseURL}`,
        en: `https://${baseURL}/en`,
      },
    },
    robots: { index: true, follow: true },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <Header nav={dict.nav} brand={dict.brand} display={display} locale={locale} />
      <main>{children}</main>
      <Footer footer={dict.footer} social={social} display={display} locale={locale} />
      <CookieConsent banner={dict.cookieBanner} />
    </>
  );
}
