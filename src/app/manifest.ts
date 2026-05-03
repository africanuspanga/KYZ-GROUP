import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KYZ (T) GROUP LIMITED",
    short_name: "KYZ Group",
    description:
      "Leading supply and distribution company specializing in sanitation, safety, security, and medical equipment across East Africa.",
    start_url: "/",
    display: "standalone",
    background_color: "#1a1a1a",
    theme_color: "#cc1a1a",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    categories: ["business", "shopping", "health"],
    lang: "en",
    dir: "ltr",
  };
}
