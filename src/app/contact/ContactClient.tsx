"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  User,
  Building2,
  MessageSquare,
  ChevronDown,
  Headphones,
  Navigation,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection, { AnimatedStagger, AnimatedItem } from "@/components/AnimatedSection";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  organization: z.string().optional(),
  phone: z.string().min(6, "Phone is required"),
  email: z.string().email("Invalid email"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const services = [
  "Sanitation & Hygiene",
  "Safety & PPE",
  "Security & Tactical",
  "Medical Equipment",
  "Supply Chain & Logistics",
  "Waste Management",
  "Uniform Supply",
  "Fumigation",
  "Real Estate & Rentals",
  "Other",
];

const contactDetails = [
  {
    icon: Phone,
    label: "CEO Phone",
    values: ["0759 300 008", "0736 000 019", "0654 560 560"],
  },
  {
    icon: Headphones,
    label: "Office",
    values: ["0759-800032"],
  },
  {
    icon: Mail,
    label: "Email",
    values: ["info@kyzgroup.co.tz", "elishaayoub@kyzgroup.co.tz", "elishaayoub@gmail.com"],
  },
];

export default function ContactClient() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsLoading(false);
    setIsSuccess(true);
    reset();
    // Reset success state after 4 seconds
    setTimeout(() => setIsSuccess(false), 4000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1a1a1a] py-24 md:py-32 lg:py-40">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#cc1a1a]/10 blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#cc1a1a]/5 blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="font-[var(--font-barlow-condensed)] font-black uppercase tracking-tight text-white leading-[0.9]"
            style={{ fontSize: "clamp(3.5rem, 12vw, 10rem)" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Let&apos;s{" "}
            <span className="text-[#cc1a1a]">Talk</span>
          </motion.h1>
          <motion.div
            className="h-1 bg-[#cc1a1a] mt-6 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <motion.p
            className="mt-6 text-lg md:text-xl text-[#888888] max-w-2xl mx-auto font-[var(--font-lato)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Reach out for quotes, partnerships, or any inquiries. We respond within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Contact Form + Details */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: Form */}
            <AnimatedSection className="lg:col-span-3">
              <div className="bg-[#fafafa] rounded-2xl p-8 md:p-10 border border-[#f0f0f0]">
                <h3 className="font-[var(--font-barlow-condensed)] font-bold text-2xl md:text-3xl text-[#1a1a1a] uppercase tracking-tight mb-8">
                  Send us a message
                </h3>

                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      >
                        <CheckCircle2 className="w-20 h-20 text-[#cc1a1a] mb-6" />
                      </motion.div>
                      <h4 className="font-[var(--font-barlow-condensed)] font-bold text-2xl text-[#1a1a1a] uppercase">
                        Message Sent!
                      </h4>
                      <p className="mt-2 text-[#888888] max-w-md">
                        Thank you for reaching out. Our team will get back to you shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                          <label className="block text-sm font-medium text-[#1a1a1a] mb-2">
                            Name <span className="text-[#cc1a1a]">*</span>
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#888888]" />
                            <input
                              {...register("name")}
                              type="text"
                              placeholder="Your full name"
                              className="w-full pl-10 pr-4 py-3 bg-white border border-[#f0f0f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cc1a1a]/20 focus:border-[#cc1a1a] transition-all text-[#1a1a1a] placeholder:text-[#888888]/60"
                            />
                          </div>
                          {errors.name && (
                            <p className="mt-1.5 text-sm text-[#cc1a1a]">{errors.name.message}</p>
                          )}
                        </div>

                        {/* Organization */}
                        <div>
                          <label className="block text-sm font-medium text-[#1a1a1a] mb-2">
                            Organization
                          </label>
                          <div className="relative">
                            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#888888]" />
                            <input
                              {...register("organization")}
                              type="text"
                              placeholder="Company or organization"
                              className="w-full pl-10 pr-4 py-3 bg-white border border-[#f0f0f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cc1a1a]/20 focus:border-[#cc1a1a] transition-all text-[#1a1a1a] placeholder:text-[#888888]/60"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Phone */}
                        <div>
                          <label className="block text-sm font-medium text-[#1a1a1a] mb-2">
                            Phone <span className="text-[#cc1a1a]">*</span>
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#888888]" />
                            <input
                              {...register("phone")}
                              type="tel"
                              placeholder="Phone number"
                              className="w-full pl-10 pr-4 py-3 bg-white border border-[#f0f0f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cc1a1a]/20 focus:border-[#cc1a1a] transition-all text-[#1a1a1a] placeholder:text-[#888888]/60"
                            />
                          </div>
                          {errors.phone && (
                            <p className="mt-1.5 text-sm text-[#cc1a1a]">{errors.phone.message}</p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-sm font-medium text-[#1a1a1a] mb-2">
                            Email <span className="text-[#cc1a1a]">*</span>
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#888888]" />
                            <input
                              {...register("email")}
                              type="email"
                              placeholder="email@example.com"
                              className="w-full pl-10 pr-4 py-3 bg-white border border-[#f0f0f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cc1a1a]/20 focus:border-[#cc1a1a] transition-all text-[#1a1a1a] placeholder:text-[#888888]/60"
                            />
                          </div>
                          {errors.email && (
                            <p className="mt-1.5 text-sm text-[#cc1a1a]">{errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      {/* Service Interest */}
                      <div>
                        <label className="block text-sm font-medium text-[#1a1a1a] mb-2">
                          Service Interest <span className="text-[#cc1a1a]">*</span>
                        </label>
                        <div className="relative">
                          <select
                            {...register("service")}
                            className="w-full px-4 py-3 bg-white border border-[#f0f0f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cc1a1a]/20 focus:border-[#cc1a1a] transition-all text-[#1a1a1a] appearance-none cursor-pointer"
                            defaultValue=""
                          >
                            <option value="" disabled>
                              Select a service
                            </option>
                            {services.map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#888888] pointer-events-none" />
                        </div>
                        {errors.service && (
                          <p className="mt-1.5 text-sm text-[#cc1a1a]">{errors.service.message}</p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-medium text-[#1a1a1a] mb-2">
                          Message <span className="text-[#cc1a1a]">*</span>
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-[#888888]" />
                          <textarea
                            {...register("message")}
                            rows={5}
                            placeholder="Tell us about your project or inquiry..."
                            className="w-full pl-10 pr-4 py-3 bg-white border border-[#f0f0f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#cc1a1a]/20 focus:border-[#cc1a1a] transition-all text-[#1a1a1a] placeholder:text-[#888888]/60 resize-none"
                          />
                        </div>
                        {errors.message && (
                          <p className="mt-1.5 text-sm text-[#cc1a1a]">{errors.message.message}</p>
                        )}
                      </div>

                      {/* Submit */}
                      <motion.button
                        type="submit"
                        disabled={isLoading}
                        className="inline-flex items-center justify-center gap-2 bg-[#cc1a1a] hover:bg-[#b01515] text-white font-semibold px-8 py-4 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed w-full md:w-auto"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>

            {/* Right: Contact Details */}
            <div className="lg:col-span-2 space-y-8">
              <AnimatedSection delay={0.1}>
                <div className="bg-[#1a1a1a] rounded-2xl p-8 md:p-10 text-white">
                  <h3 className="font-[var(--font-barlow-condensed)] font-bold text-2xl uppercase tracking-tight mb-8">
                    Contact Details
                  </h3>

                  <div className="space-y-8">
                    {contactDetails.map((item, index) => (
                      <motion.div
                        key={item.label}
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      >
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#cc1a1a]/10 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-[#cc1a1a]" />
                        </div>
                        <div>
                          <p className="text-sm text-[#888888] uppercase tracking-wider font-medium mb-1">
                            {item.label}
                          </p>
                          <div className="space-y-1">
                            {item.values.map((value) => (
                              <p key={value} className="text-white font-medium">
                                {value}
                              </p>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Office Hours */}
              <AnimatedSection delay={0.3}>
                <div className="bg-[#fafafa] rounded-2xl p-8 border border-[#f0f0f0]">
                  <h4 className="font-[var(--font-barlow-condensed)] font-bold text-xl uppercase tracking-tight text-[#1a1a1a] mb-4">
                    Office Hours
                  </h4>
                  <div className="space-y-2 text-[#888888]">
                    <div className="flex justify-between">
                      <span>Monday – Friday</span>
                      <span className="text-[#1a1a1a] font-medium">08:00 – 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-[#1a1a1a] font-medium">09:00 – 13:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-[#1a1a1a] font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Find Us" subtitle="Visit our headquarters in Tanzania" align="center" className="mb-12" />
          <AnimatedSection>
            <div className="relative w-full h-[400px] md:h-[500px] bg-[#f0f0f0] rounded-2xl overflow-hidden flex flex-col items-center justify-center border border-[#e0e0e0]">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full bg-[#cc1a1a]/10 flex items-center justify-center mb-4">
                  <MapPin className="w-10 h-10 text-[#cc1a1a]" />
                </div>
                <p className="font-[var(--font-barlow-condensed)] font-bold text-2xl text-[#1a1a1a] uppercase tracking-tight">
                  Our Office Location
                </p>
                <p className="mt-2 text-[#888888] text-center max-w-md">
                  KYZ (T) GROUP LIMITED — Tanzania, East Africa
                </p>
              </motion.div>

              {/* Decorative grid */}
              <div className="absolute inset-0 opacity-50 pointer-events-none" style={{ backgroundImage: "linear-gradient(#e0e0e0 1px, transparent 1px), linear-gradient(90deg, #e0e0e0 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick Contact Strip */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedStagger className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {/* Call CEO */}
            <AnimatedItem>
              <a
                href="tel:+255759300008"
                className="group block bg-[#fafafa] hover:bg-[#1a1a1a] rounded-2xl p-8 border border-[#f0f0f0] hover:border-[#1a1a1a] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-[#cc1a1a]/10 group-hover:bg-[#cc1a1a] flex items-center justify-center mb-6 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-[#cc1a1a] group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="font-[var(--font-barlow-condensed)] font-bold text-xl uppercase tracking-tight text-[#1a1a1a] group-hover:text-white transition-colors duration-300">
                  Call CEO
                </h4>
                <p className="mt-2 text-[#888888] group-hover:text-[#888888]/80 transition-colors duration-300">
                  Speak directly with our leadership team for urgent matters.
                </p>
                <div className="mt-4 flex items-center gap-2 text-[#cc1a1a] group-hover:text-[#cc1a1a] font-medium">
                  <span>0759 300 008</span>
                  <Navigation className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </a>
            </AnimatedItem>

            {/* Email Us */}
            <AnimatedItem>
              <a
                href="mailto:info@kyzgroup.co.tz"
                className="group block bg-[#fafafa] hover:bg-[#1a1a1a] rounded-2xl p-8 border border-[#f0f0f0] hover:border-[#1a1a1a] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-[#cc1a1a]/10 group-hover:bg-[#cc1a1a] flex items-center justify-center mb-6 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-[#cc1a1a] group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="font-[var(--font-barlow-condensed)] font-bold text-xl uppercase tracking-tight text-[#1a1a1a] group-hover:text-white transition-colors duration-300">
                  Email Us
                </h4>
                <p className="mt-2 text-[#888888] group-hover:text-[#888888]/80 transition-colors duration-300">
                  Send inquiries, RFQs, or partnership proposals anytime.
                </p>
                <div className="mt-4 flex items-center gap-2 text-[#cc1a1a] group-hover:text-[#cc1a1a] font-medium">
                  <span>info@kyzgroup.co.tz</span>
                  <Navigation className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </a>
            </AnimatedItem>

            {/* Visit Office */}
            <AnimatedItem>
              <div className="group block bg-[#fafafa] hover:bg-[#1a1a1a] rounded-2xl p-8 border border-[#f0f0f0] hover:border-[#1a1a1a] transition-all duration-300 cursor-default">
                <div className="w-14 h-14 rounded-xl bg-[#cc1a1a]/10 group-hover:bg-[#cc1a1a] flex items-center justify-center mb-6 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-[#cc1a1a] group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="font-[var(--font-barlow-condensed)] font-bold text-xl uppercase tracking-tight text-[#1a1a1a] group-hover:text-white transition-colors duration-300">
                  Visit Office
                </h4>
                <p className="mt-2 text-[#888888] group-hover:text-[#888888]/80 transition-colors duration-300">
                  Drop by during office hours for a face-to-face consultation.
                </p>
                <div className="mt-4 flex items-center gap-2 text-[#cc1a1a] group-hover:text-[#cc1a1a] font-medium">
                  <span>Tanzania, East Africa</span>
                  <Navigation className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>
            </AnimatedItem>
          </AnimatedStagger>
        </div>
      </section>
    </div>
  );
}
