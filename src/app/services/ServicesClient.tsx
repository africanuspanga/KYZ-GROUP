"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Shield, Lock, HeartPulse, Truck, Recycle, Shirt, SprayCan, Building, Home } from "lucide-react";
import AnimatedSection, { AnimatedStagger, AnimatedItem } from "@/components/AnimatedSection";
import { services } from "@/lib/services";

const iconMap: Record<string, React.ReactNode> = {
  Droplets: <Droplets className="w-10 h-10" />,
  Shield: <Shield className="w-10 h-10" />,
  Lock: <Lock className="w-10 h-10" />,
  HeartPulse: <HeartPulse className="w-10 h-10" />,
  Truck: <Truck className="w-10 h-10" />,
  Recycle: <Recycle className="w-10 h-10" />,
  Shirt: <Shirt className="w-10 h-10" />,
  SprayCan: <SprayCan className="w-10 h-10" />,
  Building: <Building className="w-10 h-10" />,
};

export default function ServicesClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1a1a1a] pt-32 pb-20">
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
            <span className="text-[#cc1a1a]">Services</span>
          </motion.div>
          <motion.h1
            className="font-[var(--font-barlow-condensed)] font-black uppercase tracking-tight text-white leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="mt-5 text-[#888888] text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Comprehensive supply and distribution solutions across nine specialized categories.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <AnimatedStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {services.map((service) => (
              <AnimatedItem key={service.slug}>
                <Link href={`/services/${service.slug}/`} className="group block h-full">
                  <div className="bg-[#fafafa] rounded-xl p-8 h-full border border-transparent hover:border-[#cc1a1a]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-[#cc1a1a]/5">
                    <div className="text-[#cc1a1a] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      {iconMap[service.icon]}
                    </div>
                    <h3 className="mt-6 font-[var(--font-barlow-condensed)] font-bold text-xl uppercase tracking-tight text-[#1a1a1a]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[#888888] text-sm leading-relaxed">{service.shortDesc}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-[#cc1a1a] font-medium text-sm group-hover:gap-3 transition-all">
                      View Service <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#cc1a1a]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <AnimatedSection>
            <h2
              className="font-[var(--font-barlow-condensed)] font-black uppercase tracking-tight text-white leading-[1.1]"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
            >
              Need a Custom Supply Solution?
            </h2>
            <p className="mt-4 text-white/90 max-w-xl mx-auto">
              Our team will design a tailored package for your organization&apos;s specific requirements.
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-white text-[#cc1a1a] font-bold rounded-full hover:bg-[#fafafa] transition-colors"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
