import type { Metadata } from "next";
import AboutClient from "./AboutClient";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about KYZ (T) GROUP LIMITED — our story, mission, values, and leadership team driving supply excellence across East Africa since 2015.",
  alternates: {
    canonical: "https://www.kyzgroup.co.tz/about/",
  },
  openGraph: {
    url: "https://www.kyzgroup.co.tz/about/",
    title: "About Us | KYZ (T) GROUP LIMITED",
    description:
      "Learn about KYZ (T) GROUP LIMITED — our story, mission, values, and leadership team driving supply excellence across East Africa.",
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.kyzgroup.co.tz/" },
          { name: "About Us", url: "https://www.kyzgroup.co.tz/about/" },
        ]}
      />
      <AboutClient />
    </>
  );
}
