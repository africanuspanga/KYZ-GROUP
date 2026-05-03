import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  OrganizationSchema,
  LocalBusinessSchema,
  WebSiteSchema,
} from "@/components/StructuredData";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kyzgroup.co.tz"),
  title: {
    default: "KYZ (T) GROUP LIMITED — East Africa's Trusted Supply Partner",
    template: "%s | KYZ (T) GROUP LIMITED",
  },
  description:
    "Leading supply and distribution company specializing in sanitation, safety, security, and medical equipment across East Africa. Trusted by hospitals, government agencies, and corporations in Tanzania, Kenya, Uganda, Rwanda & Burundi.",
  keywords: [
    "KYZ Group",
    "KYZ Tanzania",
    "sanitation supplies Tanzania",
    "safety equipment East Africa",
    "PPE Tanzania",
    "security equipment supplier",
    "medical equipment Tanzania",
    "hospital supplies East Africa",
    "waste management Tanzania",
    "fumigation services",
    "uniform supply Tanzania",
    "supply chain East Africa",
    "Elisha Ayoub",
    "KYZ Group Limited",
  ],
  authors: [{ name: "KYZ (T) GROUP LIMITED" }],
  creator: "KYZ (T) GROUP LIMITED",
  publisher: "KYZ (T) GROUP LIMITED",
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "en": "/",
      "sw": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.kyzgroup.co.tz",
    siteName: "KYZ (T) GROUP LIMITED",
    title: "KYZ (T) GROUP LIMITED — East Africa's Trusted Supply Partner",
    description:
      "Leading supply and distribution company specializing in sanitation, safety, security, and medical equipment across East Africa.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KYZ (T) GROUP LIMITED — East Africa's Trusted Supply Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kyzgroup",
    creator: "@kyzgroup",
    title: "KYZ (T) GROUP LIMITED — East Africa's Trusted Supply Partner",
    description:
      "Leading supply and distribution company specializing in sanitation, safety, security, and medical equipment across East Africa.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  other: {
    "msapplication-TileColor": "#cc1a1a",
    "theme-color": "#cc1a1a",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${barlowCondensed.variable} ${lato.variable} h-full antialiased`}
    >
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
        <WebSiteSchema />
      </head>
      <body className="min-h-full flex flex-col">
        <ScrollProgress />
        <Navbar />
        <PageTransition>
          <main className="flex-1">{children}</main>
        </PageTransition>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
