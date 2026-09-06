import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  theme?: "light" | "dark";
  showText?: boolean;
}

export function LopoLogo({
  size = "md",
  theme = "light",
  className = "",
  showText = true,
}: LogoProps) {
  const amber = "#F59E0B";
  const darkNavy = "#0F172A";

  const isDark = theme === "dark";

  const dimensions = {
    sm: { icon: 34, title: "text-lg", sub: "text-[9px]" },
    md: { icon: 44, title: "text-2xl", sub: "text-[10px]" },
    lg: { icon: 54, title: "text-3xl", sub: "text-[11px]" },
    xl: { icon: 68, title: "text-4xl", sub: "text-[12px]" },
  }[size] || { icon: 44, title: "text-2xl", sub: "text-[10px]" };

  return (
    <div className={`group inline-flex items-center gap-3 select-none ${className}`}>
      {/* ─── BuildNext Style Geometric Building Icon ─── */}
      <span className="arz-badge relative shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg
          width={dimensions.icon}
          height={dimensions.icon}
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Building 1 (Tall center tower) */}
          <rect x="18" y="8" width="10" height="30" rx="1.5" fill={amber} />
          {/* Building 2 (Left tower) */}
          <rect x="8" y="16" width="8" height="22" rx="1.5" fill={isDark ? "#FFFFFF" : darkNavy} opacity="0.9" />
          {/* Building 3 (Right tower) */}
          <rect x="30" y="22" width="8" height="16" rx="1.5" fill={amber} opacity="0.85" />
          
          {/* Windows / Structural Beams */}
          <rect x="21" y="13" width="4" height="4" rx="0.5" fill={isDark ? darkNavy : "#FFFFFF"} />
          <rect x="21" y="20" width="4" height="4" rx="0.5" fill={isDark ? darkNavy : "#FFFFFF"} />
          <rect x="21" y="27" width="4" height="4" rx="0.5" fill={isDark ? darkNavy : "#FFFFFF"} />
          <rect x="10" y="21" width="4" height="4" rx="0.5" fill={amber} />
          <rect x="10" y="28" width="4" height="4" rx="0.5" fill={amber} />

          {/* Roof Crane Beam */}
          <path d="M14 8L22 4L30 8" stroke={amber} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>

      {/* ─── Clean Typography ─── */}
      {showText && (
        <div className="flex flex-col leading-none">
          <div className={`font-black tracking-tight ${dimensions.title}`}>
            <span className={isDark ? "text-white" : "text-[#0F172A]"}>LO</span>
            <span className="text-[#F59E0B]">PO</span>
          </div>
          <span
            className={`mt-1 font-bold uppercase tracking-[0.22em] ${dimensions.sub} ${
              isDark ? "text-slate-300" : "text-[#64748B]"
            }`}
          >
            Construction Ltd
          </span>
        </div>
      )}
    </div>
  );
}

export const LOPOLogo = LopoLogo;
export const ArzLogo = LopoLogo;
