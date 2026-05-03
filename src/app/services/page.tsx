import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore KYZ (T) GROUP LIMITED's comprehensive services: sanitation, safety, security, medical equipment, supply chain, waste management, uniforms, fumigation, and real estate across East Africa.",
  alternates: {
    canonical: "https://www.kyzgroup.co.tz/services/",
  },
  openGraph: {
    url: "https://www.kyzgroup.co.tz/services/",
    title: "Our Services | KYZ (T) GROUP LIMITED",
    description:
      "Explore KYZ (T) GROUP LIMITED's comprehensive services across nine specialized categories.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.kyzgroup.co.tz/" },
          { name: "Services", url: "https://www.kyzgroup.co.tz/services/" },
        ]}
      />
      <ServicesClient />
    </>
  );
}
