"use client";

import { motion } from "framer-motion";
import { Eye, Download, FileCheck } from "lucide-react";
import AnimatedSection, { AnimatedStagger, AnimatedItem } from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import { certifications } from "@/lib/services";

export default function CertificationsClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#fafafa] pt-32 pb-20 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <SectionTitle
            title="Certifications & Compliance"
            subtitle="Internationally recognized standards that ensure quality, safety, and trust in every product we deliver."
            align="center"
            className="mb-4"
          />
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <AnimatedStagger
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            staggerDelay={0.12}
          >
            {certifications.map((cert) => (
              <AnimatedItem key={cert.label}>
                <motion.div
                  className="group relative cursor-pointer"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Portrait Container */}
                  <div className="relative aspect-[3/4] rounded-xl border-2 border-dashed border-[#888888] bg-[#fafafa] overflow-hidden transition-colors duration-300 group-hover:border-[#cc1a1a]">
                    {/* Label */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                      <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#888888] flex items-center justify-center mb-4 transition-colors duration-300 group-hover:border-[#cc1a1a]">
                        <FileCheck className="w-7 h-7 text-[#888888] transition-colors duration-300 group-hover:text-[#cc1a1a]" />
                      </div>
                      <span className="font-[var(--font-barlow-condensed)] font-black text-2xl uppercase tracking-tight text-[#1a1a1a]">
                        {cert.label}
                      </span>
                      <p className="mt-2 text-xs text-[#888888] text-center leading-relaxed">
                        {cert.description}
                      </p>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#1a1a1a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                      <Eye className="w-8 h-8 text-white" />
                      <span className="mt-2 text-white text-sm font-medium">
                        View Certificate
                      </span>
                    </div>
                  </div>

                  {/* Name below card */}
                  <p className="mt-4 text-center font-[var(--font-barlow-condensed)] font-bold text-lg uppercase tracking-tight text-[#1a1a1a]">
                    {cert.name}
                  </p>
                </motion.div>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* Compliance Text Block */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <h2
                className="font-[var(--font-barlow-condensed)] font-black uppercase tracking-tight text-[#1a1a1a] leading-[1.1] text-center"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
              >
                Our Commitment to Standards
              </h2>
              <div className="h-1 bg-[#cc1a1a] mt-4 mx-auto w-16" />
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="mt-8 text-[#888888] leading-relaxed text-center">
                At KYZ (T) GROUP LIMITED, compliance is not an afterthought — it is embedded
                into every stage of our supply chain. We adhere to World Health Organization
                guidelines for medical and sanitation products, ensuring that every item meets
                rigorous health and safety benchmarks before it reaches our clients.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mt-4 text-[#888888] leading-relaxed text-center">
                Our safety equipment and personal protective gear conform to OSHA standards,
                providing reliable protection for workers across industrial, construction, and
                institutional environments. Additionally, our ISO 9001:2015 certification
                reflects our dedication to continuous quality improvement and customer
                satisfaction.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="mt-4 text-[#888888] leading-relaxed text-center">
                As a fully registered and licensed business operating across East Africa, we
                maintain transparent documentation and are always prepared for audits and
                regulatory inspections. Our clients trust us because we never compromise on
                compliance.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <AnimatedSection>
            <h2
              className="font-[var(--font-barlow-condensed)] font-black uppercase tracking-tight text-white leading-[1.1]"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
            >
              Learn More About Our Company
            </h2>
            <p className="mt-4 text-[#888888] max-w-xl mx-auto">
              Download our comprehensive company profile to explore our full range of services,
              certifications, and partnership opportunities.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <a
              href="#"
              className="inline-flex items-center gap-3 mt-8 px-8 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-[#1a1a1a] transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Our Company Profile
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
