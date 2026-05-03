"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Award, Clock, Lightbulb, ExternalLink } from "lucide-react";
import AnimatedSection, { AnimatedStagger, AnimatedItem } from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";

const values = [
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    title: "Integrity",
    description: "We operate with complete transparency and honesty in every transaction and partnership.",
  },
  {
    icon: <Award className="w-10 h-10" />,
    title: "Quality",
    description: "Only certified, industry-standard products make it through our rigorous quality assurance.",
  },
  {
    icon: <Clock className="w-10 h-10" />,
    title: "Reliability",
    description: "On-time delivery and consistent supply you can count on for your critical operations.",
  },
  {
    icon: <Lightbulb className="w-10 h-10" />,
    title: "Innovation",
    description: "Continuously evolving our solutions to meet the changing needs of East African markets.",
  },
];

const timeline = [
  { year: "2015", title: "Founded", description: "KYZ established in Tanzania with a vision for regional supply excellence." },
  { year: "2017", title: "Kenya Expansion", description: "Extended operations to Kenya, building cross-border logistics." },
  { year: "2019", title: "Medical Division", description: "Launched dedicated medical equipment supply division." },
  { year: "2021", title: "East Africa Coverage", description: "Active across Tanzania, Kenya, Uganda, Rwanda, and Burundi." },
  { year: "2023", title: "100+ Products", description: "Catalog expanded to over 100 product lines across all sectors." },
  { year: "2025", title: "Industry Leader", description: "Recognized as a leading supply partner across East Africa." },
];

const leaders = [
  {
    name: "Elisha Ayoub",
    title: "Founder & CEO",
    bio: "Elisha Ayoub founded KYZ (T) GROUP LIMITED with a vision to transform supply and distribution across East Africa. With extensive experience in procurement and logistics, he has built the company into a trusted partner for organizations throughout the region.",
    image: "/CEO- MR SANGA ELISHA AYUBU.png",
  },
  {
    name: "President",
    title: "President",
    bio: "The President of KYZ (T) GROUP LIMITED oversees strategic operations and business development. Their leadership ensures the company continues to expand its reach while maintaining the highest standards of service excellence.",
    image: "",
  },
  {
    name: "Policy Leader",
    title: "Head of Policy & Compliance",
    bio: "Our Head of Policy & Compliance ensures that all operations adhere to international standards and local regulations. They drive the company's certification efforts and quality assurance programs.",
    image: "",
  },
];

