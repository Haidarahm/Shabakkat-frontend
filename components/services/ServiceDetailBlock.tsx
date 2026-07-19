import { useState } from "react";
import type { ServiceDetail } from "@/data/servicesDetail";
import Eyebrow from "@/components/ui/Eyebrow";
import Chip from "@/components/ui/Chip";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";

interface ServiceDetailBlockProps {
  service: ServiceDetail;
  background?: "muted";
}

export default function ServiceDetailBlock({ service, background }: ServiceDetailBlockProps) {
  const [titleDone, setTitleDone] = useState(false);

  const textColumn = (
    <div>
      <Eyebrow>{`${service.index} — ${service.eyebrow}`}</Eyebrow>
      <AnimatedTitle
        text={service.title}
        className="mt-3.5 font-heading text-[24px] font-semibold uppercase leading-[1.15] text-navy sm:text-[28px] lg:text-[34px]"
        onAnimationComplete={() => setTitleDone(true)}
      />
      <AnimatedParagraph active={titleDone} className="mt-[18px] text-[15.5px] leading-[1.75] text-text-body">
        {service.description}
      </AnimatedParagraph>

      {service.capabilities && (
        <div className="mt-5">
          <div className="mb-2.5 font-heading text-xs uppercase tracking-[0.08em] text-text-muted">
            Capabilities
          </div>
          <div className="flex flex-wrap gap-2.5">
            {service.capabilities.map((c) => (
              <Chip key={c}>{c}</Chip>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const photoColumn = (
    <PhotoPlaceholder
      label={service.photoLabel}
      src={service.photoSrc}
      className="h-[220px] rounded-xl sm:h-[300px] lg:h-[420px]"
      sizes="(max-width: 1024px) 100vw, 50vw"
    />
  );

  return (
    <div
      id={service.id}
      className={`section-px grid scroll-mt-[168px] grid-cols-1 items-start gap-8 py-10 sm:py-12 lg:scroll-mt-[200px] lg:grid-cols-2 lg:gap-14 lg:py-[72px] ${
        background === "muted" ? "bg-bg-muted" : ""
      }`}
    >
      {service.imageSide === "left" ? (
        <>
          {photoColumn}
          {textColumn}
        </>
      ) : (
        <>
          {textColumn}
          {photoColumn}
        </>
      )}
    </div>
  );
}
