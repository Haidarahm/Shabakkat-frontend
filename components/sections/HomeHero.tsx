import type { ReactNode } from "react";
import NetworkGraphic from "@/components/ui/NetworkGraphic";

export default function HomeHero({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden bg-navy-dark">
      <div className="section-px relative z-10 grid grid-cols-1 items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:py-28">
        <div className="text-center lg:text-left">{children}</div>
        <NetworkGraphic className="hidden h-auto w-full max-w-[440px] justify-self-end lg:block" />
      </div>
    </div>
  );
}