export default function AboutClient() {
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
            KYZ (T) GROUP LIMITED
          </motion.h1>
          <motion.div
            className="mt-4 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="h-1 w-16 bg-[#cc1a1a]" />
            <span className="text-[#888888] text-base sm:text-lg uppercase tracking-wider font-[var(--font-barlow-condensed)] font-semibold">
              Our Story
            </span>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/About Us section.png"
                  alt="KYZ Group facility and operations"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div>
                <h2
                  className="font-[var(--font-barlow-condensed)] font-black uppercase tracking-tight text-[#1a1a1a] leading-[1.1]"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
                >
                  Building Trust Across East Africa
                </h2>
                <div className="mt-5 sm:mt-6 space-y-4 text-[#888888] leading-relaxed text-base sm:text-lg">
                  <p>
                    KYZ (T) GROUP LIMITED was founded with a clear mission: to bridge the supply gap for
                    critical equipment across East Africa. What began as a focused sanitation and safety
                    supplier has grown into a multi-sector distribution powerhouse serving hospitals,
                    government agencies, security organizations, and corporate clients.
                  </p>
                  <p>
                    Our geographic reach now spans five countries — Tanzania, Kenya, Uganda, Rwanda, and
                    Burundi — with a logistics network designed for reliability and speed.
                  </p>
                  <p>
                    Every product in our catalog is sourced from certified manufacturers and undergoes
                    strict quality verification. We don't just move goods; we deliver peace of mind.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 sm:py-24 bg-[#fafafa]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <SectionTitle
            title="Our Values"
            subtitle="The principles that guide every decision we make."
            align="center"
            className="mb-12 sm:mb-16"
          />
          <AnimatedStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" staggerDelay={0.1}>
            {values.map((value) => (
              <AnimatedItem key={value.title}>
                <div className="bg-white rounded-xl p-6 sm:p-8 text-center h-full border border-transparent hover:border-[#cc1a1a]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="text-[#cc1a1a] flex justify-center">{value.icon}</div>
                  <h3 className="mt-4 sm:mt-5 font-[var(--font-barlow-condensed)] font-bold text-lg sm:text-xl uppercase tracking-tight text-[#1a1a1a]">
                    {value.title}
                  </h3>
                  <p className="mt-2 sm:mt-3 text-[#888888] text-sm leading-relaxed">{value.description}</p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-24 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <SectionTitle
            title="Our Journey"
            subtitle="Key milestones that shaped who we are today."
            align="center"
            className="mb-12 sm:mb-16"
          />
          <div className="relative">
            {/* Horizontal line - desktop only */}
            <div className="absolute top-[19px] left-0 right-0 h-0.5 bg-[#e0e0e0] hidden lg:block" />
            <AnimatedStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8" staggerDelay={0.1}>
              {timeline.map((item) => (
                <AnimatedItem key={item.year}>
                  <div className="relative text-center lg:text-left">
                    <div className="w-4 h-4 rounded-full bg-[#cc1a1a] border-4 border-white shadow mx-auto lg:mx-0 relative z-10" />
                    <span className="mt-3 sm:mt-4 block font-[var(--font-barlow-condensed)] font-black text-2xl sm:text-3xl text-[#cc1a1a]">
                      {item.year}
                    </span>
                    <h4 className="mt-1 font-[var(--font-barlow-condensed)] font-bold text-base sm:text-lg uppercase tracking-tight text-[#1a1a1a]">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[#888888] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </AnimatedItem>
              ))}
            </AnimatedStagger>
          </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="py-20 sm:py-24 bg-[#fafafa]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <SectionTitle
            title="Our Leadership"
            subtitle="Meet the visionaries driving KYZ forward."
            align="center"
            className="mb-12 sm:mb-16"
          />
          <AnimatedStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" staggerDelay={0.15}>
            {leaders.map((leader) => (
              <AnimatedItem key={leader.name}>
                <div className="group bg-white rounded-xl overflow-hidden h-full border border-transparent hover:border-[#cc1a1a]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="aspect-[3/4] bg-[#f0f0f0] relative overflow-hidden">
                    {leader.image ? (
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover object-top"
                        unoptimized
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[#888888] font-medium text-sm">{leader.name} Portrait</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="font-[var(--font-barlow-condensed)] font-black text-xl sm:text-2xl uppercase tracking-tight text-[#1a1a1a]">
                      {leader.name}
                    </h3>
                    <p className="mt-1 text-[#cc1a1a] font-[var(--font-barlow-condensed)] font-semibold uppercase tracking-wider text-xs sm:text-sm">
                      {leader.title}
                    </p>
                    <p className="mt-2 sm:mt-3 text-[#888888] text-sm leading-relaxed">{leader.bio}</p>
                    {leader.image && (
                      <a
                        href="#"
                        className="mt-3 sm:mt-4 inline-flex items-center gap-2 text-[#888888] hover:text-[#cc1a1a] transition-colors"
                        aria-label="LinkedIn"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
          <motion.div
            className="text-center mt-10 sm:mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/leadership/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#cc1a1a] text-white font-medium rounded-full hover:bg-[#b01515] transition-colors"
            >
              View Full Leadership Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-0">
            <motion.div
              className="bg-[#cc1a1a] p-8 sm:p-12 lg:p-16 text-white"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-[var(--font-barlow-condensed)] font-bold uppercase tracking-wider text-white/70 text-sm">
                Our Mission
              </span>
              <h3
                className="mt-3 sm:mt-4 font-[var(--font-barlow-condensed)] font-black uppercase tracking-tight leading-[1.15]"
                style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)" }}
              >
                To deliver essential equipment and supplies that protect lives and empower organizations across East Africa.
              </h3>
            </motion.div>
            <motion.div
              className="bg-[#1a1a1a] p-8 sm:p-12 lg:p-16 text-white"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-[var(--font-barlow-condensed)] font-bold uppercase tracking-wider text-[#888888] text-sm">
                Our Vision
              </span>
              <h3
                className="mt-3 sm:mt-4 font-[var(--font-barlow-condensed)] font-black uppercase tracking-tight leading-[1.15]"
                style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)" }}
              >
                To become the most trusted supply and distribution partner for every critical sector in East Africa.
              </h3>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
