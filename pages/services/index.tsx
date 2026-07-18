import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import FinalCta from "@/components/sections/FinalCta";
import CapabilitiesGrid from "@/components/sections/CapabilitiesGrid";
import TechnologiesGrid from "@/components/sections/TechnologiesGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";

export default function Services() {
  const [heroTitleDone, setHeroTitleDone] = useState(false);

  return (
    <Layout
      title="Services"
      description="Engineering Services, PMO & Project Delivery, and Technical Advisory — Shabakkat's integrated delivery model for critical digital infrastructure."
    >
      <Hero
        photoLabel="PHOTO — engineers & ICT infrastructure, full-bleed"
        heightClassName="h-[300px] sm:h-[330px] lg:h-[360px]"
      >
        <div className="mb-4 h-[3px] w-[60px] bg-red" />
        <AnimatedTitle
          as="h1"
          text="Engineering excellence through end-to-end delivery"
          className="mx-auto mb-2.5 font-heading text-[26px] font-semibold uppercase text-white sm:text-[32px] lg:text-[38px]"
          onAnimationComplete={() => setHeroTitleDone(true)}
        />
        <AnimatedParagraph
          active={heroTitleDone}
          className="mx-auto max-w-[640px] text-sm text-white/85 lg:text-[15.5px]"
        >
          Our engineering teams deliver comprehensive infrastructure solutions, combining technical expertise,
          disciplined execution, and operational excellence to build resilient, scalable, and future-ready digital
          infrastructure.
        </AnimatedParagraph>
      </Hero>

      <CapabilitiesGrid />
      <TechnologiesGrid />
      <ProcessSteps />

      <FinalCta
        title="Let's deliver what's next"
        description="Whether you're expanding telecommunications infrastructure, establishing enterprise project governance, modernizing digital infrastructure, or defining your next technology strategy, Shabakkat provides the engineering expertise, project leadership, and strategic advisory to deliver with confidence."
        ctaLabel="CONTACT OUR TEAM"
      />
    </Layout>
  );
}
