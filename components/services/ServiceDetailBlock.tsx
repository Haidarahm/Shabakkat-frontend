import { useState } from "react";
import type { ServiceDetail } from "@/data/servicesDetail";
import Eyebrow from "@/components/ui/Eyebrow";
import Chip from "@/components/ui/Chip";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import { accentText } from "@/lib/colorMap";
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

      {service.businessValue && (
        <div className="mt-6">
          <div className="mb-2.5 font-heading text-xs uppercase tracking-[0.08em] text-text-muted">
            Business Value
          </div>
          <p className="text-[14.5px] leading-[1.7] text-text-body">{service.businessValue}</p>
        </div>
      )}

      {service.capabilities && (
        <div className="mt-5">
          <div className="mb-2.5 font-heading text-xs uppercase tracking-[0.08em] text-text-muted">
            Key Capabilities
          </div>
          <div className="flex flex-wrap gap-2.5">
            {service.capabilities.map((c) => (
              <Chip key={c}>{c}</Chip>
            ))}
          </div>
        </div>
      )}

      {service.notableList && (
        <div className="mt-5">
          <div className="mb-2.5 font-heading text-xs uppercase tracking-[0.08em] text-text-muted">
            Notable Benchmarks
          </div>
          <div className="flex flex-col gap-2.5">
            {service.notableList.map((item) => (
              <div
                key={item.text}
                className={`border-l-[3px] pl-3.5 text-sm ${item.color === "red" ? "border-red" : "border-cyan"}`}
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>
      )}

      {service.stats && (
        <div className="mt-5 grid grid-cols-2 gap-3.5">
          {service.stats.map((stat) => (
            <div key={stat.label} className="rounded-lg bg-white p-[18px]">
              <div className={`font-heading text-[22px] ${accentText[stat.color]}`}>{stat.value}</div>
              <div className="text-[12.5px] text-text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      )}

      {service.partners && (
        <div className="mt-5">
          <div className="mb-2.5 font-heading text-xs uppercase tracking-[0.08em] text-text-muted">
            Technology Partners
          </div>
          <div className="flex flex-wrap gap-2.5">
            {service.partners.map((p) => (
              <Chip key={p}>{p}</Chip>
            ))}
          </div>
        </div>
      )}

      {service.standard && (
        <div className="mt-5 max-w-xs rounded-xl border border-border bg-white p-6">
          <div className="font-heading text-xs uppercase tracking-[0.08em] text-text-muted">Standards Alignment</div>
          <div className="mt-2 font-heading text-xl text-red">{service.standard.code}</div>
          <div className="mt-1.5 text-[13.5px] text-text-body">{service.standard.label}</div>
        </div>
      )}

      {service.relatedProjects && (
        <div className="mt-5">
          <div className="mb-2.5 font-heading text-xs uppercase tracking-[0.08em] text-text-muted">
            Related Projects
          </div>
          <p className="text-sm text-text-muted">{service.relatedProjects}</p>
        </div>
      )}
    </div>
  );

  const photoColumn = (
    <PhotoPlaceholder label={service.photoLabel} className="h-[220px] rounded-xl sm:h-[300px] lg:h-[420px]" />
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
