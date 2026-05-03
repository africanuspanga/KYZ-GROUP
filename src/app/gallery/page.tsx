import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";
import { BreadcrumbSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Browse the KYZ (T) GROUP LIMITED photo gallery showcasing our facilities, team, products, and operations across East Africa.",
  alternates: {
    canonical: "https://www.kyzgroup.co.tz/gallery/",
  },
  openGraph: {
    url: "https://www.kyzgroup.co.tz/gallery/",
    title: "Photo Gallery | KYZ (T) GROUP LIMITED",
    description: "Browse photos of KYZ operations, facilities, and team across East Africa.",
  },
};

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.kyzgroup.co.tz/" },
          { name: "Gallery", url: "https://www.kyzgroup.co.tz/gallery/" },
        ]}
      />
      <GalleryClient />
    </>
  );
}
