import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/services";
import ServiceDetailClient from "./ServiceDetailClient";
import { BreadcrumbSchema, ServiceSchema } from "@/components/StructuredData";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) {
    return { title: "Service Not Found" };
  }
  return {
    title: service.title,
    description: service.shortDesc,
    alternates: {
      canonical: `https://www.kyzgroup.co.tz/services/${service.slug}/`,
    },
    openGraph: {
      url: `https://www.kyzgroup.co.tz/services/${service.slug}/`,
      title: `${service.title} | KYZ (T) GROUP LIMITED`,
      description: service.shortDesc,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) {
    notFound();
  }
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.kyzgroup.co.tz/" },
          { name: "Services", url: "https://www.kyzgroup.co.tz/services/" },
          { name: service.title, url: `https://www.kyzgroup.co.tz/services/${service.slug}/` },
        ]}
      />
      <ServiceSchema
        name={service.title}
        description={service.description}
        url={`https://www.kyzgroup.co.tz/services/${service.slug}/`}
      />
      <ServiceDetailClient service={service} />
    </>
  );
}
