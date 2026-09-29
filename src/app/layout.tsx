import "@/ui/styles/global.scss";

import classNames from "classnames";
import type { Metadata } from "next";
import { Geologica, JetBrains_Mono, Source_Serif_4 } from "next/font/google";
import { Footer, Header } from "@/components";
import { CookieConsent } from "@/components/consent";
import { baseURL, brand } from "@/app/resources";

const sans = Geologica({
  variable: "--font-geologica",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});
const serif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});
const mono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${baseURL}`),
  title: `${brand.name} — ${brand.tagline}`,
  description: brand.description,
  openGraph: {
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.description,
    url: `https://${baseURL}`,
    siteName: brand.name,
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: "#0a0a0a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={classNames(sans.variable, serif.variable, mono.variable)}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
