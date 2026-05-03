import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { BreadcrumbSchema, LocalBusinessSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact KYZ (T) GROUP LIMITED. CEO: 0759 300 008 / 0736 000 019. Office: 0759-800032. Email: info@kyzgroup.co.tz. Get a custom quote within 24 hours.",
  alternates: {
    canonical: "https://www.kyzgroup.co.tz/contact/",
  },
  openGraph: {
    url: "https://www.kyzgroup.co.tz/contact/",
    title: "Contact Us | KYZ (T) GROUP LIMITED",
    description:
      "Get in touch with KYZ (T) GROUP LIMITED. Request a quote within 24 hours.",
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.kyzgroup.co.tz/" },
          { name: "Contact Us", url: "https://www.kyzgroup.co.tz/contact/" },
        ]}
      />
      <LocalBusinessSchema />
      <ContactClient />
    </>
  );
}
