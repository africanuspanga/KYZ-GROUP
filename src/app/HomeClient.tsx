"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView, useMotionValue, animate, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Droplets, Shield, Lock, HeartPulse, Recycle, Shirt, SprayCan, Building, Truck, Factory, Landmark, GraduationCap, ShieldCheck, Building2, Quote } from "lucide-react";
import AnimatedSection, { AnimatedStagger, AnimatedItem } from "@/components/AnimatedSection";
import SectionTitle from "@/components/SectionTitle";
import ParticleBackground from "@/components/ParticleBackground";
import { services, clientCategories, whyChooseUs } from "@/lib/services";

const heroSlides = [
  { src: "/Hero Slider 1.jpg", alt: "KYZ Group Operations" },
  { src: "/slider 2.jpg", alt: "Supply Chain Excellence" },
  { src: "/slider 3.jpg", alt: "East Africa Coverage" },
];

const clientLogos = [
  { src: "/LOGOS/FAO.png", alt: "FAO" },
  { src: "/LOGOS/LOGO.png", alt: "Partner Logo" },
  { src: "/LOGOS/LOGO 2.png", alt: "Partner Logo 2" },
  { src: "/LOGOS/LOGO3 .png", alt: "Partner Logo 3" },
  { src: "/LOGOS/TZ GVT.png", alt: "Tanzania Government" },
];

// Animated counter component
function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);

  useEffect(() => {
    if (isInView && ref.current) {
      const num = parseInt(target.replace(/\D/g, ""));
      const controls = animate(count, num, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (value) => {
          if (ref.current) {
            ref.current.textContent = Math.round(value) + suffix;
          }
        },
      });
      return controls.stop;
    }
  }, [isInView, target, suffix, count]);

  return <span ref={ref}>0{suffix}</span>;
}

const serviceIcons: Record<string, React.ReactNode> = {
  Droplets: <Droplets className="w-12 h-12" />,
  Shield: <Shield className="w-12 h-12" />,
  Lock: <Lock className="w-12 h-12" />,
  HeartPulse: <HeartPulse className="w-12 h-12" />,
  Recycle: <Recycle className="w-12 h-12" />,
  Shirt: <Shirt className="w-12 h-12" />,
  SprayCan: <SprayCan className="w-12 h-12" />,
  Building: <Building className="w-12 h-12" />,
  Truck: <Truck className="w-12 h-12" />,
};

