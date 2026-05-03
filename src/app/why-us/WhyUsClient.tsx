"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import AnimatedSection, { AnimatedStagger, AnimatedItem } from "@/components/AnimatedSection";
import { whyChooseUs } from "@/lib/services";

const testimonials = [
  {
    quote:
      "KYZ has been our most reliable supplier for medical equipment. Their responsiveness and product quality are unmatched in the region.",
    author: "Dr. Emmanuel M.",
    role: "Procurement Director, Regional Hospital",
  },
  {
    quote:
      "We've partnered with KYZ for our security gear needs across multiple sites. Consistent quality and on-time delivery every single time.",
    author: "James K.",
    role: "Operations Manager, Security Firm",
  },
  {
    quote:
      "The team's expertise in supply chain management saved us significant costs while improving our operational efficiency.",
    author: "Sarah O.",
    role: "Finance Director, Manufacturing Co.",
  },
];

export default function WhyUsClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#1a1a1a] pt-32 pb-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <motion.h1
            className="font-[var(--font-barlow-condensed)] font-black uppercase tracking-tight text-white leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Why Choose <span className="text-[#cc1a1a]">KYZ</span>
          </motion.h1>
          <motion.p
            className="mt-5 text-[#888888] text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Six powerful reasons organizations across East Africa trust us as their supply partner.
          </motion.p>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <AnimatedStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {whyChooseUs.map((item) => (
              <AnimatedItem key={item.number}>
                <div className="bg-[#fafafa] rounded-xl p-8 h-full border border-transparent hover:border-[#cc1a1a]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="font-[var(--font-barlow-condensed)] font-black text-5xl text-[#cc1a1a]">
                    {item.number}
                  </span>
                  <h3 className="mt-4 font-[var(--font-barlow-condensed)] font-bold text-xl uppercase tracking-tight text-[#1a1a1a]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[#888888] leading-relaxed text-sm">{item.description}</p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2
                className="font-[var(--font-barlow-condensed)] font-black uppercase tracking-tight text-[#1a1a1a] leading-[1.1]"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                What Our Clients Say
              </h2>
              <div className="h-1 bg-[#cc1a1a] mt-4 mx-auto w-16" />
            </div>
          </AnimatedSection>
          <AnimatedStagger className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {testimonials.map((t, i) => (
              <AnimatedItem key={i}>
                <div className="bg-white rounded-xl p-8 h-full relative">
                  <Quote className="w-10 h-10 text-[#cc1a1a]/20 absolute top-4 right-4" />
                  <p className="text-[#1a1a1a] leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-6 pt-6 border-t border-[#f0f0f0]">
                    <p className="font-[var(--font-barlow-condensed)] font-bold text-[#1a1a1a]">{t.author}</p>
                    <p className="text-[#888888] text-sm">{t.role}</p>
                  </div>
                </div>
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
              Ready to Experience the KYZ Difference?
            </h2>
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-white text-[#cc1a1a] font-bold rounded-full hover:bg-[#fafafa] transition-colors"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
