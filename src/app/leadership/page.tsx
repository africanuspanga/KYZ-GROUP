import type { Metadata } from "next";
import LeadershipClient from "./LeadershipClient";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Leadership Team",
  description:
    "Meet the visionary leadership team at KYZ (T) GROUP LIMITED — Founder & CEO Elisha Ayoub and senior executives driving supply excellence across East Africa.",
  alternates: {
    canonical: "https://www.kyzgroup.co.tz/leadership/",
  },
  openGraph: {
    url: "https://www.kyzgroup.co.tz/leadership/",
    title: "Leadership Team | KYZ (T) GROUP LIMITED",
    description:
      "Meet the visionary leaders driving KYZ forward across East Africa.",
  },
};

export default function LeadershipPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.kyzgroup.co.tz/" },
          { name: "Leadership", url: "https://www.kyzgroup.co.tz/leadership/" },
        ]}
      />
      <LeadershipClient />
    </>
  );
}
