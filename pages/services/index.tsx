import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import FinalCta from "@/components/sections/FinalCta";
import CapabilitiesGrid from "@/components/sections/CapabilitiesGrid";
import TechnologiesGrid from "@/components/sections/TechnologiesGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import ServiceCategoryGrid from "@/components/services/ServiceCategoryGrid";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";

export default function Services() {
  const [heroTitleDone, setHeroTitleDone] = useState(false);

  return (
    <Layout
      title="Services"
      description="Full-spectrum telecom & ICT services — from civil works to cybersecurity — for operators and enterprises."
    >
      <Hero
        photoLabel="PHOTO — engineers & ICT infrastructure, full-bleed"
        heightClassName="h-[300px] sm:h-[330px] lg:h-[360px]"
      >
        <div className="mb-4 h-[3px] w-[60px] bg-red" />
        <AnimatedTitle
          as="h1"
          text="Full-spectrum telecom & ICT services"
          className="mx-auto mb-2.5 font-heading text-[26px] font-semibold uppercase text-white sm:text-[32px] lg:text-[38px]"
          onAnimationComplete={() => setHeroTitleDone(true)}
        />
        <AnimatedParagraph
          active={heroTitleDone}
          className="mx-auto max-w-[640px] text-sm text-white/85 lg:text-[15.5px]"
        >
          From civil works to cybersecurity — everything an operator or enterprise needs to build, run, and protect
          their network.
        </AnimatedParagraph>
      </Hero>

      <CapabilitiesGrid />
      <TechnologiesGrid />
      <ProcessSteps />
      <ServiceCategoryGrid />

      <FinalCta
        title="Need a tailored ICT solution?"
        description="Let's talk about the right combination of services for your network."
      />
    </Layout>
  );
}
