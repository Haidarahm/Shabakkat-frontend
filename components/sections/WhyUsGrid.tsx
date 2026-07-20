import Eyebrow from "@/components/ui/Eyebrow";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import StaggerGrid from "@/components/ui/StaggerGrid";
import StaggerItem from "@/components/ui/StaggerItem";
import { whyUs } from "@/data/whyUs";
import { accentText } from "@/lib/colorMap";

export default function WhyUsGrid() {
  return (
    <div className="section-px section-py">
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
        <div className="lg:sticky lg:top-[100px]">
          <Eyebrow>WHY SHABAKKAT</Eyebrow>
          <AnimatedTitle
            text="Engineering confidence into every project"
            className="mt-4 font-heading text-[24px] font-semibold uppercase leading-[1.15] text-navy sm:text-[28px] lg:text-[34px]"
          />
          <p className="mt-5 text-[15.5px] leading-[1.7] text-text-body">
            Critical infrastructure requires more than technical capability. It requires a partner capable of aligning
            strategy, governance, and execution within a single delivery model.
          </p>
          <p className="mt-3.5 text-[15.5px] leading-[1.7] text-text-body">
            Shabakkat brings together engineering expertise, project leadership, and strategic advisory to help clients
            deliver complex infrastructure with confidence, efficiency, and long-term value.
          </p>
        </div>

        <StaggerGrid className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {whyUs.map((item) => (
            <StaggerItem key={item.number} className={item.fullWidth ? "sm:col-span-2" : undefined}>
              <div className="h-full border border-border bg-bg-muted p-5">
                <div className={`font-heading text-[12px] tracking-[0.05em] ${accentText[item.color]}`}>
                  {item.number}
                </div>
                <div className="mt-1.5 font-heading text-[15px] leading-[1.35] text-navy">{item.title}</div>
                <div className="mt-1.5 text-[13px] leading-[1.55] text-text-muted">{item.description}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </div>
  );
}
