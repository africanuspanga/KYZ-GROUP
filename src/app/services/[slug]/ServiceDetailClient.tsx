"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, Users, Home, Droplets, Shield, Lock, HeartPulse, Truck, Recycle, Shirt, SprayCan, Building } from "lucide-react";
import AnimatedSection, { AnimatedStagger, AnimatedItem } from "@/components/AnimatedSection";
import { services, type Service } from "@/lib/services";

const iconMap: Record<string, React.ReactNode> = {
  Droplets: <Droplets className="w-16 h-16" />,
  Shield: <Shield className="w-16 h-16" />,
  Lock: <Lock className="w-16 h-16" />,
  HeartPulse: <HeartPulse className="w-16 h-16" />,
  Truck: <Truck className="w-16 h-16" />,
  Recycle: <Recycle className="w-16 h-16" />,
  Shirt: <Shirt className="w-16 h-16" />,
  SprayCan: <SprayCan className="w-16 h-16" />,
  Building: <Building className="w-16 h-16" />,
};

const serviceImages: Record<string, string> = {
  sanitation: "/sanitation cleaning supplies commercial.png",
  safety: "/industrial safety helmet vest.jpg",
  security: "/security camera surveillance system.webp",
  medical: "/female-surgeon-with-surgical-mask-operating-room-using-3d-image-guided-surgery-machine.jpg",
  supply: "/delivery truck supply chain.jpg",
  "waste-management": "/waste management facility.jpg",
  uniforms: "/Plain-Black-Hi-Vis-Vest.jpg",
  fumigation: "/fumigation pest control professional.jpg",
  "real-estate": "/commercial real estate building africa.jpg",
};

export default function ServiceDetailClient({ service }: { service: Service }) {
  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const heroImage = serviceImages[service.slug] || "";

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1a1a1a] pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            className="flex items-center gap-2 text-[#888888] text-sm mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            <span>/</span>
            <Link href="/services/" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-[#cc1a1a]">{service.title}</span>
          </motion.div>
          <motion.div
            className="text-[#cc1a1a] mb-5 sm:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {iconMap[service.icon]}
          </motion.div>
          <motion.h1
            className="font-[var(--font-barlow-condensed)] font-black uppercase tracking-tight text-white leading-[1.05]"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3.5rem)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {service.title}
          </motion.h1>
          <motion.p
            className="mt-4 sm:mt-5 text-[#888888] text-base sm:text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {service.shortDesc}
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="aspect-[16/9] rounded-xl overflow-hidden mb-10 sm:mb-12 relative bg-[#f0f0f0]">
                  {heroImage ? (
                    <Image
                      src={heroImage}
                      alt={service.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-[#888888] font-medium">{service.title} Image</span>
                    </div>
                  )}
                </div>
              </AnimatedSection>

              <AnimatedSection>
                <h2 className="font-[var(--font-barlow-condensed)] font-bold text-xl sm:text-2xl uppercase tracking-tight text-[#1a1a1a]">
                  Overview
                </h2>
                <p className="mt-3 sm:mt-4 text-[#888888] leading-relaxed text-base sm:text-lg">{service.description}</p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h2 className="mt-10 sm:mt-12 font-[var(--font-barlow-condensed)] font-bold text-xl sm:text-2xl uppercase tracking-tight text-[#1a1a1a]">
                  What It Includes
                </h2>
                <ul className="mt-5 sm:mt-6 space-y-3">
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-[#cc1a1a]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-[#cc1a1a]" />
                      </div>
                      <span className="text-[#1a1a1a] text-base">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <h2 className="mt-10 sm:mt-12 font-[var(--font-barlow-condensed)] font-bold text-xl sm:text-2xl uppercase tracking-tight text-[#1a1a1a]">
                  Who It's For
                </h2>
                <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
                  {service.clients.map((client) => (
                    <span
                      key={client}
                      className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#fafafa] border border-[#e0e0e0] rounded-full text-sm text-[#1a1a1a]"
                    >
                      <Users className="w-4 h-4 text-[#cc1a1a]" />
                      {client}
                    </span>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-[#fafafa] rounded-xl p-6 sm:p-8 lg:sticky lg:top-28">
                <h3 className="font-[var(--font-barlow-condensed)] font-bold text-lg sm:text-xl uppercase tracking-tight text-[#1a1a1a]">
                  Request This Service
                </h3>
                <p className="mt-2 sm:mt-3 text-[#888888] text-sm">
                  Get a customized quote for {service.title.toLowerCase()} tailored to your needs.
                </p>
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 mt-5 sm:mt-6 w-full justify-center px-6 py-3 bg-[#cc1a1a] text-white font-medium rounded-full hover:bg-[#b01515] transition-colors"
                >
                  Request Service
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 sm:py-24 bg-[#fafafa]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <AnimatedSection>
            <h2 className="font-[var(--font-barlow-condensed)] font-bold text-xl sm:text-2xl uppercase tracking-tight text-[#1a1a1a] mb-8 sm:mb-10">
              Related Services
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {relatedServices.map((related) => (
              <Link
                key={related.slug}
                href={`/services/${related.slug}/`}
                className="group block bg-white rounded-xl p-5 sm:p-6 border border-transparent hover:border-[#cc1a1a]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-[#cc1a1a] transition-transform group-hover:scale-110">
                  {iconMap[related.icon]}
                </div>
                <h3 className="mt-3 sm:mt-4 font-[var(--font-barlow-condensed)] font-bold text-base sm:text-lg uppercase tracking-tight text-[#1a1a1a]">
                  {related.title}
                </h3>
                <p className="mt-1 sm:mt-2 text-[#888888] text-sm line-clamp-2">{related.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
