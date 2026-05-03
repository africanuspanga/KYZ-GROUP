import type { Metadata } from "next";
import CertificationsClient from "./CertificationsClient";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Certifications & Compliance",
  description:
    "KYZ (T) GROUP LIMITED meets WHO, OSHA, and ISO standards. View our certifications and compliance documentation for sanitation, safety, security, and medical equipment supply.",
  alternates: {
    canonical: "https://www.kyzgroup.co.tz/certifications/",
  },
  openGraph: {
    url: "https://www.kyzgroup.co.tz/certifications/",
    title: "Certifications & Compliance | KYZ (T) GROUP LIMITED",
    description:
      "View KYZ's certifications and compliance with WHO, OSHA, and ISO standards.",
  },
};

export default function CertificationsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.kyzgroup.co.tz/" },
          { name: "Certifications", url: "https://www.kyzgroup.co.tz/certifications/" },
        ]}
      />
      <CertificationsClient />
    </>
  );
}