const clientIcons: Record<string, React.ReactNode> = {
  HeartPulse: <HeartPulse className="w-8 h-8" />,
  Landmark: <Landmark className="w-8 h-8" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8" />,
  GraduationCap: <GraduationCap className="w-8 h-8" />,
  Factory: <Factory className="w-8 h-8" />,
  Building2: <Building2 className="w-8 h-8" />,
};

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <Image
            src={heroSlides[current].src}
            alt={heroSlides[current].alt}
            fill
            className="object-cover"
            priority={current === 0}
            unoptimized
          />
        </motion.div>
      </AnimatePresence>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 via-[#1a1a1a]/70 to-[#1a1a1a]/40" />
      {/* Slide indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-[#cc1a1a] w-8" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function HomeClient() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <>
      {/* Hero Section with Slider */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
        <HeroSlider />
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 w-full py-32">
          <div className="max-w-3xl">
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h1
                className="font-[var(--font-barlow-condensed)] font-black text-white uppercase leading-[1.05]"
                style={{ fontSize: "clamp(2.5rem, 8vw, 6.5rem)" }}
              >
                SUPPLYING TRUST.
                <br />
                <span className="text-[#cc1a1a]">DELIVERING SAFETY.</span>
              </h1>
            </motion.div>

            <motion.p
              className="mt-6 text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Your trusted partner for essential equipment across East Africa.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Link
                href="/services/"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#cc1a1a] text-white font-medium rounded-full hover:bg-[#b01515] transition-colors text-base"
              >
                Explore Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-[#1a1a1a] transition-colors text-base"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/70" />
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#1a1a1a] py-12 sm:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: "4", suffix: "+", label: "Core Sectors" },
              { value: "100", suffix: "+", label: "Products" },
              { value: "6", suffix: "", label: "Client Categories" },
              { value: "1", suffix: "", label: "East Africa Coverage" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="font-[var(--font-barlow-condensed)] font-black text-4xl sm:text-5xl lg:text-6xl text-white">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-[#888888] text-xs sm:text-sm uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <SectionTitle
            title="What We Do"
            subtitle="Comprehensive supply and distribution solutions across four critical sectors."
            align="center"
            className="mb-12 sm:mb-16"
          />

          <AnimatedStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" staggerDelay={0.1}>
            {services.slice(0, 4).map((service) => (
              <AnimatedItem key={service.slug}>
                <Link href={`/services/${service.slug}/`} className="group block">
                  <div className="bg-[#fafafa] rounded-xl p-6 sm:p-8 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-[#cc1a1a]/20">
                    <div className="text-[#cc1a1a] transition-transform duration-300 group-hover:scale-110">
                      {serviceIcons[service.icon]}
                    </div>
                    <h3 className="mt-5 sm:mt-6 font-[var(--font-barlow-condensed)] font-bold text-lg sm:text-xl uppercase tracking-tight text-[#1a1a1a]">
                      {service.title}
                    </h3>
                    <p className="mt-2 sm:mt-3 text-[#888888] text-sm leading-relaxed line-clamp-2">
                      {service.shortDesc}
                    </p>
                    <div className="mt-4 sm:mt-5 inline-flex items-center gap-2 text-[#cc1a1a] font-medium text-sm group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20 sm:py-24 bg-[#1a1a1a]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimatedSection>
              <div className="relative aspect-[3/4] sm:aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden">
                <Image
                  src="/CEO- MR SANGA ELISHA AYUBU.png"
                  alt="Elisha Ayoub - Founder & CEO of KYZ (T) GROUP LIMITED"
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a1a1a] to-transparent h-32" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-[var(--font-barlow-condensed)] font-black text-xl sm:text-2xl text-white uppercase">
                    Elisha Ayoub
                  </p>
                  <p className="text-[#cc1a1a] font-medium text-sm uppercase tracking-wider">
                    Founder & CEO
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <div className="relative">
              <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-[#cc1a1a]/30 mb-4 sm:mb-6" />
              <AnimatedSection>
                <h2
                  className="font-[var(--font-barlow-condensed)] font-black uppercase tracking-tight text-white leading-[1.1]"
                  style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
                >
                  A Message From Our CEO
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <p className="mt-6 text-white/80 text-lg sm:text-xl leading-relaxed italic">
                  &ldquo;We are committed to providing excellence to our clients and providing high quality services. At KYZ Group, we believe that trust is built through consistent delivery, uncompromising standards, and genuine partnership.&rdquo;
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <div className="mt-6 sm:mt-8 flex items-center gap-4">
                  <div className="h-1 w-12 bg-[#cc1a1a]" />
                  <p className="text-[#888888] text-sm uppercase tracking-wider">
                    Elisha Ayoub, Founder & CEO
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Marquee */}
      <section className="bg-white py-12 sm:py-16 overflow-hidden border-y border-[#f0f0f0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mb-6 sm:mb-8">
          <p className="text-center text-[#888888] text-sm uppercase tracking-wider font-medium">
            Trusted by leading organizations across East Africa
          </p>
        </div>
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />
          
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-12 sm:gap-16 px-6 sm:px-8 shrink-0">
                {clientLogos.map((logo, i) => (
                  <div
                    key={`${setIndex}-${i}`}
                    className="relative h-12 sm:h-16 w-28 sm:w-40 transition-all duration-300 opacity-80 hover:opacity-100"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 sm:py-24 bg-[#fafafa]" ref={aboutRef}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Left: Image with parallax */}
            <motion.div className="relative" style={{ y: imageY }}>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/About Us section.png"
                  alt="KYZ Group facility and operations"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              {/* Red corner bracket */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-l-[4px] border-t-[4px] border-[#cc1a1a] rounded-tl-lg" />
            </motion.div>

            {/* Right: Text */}
            <div className="relative">
              {/* Red vertical accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#cc1a1a] hidden lg:block -ml-6" />

              <AnimatedSection>
                <h2
                  className="font-[var(--font-barlow-condensed)] font-black uppercase tracking-tight text-[#1a1a1a] leading-[1.1]"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                >
                  Trusted Across East Africa
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="mt-5 sm:mt-6 text-[#888888] leading-relaxed text-base sm:text-lg">
                  KYZ (T) GROUP LIMITED has established itself as a premier supply and distribution partner
                  for organizations across East Africa. From hospitals and government institutions to
                  security agencies and corporate enterprises, we deliver the essential equipment that
                  keeps communities safe, healthy, and secure.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="mt-3 sm:mt-4 text-[#888888] leading-relaxed text-base sm:text-lg">
                  Founded with a commitment to quality and reliability, our company has grown to serve
                  multiple sectors with an ever-expanding product portfolio and distribution network that
                  spans Tanzania, Kenya, Uganda, Rwanda, and Burundi.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <Link
                  href="/about/"
                  className="inline-flex items-center gap-2 mt-6 sm:mt-8 px-6 py-3 border-2 border-[#cc1a1a] text-[#cc1a1a] font-medium rounded-full hover:bg-[#cc1a1a] hover:text-white transition-colors"
                >
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Marquee */}
      <section className="bg-[#cc1a1a] py-5 sm:py-6 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center gap-6 sm:gap-8 px-4 shrink-0">
              {[
                "Waste Management",
                "Uniforms",
                "Fumigation",
                "Real Estate",
                "Equipment Rentals",
                "Material Supply",
                "Supply Chain",
                "Logistics",
              ].map((item) => (
                <span
                  key={`${setIndex}-${item}`}
                  className="font-[var(--font-barlow-condensed)] font-bold text-lg sm:text-xl uppercase tracking-wide text-white"
                >
                  {item} &nbsp;·&nbsp;
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Target Clients */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <SectionTitle
            title="Who We Serve"
            subtitle="Trusted by diverse organizations across East Africa."
            align="center"
            className="mb-12 sm:mb-16"
          />

          <AnimatedStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" staggerDelay={0.1}>
            {clientCategories.map((client) => (
              <AnimatedItem key={client.title}>
                <div className="group bg-[#fafafa] rounded-xl p-6 sm:p-8 h-full border border-transparent hover:border-[#cc1a1a] transition-all duration-300">
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

      {/* Why Choose Us Teaser */}
      <section className="py-20 sm:py-24 bg-[#1a1a1a]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2
              className="font-[var(--font-barlow-condensed)] font-black uppercase tracking-tight text-white leading-[1.1]"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Six Reasons to Partner With KYZ
            </motion.h2>
            <motion.div
              className="h-1 bg-[#cc1a1a] mt-4 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>

          <AnimatedStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" staggerDelay={0.15}>
            {whyChooseUs.slice(0, 3).map((item) => (
              <AnimatedItem key={item.number}>
                <div className="text-center sm:text-left">
                  <span className="font-[var(--font-barlow-condensed)] font-black text-4xl sm:text-5xl lg:text-6xl text-[#cc1a1a]">
                    {item.number}
                  </span>
                  <h3 className="mt-3 sm:mt-4 font-[var(--font-barlow-condensed)] font-bold text-lg sm:text-xl uppercase tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 sm:mt-3 text-[#888888] leading-relaxed text-sm">{item.description}</p>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedStagger>

          <motion.div
            className="text-center mt-10 sm:mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link
              href="/why-us/"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#cc1a1a] text-[#cc1a1a] font-medium rounded-full hover:bg-[#cc1a1a] hover:text-white transition-colors"
            >
              See All Reasons
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 sm:py-24 bg-[#cc1a1a] overflow-hidden">
        {/* Animated diagonal lines pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonalLines)" />
          </svg>
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <motion.h2
            className="font-[var(--font-barlow-condensed)] font-black uppercase tracking-tight text-white leading-[1.1]"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Supply Your Organization?
          </motion.h2>
          <motion.p
            className="mt-4 sm:mt-5 text-white/90 text-base sm:text-lg max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get in touch and receive a custom quote within 24 hours.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 mt-6 sm:mt-8 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-[#cc1a1a] font-bold rounded-full hover:bg-[#fafafa] transition-colors text-base sm:text-lg"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 sm:py-20 bg-[#f0f0f0]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <AnimatedSection>
            <div className="text-center mb-10 sm:mb-12">
              <h2
                className="font-[var(--font-barlow-condensed)] font-black uppercase tracking-tight text-[#1a1a1a] leading-[1.1]"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
              >
                Certifications & Compliance
              </h2>
              <div className="h-1 bg-[#cc1a1a] mt-4 mx-auto w-16" />
            </div>
          </AnimatedSection>
          <AnimatedStagger className="grid sm:grid-cols-3 gap-6 sm:gap-8" staggerDelay={0.15}>
            {[
              { src: "/cert-1.png", alt: "KYZ Certification 1" },
              { src: "/cert-2.png", alt: "KYZ Certification 2" },
              { src: "/cert-3.png", alt: "KYZ Certification 3" },
            ].map((cert) => (
              <AnimatedItem key={cert.src}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-[#e0e0e0]">
                  <div className="relative aspect-[3/4] bg-[#fafafa]">
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      fill
                      className="object-contain p-4 sm:p-6"
                      unoptimized
                    />
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>
    </>
  );
}
