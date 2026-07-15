import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import FinalCta from "@/components/sections/FinalCta";
import StaggerGrid from "@/components/ui/StaggerGrid";
import StaggerItem from "@/components/ui/StaggerItem";
import IndustryCard from "@/components/industries/IndustryCard";
import { industries } from "@/data/industries";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";

export default function Industries() {
  const [heroTitleDone, setHeroTitleDone] = useState(false);

  return (
    <Layout
      title="Industries"
      description="Shabakkat serves telecom operators, network vendors, enterprises, and government institutions across the Middle East and Africa."
    >
      <Hero
        photoLabel="PHOTO — regional client sites, full-bleed"
        heightClassName="h-[300px] sm:h-[330px] lg:h-[360px]"
      >
        <div className="mb-4 h-[3px] w-[60px] bg-red" />
        <AnimatedTitle
          as="h1"
          text="Who we serve"
          className="mx-auto mb-2.5 font-heading text-[26px] font-semibold uppercase text-white sm:text-[32px] lg:text-[38px]"
          onAnimationComplete={() => setHeroTitleDone(true)}
        />
        <AnimatedParagraph
          active={heroTitleDone}
          className="mx-auto max-w-[640px] text-sm text-white/85 lg:text-[15.5px]"
        >
          From mobile operators to government institutions — tailored delivery for every kind of client we serve.
        </AnimatedParagraph>
      </Hero>

      <div className="section-px section-py">
        <StaggerGrid className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {industries.map((industry) => (
            <StaggerItem key={industry.slug}>
              <IndustryCard industry={industry} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>

      <FinalCta
        title="Don't see your industry listed?"
        description="Talk to our team about how Shabakkat can support your organization's network and ICT needs."
      />
    </Layout>
  );
}
