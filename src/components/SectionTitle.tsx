"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "left" | "center";
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  light = false,
  align = "left",
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      <motion.h2
        className={`font-[var(--font-barlow-condensed)] font-black uppercase tracking-tight leading-[1.1] ${
          light ? "text-white" : "text-[#1a1a1a]"
        }`}
        style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="h-1 bg-[#cc1a1a] mt-4"
        initial={{ width: 0 }}
        whileInView={{ width: align === "center" ? "80px" : "60px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ marginLeft: align === "center" ? "auto" : "0", marginRight: align === "center" ? "auto" : "0" }}
      />
      {subtitle && (
        <motion.p
          className={`mt-4 text-lg max-w-2xl ${light ? "text-white/80" : "text-[#888888]"} ${
            align === "center" ? "mx-auto" : ""
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
