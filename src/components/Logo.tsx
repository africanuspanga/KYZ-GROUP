"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
  light?: boolean;
}

export default function Logo({ className, size = 48, light = false }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
    >
      {/* Dark circular background */}
      <circle cx="100" cy="100" r="95" fill="#1a1a1a" stroke={light ? "#ffffff" : "#1a1a1a"} strokeWidth="2" />
      {/* Red arc */}
      <path
        d="M 100 15 A 85 85 0 0 1 185 100"
        stroke="#cc1a1a"
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
      />
      {/* KYZ text */}
      <text
        x="100"
        y="110"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="var(--font-barlow-condensed), sans-serif"
        fontWeight="900"
        fontSize="52"
        letterSpacing="2"
      >
        KYZ
      </text>
      {/* GROUP text */}
      <text
        x="100"
        y="140"
        textAnchor="middle"
        fill="#cc1a1a"
        fontFamily="var(--font-barlow-condensed), sans-serif"
        fontWeight="700"
        fontSize="16"
        letterSpacing="4"
      >
        GROUP
      </text>
    </svg>
  );
}
