import "@/ui/styles/global.scss";

import classNames from "classnames";
import type { Metadata } from "next";
import { Geologica, JetBrains_Mono, Source_Serif_4 } from "next/font/google";
import { headers } from "next/headers";
import { baseURL } from "@/app/resources";

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
};

export const viewport = { themeColor: "#0a0a0a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = headers().get("x-locale") ?? "pt";
  const lang = locale === "en" ? "en" : "pt-BR";

  return (
    <html lang={lang} className={classNames(sans.variable, serif.variable, mono.variable)}>
      <body>{children}</body>
    </html>
  );
}
