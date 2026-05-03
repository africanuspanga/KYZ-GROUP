"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import AnimatedSection, { AnimatedStagger, AnimatedItem } from "@/components/AnimatedSection";

const galleryImages = [
  { src: "/african business team meeting.jpg", alt: "KYZ Business Team Meeting", aspect: "aspect-[4/3]" },
  { src: "/african-american-worker-writing-inventory-list-while-checking-stock-storage-room.jpg", alt: "Inventory Management", aspect: "aspect-square" },
  { src: "/close-up-view-pattern-from-set-construction-tools-as-safety-glasses-safety-helmet-putty-knife-gloves-gray-background.jpg", alt: "Safety Equipment", aspect: "aspect-[3/4]" },
  { src: "/empty-prescription-lying-table-with-stethoscope.jpg", alt: "Medical Supplies", aspect: "aspect-[4/3]" },
  { src: "/surgical masks gloves hospital.jpg", alt: "Hospital PPE Supplies", aspect: "aspect-square" },
  { src: "/surgical masks gloves hospital 2.jpg", alt: "Medical Equipment", aspect: "aspect-[3/4]" },
  { src: "/Security-Guard-Uniform.jpg", alt: "Security Uniform Supply", aspect: "aspect-[4/3]" },
  { src: "/istockphoto-154934400-612x612.jpg", alt: "Operations", aspect: "aspect-square" },
  { src: "/istockphoto-1137944112-612x612.jpg", alt: "Supply Chain", aspect: "aspect-[3/4]" },
  { src: "/istockphoto-1316800918-612x612.jpg", alt: "Distribution", aspect: "aspect-[4/3]" },
  { src: "/istockphoto-842004634-612x612.jpg", alt: "Warehouse", aspect: "aspect-square" },
  { src: "/istockphoto-2196939193-612x612.jpg", alt: "Logistics", aspect: "aspect-[3/4]" },
  { src: "/istockphoto-2213659186-612x612.jpg", alt: "Equipment", aspect: "aspect-[4/3]" },
  { src: "/istockphoto-2214889528-612x612.jpg", alt: "Products", aspect: "aspect-square" },
  { src: "/istockphoto-615915652-612x612.jpg", alt: "Services", aspect: "aspect-[3/4]" },
];

export default function GalleryClient() {
  const [selected, setSelected] = useState<number | null>(null);

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
            Photo Gallery
          </motion.h1>
          <motion.p
            className="mt-4 sm:mt-5 text-[#888888] text-base sm:text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A glimpse into our operations, facilities, products, and team across East Africa.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <AnimatedStagger className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6" staggerDelay={0.05}>
            {galleryImages.map((img, i) => (
              <AnimatedItem key={i}>
                <motion.div
                  className={`relative ${img.aspect} mb-4 sm:mb-6 rounded-xl overflow-hidden cursor-pointer group break-inside-avoid`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelected(i)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#1a1a1a]/0 group-hover:bg-[#1a1a1a]/50 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#cc1a1a] flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                      <ZoomIn className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </motion.div>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-[70] bg-[#1a1a1a]/95 flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-white hover:text-[#cc1a1a] transition-colors z-10"
              onClick={() => setSelected(null)}
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              className="relative w-full max-w-5xl max-h-[85vh] aspect-[4/3] rounded-lg overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selected].src}
                alt={galleryImages[selected].alt}
                fill
                className="object-contain"
                unoptimized
              />
            </motion.div>
            <p className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm sm:text-base text-center max-w-lg">
              {galleryImages[selected].alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
