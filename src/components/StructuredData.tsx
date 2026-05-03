interface StructuredDataProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KYZ (T) GROUP LIMITED",
    alternateName: "KYZ Group",
    url: "https://www.kyzgroup.co.tz",
    logo: "https://www.kyzgroup.co.tz/opengraph-image",
    description:
      "Leading supply and distribution company specializing in sanitation, safety, security, and medical equipment across East Africa.",
    sameAs: [
      "https://www.linkedin.com/company/kyz-group",
      "https://www.facebook.com/kyzgroup",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+255-759-300-008",
        contactType: "CEO",
        areaServed: "TZ",
        availableLanguage: ["English", "Swahili"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+255-759-800-032",
        contactType: "Customer Service",
        areaServed: ["TZ", "KE", "UG", "RW", "BI"],
        availableLanguage: ["English", "Swahili"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "TZ",
      addressRegion: "Dar es Salaam",
    },
    founder: {
      "@type": "Person",
      name: "Elisha Ayoub",
      jobTitle: "Founder & CEO",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: -6.7924,
        longitude: 39.2083,
      },
      geoRadius: "2000 km",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "KYZ Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sanitation & Hygiene" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Safety & PPE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Security & Tactical" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Medical Equipment" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Supply Chain & Logistics" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Waste Management" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Uniform Supply" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fumigation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Real Estate & Rentals" } },
      ],
    },
  };

  return <StructuredData data={data} />;
}

export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    name: "KYZ (T) GROUP LIMITED",
    image: "https://www.kyzgroup.co.tz/opengraph-image",
    url: "https://www.kyzgroup.co.tz",
    telephone: "+255-759-300-008",
    email: "info@kyzgroup.co.tz",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dar es Salaam",
      addressLocality: "Dar es Salaam",
      addressRegion: "Dar es Salaam",
      addressCountry: "TZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.7924,
      longitude: 39.2083,
    },
    areaServed: [
      { "@type": "Country", name: "Tanzania" },
      { "@type": "Country", name: "Kenya" },
      { "@type": "Country", name: "Uganda" },
      { "@type": "Country", name: "Rwanda" },
      { "@type": "Country", name: "Burundi" },
    ],
    paymentAccepted: "Cash, Bank Transfer, Mobile Money",
    currenciesAccepted: "TZS, USD",
  };

  return <StructuredData data={data} />;
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <StructuredData data={data} />;
}

export function ServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "KYZ (T) GROUP LIMITED",
      url: "https://www.kyzgroup.co.tz",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: -6.7924,
        longitude: 39.2083,
      },
      geoRadius: "2000 km",
    },
  };

  return <StructuredData data={data} />;
}

export function WebSiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "KYZ (T) GROUP LIMITED",
    url: "https://www.kyzgroup.co.tz",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.kyzgroup.co.tz/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return <StructuredData data={data} />;
}
