import { useState } from "react";
import Eyebrow from "@/components/ui/Eyebrow";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";

export default function CompanyOverview() {
  const [titleDone, setTitleDone] = useState(false);

  return (
    <div className="section-px section-py grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div>
        <Eyebrow>WHO WE ARE</Eyebrow>
        <AnimatedTitle
          text="Engineering infrastructure that enables progress"
          className="mt-4 font-heading text-[24px] font-semibold uppercase leading-[1.15] text-navy sm:text-[28px] lg:text-[34px]"
          onAnimationComplete={() => setTitleDone(true)}
        />
        <AnimatedParagraph
          active={titleDone}
          className="mt-5 border-l-[3px] border-cyan pl-4 text-[15.5px] font-medium leading-[1.7] text-navy"
        >
          Digital infrastructure has become the foundation of economic growth, business resilience, and national
          development. Delivering it successfully demands engineering excellence, disciplined execution, and
          strategic leadership.
        </AnimatedParagraph>
        <AnimatedParagraph active={titleDone} delay={0.04} className="mt-5 text-base leading-[1.75] text-text-body">
          Established in 2005, Shabakkat has spent more than 21 years delivering complex infrastructure programs
          across the Middle East and Africa. Today, we operate across 15 countries with a multidisciplinary team of
          900+ professionals, supporting operators, enterprises, and government organizations through every stage of
          the infrastructure lifecycle.
        </AnimatedParagraph>
        <AnimatedParagraph
          active={titleDone}
          delay={0.06}
          className="mt-4 text-base leading-[1.75] text-text-body"
        >
          By integrating Engineering Services, PMO &amp; Project Delivery, and Technical Advisory within a single
          organization, we provide our clients with one strategic partner capable of transforming vision into
          successful execution.
        </AnimatedParagraph>
        <div className="mt-7 flex flex-wrap gap-3.5">
          <div className="border-l-[3px] border-red bg-bg-muted px-[18px] py-3.5 font-heading text-[13px]">
            21+ Years
          </div>
          <div className="border-l-[3px] border-cyan bg-bg-muted px-[18px] py-3.5 font-heading text-[13px]">
            15 Countries
          </div>
          <div className="border-l-[3px] border-navy bg-bg-muted px-[18px] py-3.5 font-heading text-[13px]">
            900+ Workforce
          </div>
        </div>
      </div>
      <PhotoPlaceholder
        label="PHOTO — corporate HQ / office team collaboration"
        src="/images/company/office-team.jpg"
        className="h-[260px] rounded-xl sm:h-[340px] lg:h-[440px]"
      />
    </div>
  );
}
