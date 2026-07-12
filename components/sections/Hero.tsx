import type { ReactNode } from "react";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";

interface HeroProps {
  photoLabel: string;
  photoSrc?: string;
  heightClassName: string;
  align?: "center" | "bottom";
  children: ReactNode;
}

export default function Hero({ photoLabel, photoSrc, heightClassName, align = "center", children }: HeroProps) {
  return (
    <div className={`relative overflow-hidden ${heightClassName}`}>
      <PhotoPlaceholder label={photoLabel} src={photoSrc} className="absolute inset-0" />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(11,61,102,0.42) 0%, rgba(11,61,102,0.84) 100%)",
        }}
      />
      <div
        className={`section-px absolute inset-0 z-10 flex flex-col text-center ${
          align === "center" ? "items-center justify-center" : "items-start justify-end pb-9 text-left"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
