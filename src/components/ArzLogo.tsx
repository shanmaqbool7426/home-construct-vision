import React from "react";
import logoImg from "@/assets/logo.png";

interface ArzLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  height?: number | string;
  alt?: string;
  theme?: "light" | "dark";
  variant?: "full" | "icon-only" | "mark-only" | "text-only";
}

const sizeClasses = {
  sm: "h-11 md:h-12",
  md: "h-16 md:h-20",
  lg: "h-20 md:h-24",
  xl: "h-28 md:h-36",
};

export function ArzLogo({
  size = "md",
  theme = "light",
  className = "",
  height,
  alt = "ARZ Construction Logo",
}: ArzLogoProps) {
  const sizeClass = height ? "" : sizeClasses[size] || sizeClasses.md;

  const filterClass =
    theme === "dark"
      ? "brightness-200 invert opacity-95"
      : "";

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoImg}
        alt={alt}
        className={`w-auto object-contain transition-all ${filterClass} ${sizeClass}`}
        style={height ? { height } : undefined}
      />
    </div>
  );
}




