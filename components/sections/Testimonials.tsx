import { FaTrophy } from "react-icons/fa";
import { testimonials, awards } from "@/data/testimonials";
import { accentText } from "@/lib/colorMap";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import StaggerGrid from "@/components/ui/StaggerGrid";
import StaggerItem from "@/components/ui/StaggerItem";

export default function Testimonials() {
  return (
    <div className="section-px section-py bg-bg-muted">
      <div className="flex items-center gap-2.5 font-heading text-[13px] tracking-[0.14em] text-cyan">
        <div className="h-[3px] w-[26px] bg-red" />
        WHAT OUR CLIENTS SAY
      </div>
      <AnimatedTitle
        text="Client testimonials"
        className="mb-9 mt-4 font-heading text-[24px] font-semibold uppercase text-navy sm:text-[28px] lg:text-[34px]"
      />
      <StaggerGrid className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {testimonials.map((t) => (
          <StaggerItem key={t.author}>
            <div className="h-full rounded-xl border border-border bg-white p-7">
              <div className="text-[14.5px] leading-[1.7] text-text-body-alt">&ldquo;{t.quote}&rdquo;</div>
              <div className={`mt-[18px] font-heading text-[13.5px] ${accentText[t.color]}`}>
                — {t.author}, {t.role}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGrid>
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {awards.map((award) => (
          <div
            key={`${award.year ?? "na"}-${award.label}`}
            className="flex items-start gap-2.5 rounded-full border border-border bg-white px-4 py-2.5"
          >
            <FaTrophy className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan" aria-hidden />
            <span className="font-body text-[12.5px] leading-[1.4] text-text-body-alt">
              {award.year ? `${award.label} — ${award.year}` : award.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
