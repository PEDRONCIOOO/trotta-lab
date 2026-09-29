import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { baseURL, legal } from "@/app/resources";

export const metadata: Metadata = {
  title: legal.cookies.meta.title,
  description: legal.cookies.meta.description,
  alternates: { canonical: `https://${baseURL}/cookies` },
};

export default function CookiesPage() {
  return <LegalDocument doc={legal.cookies} />;
}
