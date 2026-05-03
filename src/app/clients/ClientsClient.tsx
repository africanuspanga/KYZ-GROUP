"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HeartPulse, Landmark, ShieldCheck, GraduationCap, Factory, Building2 } from "lucide-react";
import AnimatedSection, { AnimatedStagger, AnimatedItem } from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import { clientCategories } from "@/lib/services";

const clientIcons: Record<string, React.ReactNode> = {
  HeartPulse: <HeartPulse className="w-8 h-8" />,
  Landmark: <Landmark className="w-8 h-8" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8" />,
  GraduationCap: <GraduationCap className="w-8 h-8" />,
  Factory: <Factory className="w-8 h-8" />,
  Building2: <Building2 className="w-8 h-8" />,
};

const clientLogos = [
  { src: "/LOGOS/FAO.png", alt: "FAO" },
  { src: "/LOGOS/LOGO.png", alt: "Partner Logo" },
  { src: "/LOGOS/LOGO 2.png", alt: "Partner Logo 2" },
  { src: "/LOGOS/LOGO3 .png", alt: "Partner Logo 3" },
  { src: "/LOGOS/TZ GVT.png", alt: "Tanzania Government" },
];

export default function ClientsClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1a1a1a] pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.h1
            className="font-[var(--font-barlow-condensed)] font-black uppercase tracking-tight text-white leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Clients
          </motion.h1>
          <motion.p
            className="mt-4 sm:mt-5 text-[#888888] text-base sm:text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Trusted by leading organizations across East Africa for reliable supply and distribution.
          </motion.p>
        </div>
      </section>

      {/* Client Logo Grid */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <SectionTitle
            title="Organizations We Serve"
            subtitle="A selection of the esteemed organizations that trust KYZ as their supply partner."
            align="center"
            className="mb-12 sm:mb-16"
          />
          <AnimatedStagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8" staggerDelay={0.1}>
            {clientLogos.map((logo, i) => (
              <AnimatedItem key={i}>
                <div className="aspect-[3/2] bg-white border border-[#e0e0e0] rounded-lg flex items-center justify-center p-4 sm:p-6 hover:border-[#cc1a1a]/30 transition-colors hover:shadow-md">
                  <div className="relative w-full h-full">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* Client Categories */}
      <section className="py-20 sm:py-24 bg-[#fafafa]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <SectionTitle
            title="Sectors We Support"
            subtitle="Tailored solutions for every industry."
            align="center"
            className="mb-12 sm:mb-16"
          />
          <AnimatedStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" staggerDelay={0.1}>
            {clientCategories.map((client) => (
              <AnimatedItem key={client.title}>
                <div className="group bg-white rounded-xl p-6 sm:p-8 h-full border border-transparent hover:border-[#cc1a1a] transition-all duration-300">
                  <div className="text-[#888888] group-hover:text-[#cc1a1a] transition-colors duration-300">
                    {clientIcons[client.icon]}
                  </div>
                  <h3 className="mt-4 sm:mt-5 font-[var(--font-barlow-condensed)] font-bold text-base sm:text-lg uppercase tracking-tight text-[#1a1a1a]">
                    {client.title}
                  </h3>
                  <p className="mt-1 sm:mt-2 text-[#888888] text-sm leading-relaxed">{client.description}</p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>
    </>
  );
}
