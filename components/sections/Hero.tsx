import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";

interface HeroProps {
  photoLabel: string;
  photoSrc?: string;
  /** When provided, cycles these images as a looping background (overrides photoSrc). */
  photoSrcs?: string[];
  /** Milliseconds between slides. Default 4500. */
  loopIntervalMs?: number;
  heightClassName: string;
  align?: "center" | "bottom";
  children: ReactNode;
}

export default function Hero({
  photoLabel,
  photoSrc,
  photoSrcs,
  loopIntervalMs = 4500,
  heightClassName,
  align = "center",
  children,
}: HeroProps) {
  const slides = photoSrcs?.filter(Boolean) ?? [];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, loopIntervalMs);
    return () => window.clearInterval(id);
  }, [slides.length, loopIntervalMs]);

  return (
    <div className={`relative overflow-hidden ${heightClassName}`}>
      {slides.length > 0 ? (
        <div className="absolute inset-0">
          <AnimatePresence initial={false} mode="sync">
            <motion.div
              key={slides[index]}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
            >
              <Image
                src={slides[index]}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        <PhotoPlaceholder label={photoLabel} src={photoSrc} className="absolute inset-0" />
      )}

      <div
        className="absolute inset-0 z-[1]"
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
