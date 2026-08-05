import type { ReactNode } from "react";

export default function HomeHero({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden bg-navy-dark">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[1]"
        
      />
      <div className="section-px relative z-10 flex min-h-[420px] items-center py-16 sm:min-h-[480px] sm:py-20 lg:min-h-[560px] lg:py-28">
        <div className="w-full max-w-[720px] text-center lg:text-left">{children}</div>
      </div>
    </div>
  );
}
