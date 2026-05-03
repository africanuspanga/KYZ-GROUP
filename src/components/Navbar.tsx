"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { services } from "@/lib/services";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  {
    href: "/services/",
    label: "Services",
    children: services.map((s) => ({ href: `/services/${s.slug}/`, label: s.title })),
  },
  { href: "/clients/", label: "Clients" },
  { href: "/why-us/", label: "Why Us" },

  { href: "/contact/", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#1a1a1a] ${
          scrolled ? "shadow-lg border-b-[3px] border-[#cc1a1a]" : ""
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative h-12 sm:h-14 w-auto aspect-[1049/707]">
                <Image
                  src="/navbar-logo.png"
                  alt="KYZ (T) GROUP LIMITED"
                  fill
                  className="object-contain"
                  priority
                  unoptimized
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.href} className="relative group">
                  {link.children ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <button
                        className={`flex items-center gap-1 px-3 py-2 text-[14px] font-medium transition-colors ${
                          isActive(link.href)
                            ? "text-[#cc1a1a]"
                            : "text-white/90 hover:text-[#cc1a1a]"
                        }`}
                      >
                        {link.label}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            className="absolute top-full left-0 mt-0 w-[640px] bg-white shadow-xl border-t-[3px] border-[#cc1a1a] p-6 grid grid-cols-3 gap-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="flex items-center gap-2 px-3 py-2 text-sm text-[#1a1a1a] hover:text-[#cc1a1a] hover:bg-[#fafafa] rounded transition-colors"
                              >
                                <span className="w-1.5 h-1.5 bg-[#cc1a1a] rounded-full shrink-0" />
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`relative px-3 py-2 text-[14px] font-medium transition-colors ${
                        isActive(link.href)
                          ? "text-[#cc1a1a]"
                          : "text-white/90 hover:text-[#cc1a1a]"
                      }`}
                    >
                      {link.label}
                      {isActive(link.href) && (
                        <motion.div
                          className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#cc1a1a]"
                          layoutId="activeNav"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden xl:block">
              <Link
                href="/contact/"
                className="inline-flex items-center px-5 py-2.5 bg-[#cc1a1a] text-white font-medium rounded-full hover:bg-[#b01515] transition-colors text-sm"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="xl:hidden p-2 text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-[#1a1a1a] flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center justify-between p-4">
              <div className="relative h-10 w-auto aspect-[1049/707]">
                <Image
                  src="/navbar-logo.png"
                  alt="KYZ (T) GROUP LIMITED"
                  fill
                  className="object-contain"
                  priority
                  unoptimized
                />
              </div>
              <button
                className="p-2 text-white"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col items-center justify-center gap-2 px-6 overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="w-full text-center"
                >
                  {link.children ? (
                    <div className="py-2">
                      <span className="block text-[#888888] text-sm mb-2 uppercase tracking-wider">
                        {link.label}
                      </span>
                      <div className="flex flex-col gap-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`text-lg font-[var(--font-barlow-condensed)] font-semibold py-1 ${
                              isActive(child.href) ? "text-[#cc1a1a]" : "text-white hover:text-[#cc1a1a]"
                            }`}
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block text-2xl sm:text-3xl font-[var(--font-barlow-condensed)] font-black uppercase tracking-tight py-2 ${
                        isActive(link.href) ? "text-[#cc1a1a]" : "text-white hover:text-[#cc1a1a]"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 w-full max-w-xs"
              >
                <Link
                  href="/contact/"
                  className="inline-flex items-center justify-center w-full px-8 py-3 bg-[#cc1a1a] text-white font-medium rounded-full hover:bg-[#b01515] transition-colors text-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  Get a Quote
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
