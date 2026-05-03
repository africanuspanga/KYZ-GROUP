import type { MetadataRoute } from "next";
import { services } from "@/lib/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.kyzgroup.co.tz";

  const staticRoutes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "about/", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "services/", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "clients/", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "why-us/", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "leadership/", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "certifications/", priority: 0.6, changeFrequency: "yearly" as const },
    { path: "contact/", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "gallery/", priority: 0.5, changeFrequency: "monthly" as const },
  ];

  const serviceRoutes = services.map((service) => ({
    path: `services/${service.slug}/`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const allRoutes = [...staticRoutes, ...serviceRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}/${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
