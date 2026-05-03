"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import AnimatedSection, { AnimatedStagger, AnimatedItem } from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import { leadership } from "@/lib/services";

export default function LeadershipClient() {
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
            Our Leadership Team
          </motion.h1>
          <motion.p
            className="mt-4 sm:mt-5 text-[#888888] text-base sm:text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Visionary leaders driving excellence, integrity, and growth across East Africa.
          </motion.p>
        </div>
      </section>

      {/* Leadership Cards */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <AnimatedStagger
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            staggerDelay={0.15}
          >
            {leadership.map((leader, index) => (
              <AnimatedItem key={leader.name}>
                <motion.div
                  className="group bg-[#fafafa] rounded-xl overflow-hidden h-full border border-transparent hover:border-[#cc1a1a]/30 transition-all duration-300 hover:shadow-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="aspect-[3/4] relative overflow-hidden bg-[#e8e8e8]">
                    {index === 0 ? (
                      <Image
                        src="/CEO- MR SANGA ELISHA AYUBU.png"
                        alt={leader.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[#888888] font-medium text-sm">{leader.imageLabel}</span>
                      </div>
                    )}
                    {/* Red frame border on hover */}
                    <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#cc1a1a] transition-colors duration-300 pointer-events-none" />
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="font-[var(--font-barlow-condensed)] font-black text-xl sm:text-2xl uppercase tracking-tight text-[#1a1a1a]">
                      {leader.name}
                    </h3>
                    <p className="mt-1 text-[#cc1a1a] font-[var(--font-barlow-condensed)] font-semibold uppercase tracking-wider text-xs sm:text-sm">
                      {leader.title}
                    </p>
                    <p className="mt-2 sm:mt-3 text-[#888888] text-sm leading-relaxed">
                      {leader.bio}
                    </p>
                    <a
                      href="#"
                      className="mt-3 sm:mt-4 inline-flex items-center gap-2 text-[#888888] hover:text-[#cc1a1a] transition-colors"
                      aria-label={`${leader.name} LinkedIn`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>
    </>
  );
}
