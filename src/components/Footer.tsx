"use client";

import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";
import { Phone, Mail, MapPin, Globe, Share2, MessageCircle, ExternalLink } from "lucide-react";

const quickLinks = [
  { href: "/about/", label: "About Us" },
  { href: "/services/", label: "Services" },
  { href: "/clients/", label: "Our Clients" },
  { href: "/why-us/", label: "Why Choose KYZ" },

  { href: "/contact/", label: "Contact" },
  { href: "/gallery/", label: "Gallery" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white relative">
      {/* Red divider at top */}
      <div className="h-1 bg-[#cc1a1a]" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo + Tagline */}
          <div>
            <div className="relative h-14 w-auto aspect-[1049/707]">
              <Image
                src="/footer-logo.png"
                alt="KYZ (T) GROUP LIMITED"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <p className="mt-3 text-[#888888] text-sm leading-relaxed">
              East Africa&apos;s leading provider of sanitation, safety, security, and medical equipment supply and distribution.
            </p>
            <div className="flex gap-3 mt-5">
              {[Globe, Share2, MessageCircle, ExternalLink].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#cc1a1a] transition-colors"
                  aria-label={`Social media ${i + 1}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-[var(--font-barlow-condensed)] font-bold text-lg uppercase tracking-wide mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#888888] hover:text-[#cc1a1a] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-[var(--font-barlow-condensed)] font-bold text-lg uppercase tracking-wide mb-5">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.slice(0, 7).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}/`}
                    className="text-[#888888] hover:text-[#cc1a1a] transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-[var(--font-barlow-condensed)] font-bold text-lg uppercase tracking-wide mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#cc1a1a] shrink-0 mt-0.5" />
                <div className="text-sm text-[#888888]">
                  <p className="text-white font-medium mb-1">CEO</p>
                  <p>0759 300 008</p>
                  <p>0736 000 019</p>
                  <p>0654 560 560</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#cc1a1a] shrink-0 mt-0.5" />
                <div className="text-sm text-[#888888]">
                  <p className="text-white font-medium mb-1">Office</p>
                  <p>0759-800032</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#cc1a1a] shrink-0 mt-0.5" />
                <div className="text-sm text-[#888888] space-y-0.5">
                  <p>info@kyzgroup.co.tz</p>
                  <p>elishaayoub@kyzgroup.co.tz</p>
                  <p>elishaayoub@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#888888] text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} KYZ (T) GROUP LIMITED. All rights reserved.
          </p>
          <p className="text-[#cc1a1a] text-sm font-[var(--font-barlow-condensed)] font-semibold uppercase tracking-wider">
            East Africa&apos;s Trusted Supply Partner
          </p>
        </div>
      </div>
    </footer>
  );
}
