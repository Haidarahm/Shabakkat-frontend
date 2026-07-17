import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import CompanyOverview from "@/components/sections/CompanyOverview";
import VisionMission from "@/components/sections/VisionMission";
import CoreValues from "@/components/sections/CoreValues";
import GlobalFootprint from "@/components/sections/GlobalFootprint";
import Timeline from "@/components/sections/Timeline";
import Certifications from "@/components/sections/Certifications";
import HseSection from "@/components/sections/HseSection";
import FinalCta from "@/components/sections/FinalCta";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";

export default function AboutUs() {
  const [heroTitleDone, setHeroTitleDone] = useState(false);

  return (
    <Layout
      title="About Us"
      description="Shabakkat is a regional Engineering & Advisory company delivering critical digital infrastructure across the Middle East and Africa since 2005."
    >
      <Hero
        photoLabel="PHOTO — corporate profile / leadership team, full-bleed"
        heightClassName="h-[300px] sm:h-[330px] lg:h-[360px]"
      >
        <div className="mb-4 h-[3px] w-[60px] bg-red" />
        <AnimatedTitle
          as="h1"
          text="Who we are"
          className="mx-auto mb-2.5 font-heading text-[26px] font-semibold uppercase text-white sm:text-[32px] lg:text-[38px]"
          onAnimationComplete={() => setHeroTitleDone(true)}
        />
        <AnimatedParagraph
          active={heroTitleDone}
          className="mx-auto max-w-[640px] text-sm text-white/85 lg:text-[15.5px]"
        >
          Established in 2005, Shabakkat is a regional Engineering &amp; Advisory company delivering critical digital
          infrastructure across the Middle East and Africa.
        </AnimatedParagraph>
      </Hero>

      <CompanyOverview />
      <VisionMission />
      <CoreValues />
      <GlobalFootprint />
      <Timeline />
      <Certifications />
      <HseSection />

      <FinalCta
        title="Let's build something reliable, together"
        description="Talk to our team about your infrastructure program, and see how Shabakkat's engineering, PMO, and advisory teams can support it."
      />
    </Layout>
  );
}
