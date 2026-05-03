import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[80dvh] flex items-center justify-center bg-[#fafafa]">
      <div className="text-center px-4">
        <h1 className="font-[var(--font-barlow-condensed)] font-black text-[150px] leading-none text-[#cc1a1a]">
          404
        </h1>
        <h2 className="mt-4 font-[var(--font-barlow-condensed)] font-bold text-3xl uppercase tracking-tight text-[#1a1a1a]">
          Page Not Found
        </h2>
        <p className="mt-4 text-[#888888] max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#cc1a1a] text-white font-medium rounded-full hover:bg-[#b01515] transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1a1a1a] text-[#1a1a1a] font-medium rounded-full hover:bg-[#1a1a1a] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
