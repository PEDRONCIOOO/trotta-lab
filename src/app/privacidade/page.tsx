import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { baseURL, legal } from "@/app/resources";

export const metadata: Metadata = {
  title: legal.privacy.meta.title,
  description: legal.privacy.meta.description,
  alternates: { canonical: `https://${baseURL}/privacidade` },
};

export default function PrivacidadePage() {
  return <LegalDocument doc={legal.privacy} />;
}
