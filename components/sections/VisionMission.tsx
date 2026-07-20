import { useState } from "react";
import Eyebrow from "@/components/ui/Eyebrow";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";

export default function VisionMission() {
  const [visionTitleDone, setVisionTitleDone] = useState(false);
  const [missionTitleDone, setMissionTitleDone] = useState(false);

  return (
    <div className="section-px section-py grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
      <div className="rounded-xl border border-border-tint bg-bg-tint p-6 sm:p-8 lg:p-12">
        <Eyebrow>VISION</Eyebrow>
        <AnimatedTitle
          text="Shaping the future of critical digital infrastructure"
          className="mt-[18px] font-heading text-[22px] font-semibold uppercase text-navy sm:text-[26px] lg:text-[30px]"
          onAnimationComplete={() => setVisionTitleDone(true)}
        />
        <AnimatedParagraph
          active={visionTitleDone}
          className="mt-[18px] text-[15.5px] leading-[1.75] text-text-body-alt"
        >
          To be the region&apos;s most trusted Engineering &amp; Advisory partner, recognized for delivering resilient
          infrastructure, exceptional project leadership, and sustainable value across every stage of the
          infrastructure lifecycle.
        </AnimatedParagraph>
      </div>
      <div className="rounded-xl border border-border bg-bg-muted p-6 sm:p-8 lg:p-12">
        <Eyebrow>MISSION</Eyebrow>
        <AnimatedTitle
          text="Delivering infrastructure that moves nations forward"
          className="mt-[18px] font-heading text-[22px] font-semibold uppercase text-navy sm:text-[26px] lg:text-[30px]"
          onAnimationComplete={() => setMissionTitleDone(true)}
        />
        <AnimatedParagraph
          active={missionTitleDone}
          className="mt-[18px] text-[15.5px] leading-[1.75] text-text-body-alt"
        >
          To deliver integrated Engineering Services, PMO &amp; Project Delivery, and Technical Advisory that enable
          our clients to build, modernize, and operate critical digital infrastructure with confidence, precision,
          and long-term value.
        </AnimatedParagraph>
      </div>
    </div>
  );
}
