import type { Metadata } from "next";
import WhyUsClient from "./WhyUsClient";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Why Choose KYZ",
  description:
    "Discover why organizations across East Africa choose KYZ (T) GROUP LIMITED: quality products, regional coverage, rapid delivery, compliance, and dedicated account support.",
  alternates: {
    canonical: "https://www.kyzgroup.co.tz/why-us/",
  },
  openGraph: {
    url: "https://www.kyzgroup.co.tz/why-us/",
    title: "Why Choose KYZ | KYZ (T) GROUP LIMITED",
    description:
      "Discover why organizations across East Africa choose KYZ as their trusted supply partner.",
  },
};

export default function WhyUsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.kyzgroup.co.tz/" },
          { name: "Why Choose KYZ", url: "https://www.kyzgroup.co.tz/why-us/" },
        ]}
      />
      <WhyUsClient />
    </>
  );
}
