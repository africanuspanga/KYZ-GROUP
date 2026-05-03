"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key={`loader-${pathname}`}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-[#1a1a1a]"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <motion.div
              className="flex flex-col items-center gap-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {/* Logo placeholder */}
              <div className="w-20 h-20 rounded-full bg-[#1a1a1a] border-4 border-[#cc1a1a] flex items-center justify-center">
                <span className="text-white font-[var(--font-barlow-condensed)] font-black text-2xl">KYZ</span>
              </div>
              {/* Progress bar */}
              <div className="w-48 h-1 bg-[#333] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#cc1a1a] rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
          transition={{ duration: 0.4, delay: isLoading ? 0 : 0.1 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
