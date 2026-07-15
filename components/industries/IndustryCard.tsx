import Link from "next/link";
import Chip from "@/components/ui/Chip";
import type { Industry } from "@/data/industries";
import { accentText, accentBorder } from "@/lib/colorMap";

export default function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <div id={industry.slug} className={`scroll-mt-[132px] h-full rounded-xl border-t-[3px] border border-border bg-white p-7 lg:scroll-mt-[160px] ${accentBorder[industry.color]}`}>
      <div className={`font-heading text-lg ${accentText[industry.color]}`}>{industry.title}</div>
      <p className="mt-2.5 text-[13.5px] leading-[1.7] text-text-body">{industry.summary}</p>
      <div className="mt-3 text-[12.5px] text-text-muted">{industry.notableNames}</div>

      <div className="mt-4 flex flex-wrap gap-2">
        {industry.focusAreas.map((area) => (
          <Chip key={area} className="!py-1.5 text-[12px]">
            {area}
          </Chip>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
        {industry.relevantServices.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="font-heading text-[12.5px] tracking-[0.03em] text-cyan hover:text-navy"
          >
            {service.label} →
          </Link>
        ))}
      </div>

      {industry.relatedProjectHref && (
        <Link
          href={industry.relatedProjectHref}
          className="mt-4 inline-block font-heading text-[12.5px] tracking-[0.03em] text-navy underline underline-offset-2 hover:text-cyan"
        >
          See a related project →
        </Link>
      )}
    </div>
  );
}
