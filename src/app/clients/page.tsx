import type { Metadata } from "next";
import ClientsClient from "./ClientsClient";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Our Clients",
  description:
    "KYZ (T) GROUP LIMITED proudly serves hospitals, government agencies, security organizations, schools, and corporations across Tanzania, Kenya, Uganda, Rwanda & Burundi.",
  alternates: {
    canonical: "https://www.kyzgroup.co.tz/clients/",
  },
  openGraph: {
    url: "https://www.kyzgroup.co.tz/clients/",
    title: "Our Clients | KYZ (T) GROUP LIMITED",
    description:
      "Trusted by leading organizations across East Africa for reliable supply and distribution.",
  },
};

export default function ClientsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.kyzgroup.co.tz/" },
          { name: "Our Clients", url: "https://www.kyzgroup.co.tz/clients/" },
        ]}
      />
      <ClientsClient />
    </>
  );
}
