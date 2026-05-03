import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "KYZ (T) GROUP LIMITED — East Africa's Trusted Supply Partner",
  description:
    "Leading supply and distribution company specializing in sanitation, safety, security, and medical equipment across East Africa. Get a custom quote within 24 hours.",
  alternates: {
    canonical: "https://www.kyzgroup.co.tz/",
  },
  openGraph: {
    url: "https://www.kyzgroup.co.tz/",
    title: "KYZ (T) GROUP LIMITED — East Africa's Trusted Supply Partner",
    description:
      "Leading supply and distribution company specializing in sanitation, safety, security, and medical equipment across East Africa.",
  },
};

export default function HomePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[{ name: "Home", url: "https://www.kyzgroup.co.tz/" }]}
      />
      <HomeClient />
    </>
  );
}
