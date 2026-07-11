import { useState } from "react";
import Eyebrow from "@/components/ui/Eyebrow";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";

const workforce = [
  { label: "Engineers", value: 85, color: "bg-red" },
  { label: "Management", value: 5, color: "bg-cyan" },
  { label: "Business Dev.", value: 5, color: "bg-navy" },
  { label: "Marketing & Sales", value: 5, color: "bg-text-muted" },
];

export default function CompanyOverview() {
  const [titleDone, setTitleDone] = useState(false);

  return (
    <div className="section-px section-py grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div>
        <Eyebrow>WHO WE ARE</Eyebrow>
        <AnimatedTitle
          text="A comprehensive telecommunications solution provider"
          className="mt-4 font-heading text-[24px] font-semibold uppercase leading-[1.15] text-navy sm:text-[28px] lg:text-[34px]"
          onAnimationComplete={() => setTitleDone(true)}
        />
        <AnimatedParagraph active={titleDone} className="mt-5 text-base leading-[1.75] text-text-body">
          Established in 2005, Shabakkat has serviced Telecom Operators, Vendors, Enterprises, and Governmental
          Sectors across 13 countries in the Middle East and Africa. With headquarters in Kuwait City and regional
          offices in Saudi Arabia, Iraq, and Morocco, our team of 800+ professionals has executed hundreds of
          projects for the region&apos;s most prominent Communications Service Providers.
        </AnimatedParagraph>
        <AnimatedParagraph
          active={titleDone}
          delay={0.06}
          className="mt-4 text-base leading-[1.75] text-text-body"
        >
          We continually strive to understand our clients&apos; needs, address their concerns, and empower their
          businesses with premium, tailored services — capitalizing on our knowledge base across Managed Services,
          Consultation and Resourcing, Professional Services, Full Turnkey Site Build, and more.
        </AnimatedParagraph>
        <div className="mt-7 flex gap-3.5">
          <div className="border-l-[3px] border-red bg-bg-muted px-[18px] py-3.5 font-heading text-[13px]">
            HQ: Kuwait City
          </div>
          <div className="border-l-[3px] border-cyan bg-bg-muted px-[18px] py-3.5 font-heading text-[13px]">
            4 Regional Offices
          </div>
        </div>
        <div className="mt-7">
          <div className="mb-3 font-heading text-xs uppercase tracking-[0.08em] text-text-muted">
            Our 800+ Workforce
          </div>
          <div className="flex h-3.5 overflow-hidden rounded-[3px]">
            {workforce.map((w) => (
              <div key={w.label} className={w.color} style={{ width: `${w.value}%` }} />
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-[18px] text-[12.5px] text-text-body">
            {workforce.map((w) => (
              <div key={w.label}>
                <span className="font-heading text-navy">{w.value}%</span> {w.label}
              </div>
            ))}
          </div>
        </div>
      </div>
      <PhotoPlaceholder
        label="PHOTO — corporate HQ / office team collaboration"
        className="h-[260px] rounded sm:h-[340px] lg:h-[440px]"
      />
    </div>
  );
}
