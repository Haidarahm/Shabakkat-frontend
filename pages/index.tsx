import Layout from "@/components/layout/Layout";
import HomeHero from "@/components/sections/HomeHero";
import StatBar from "@/components/sections/StatBar";
import CompanyOverview from "@/components/sections/CompanyOverview";
import MissionDirection from "@/components/sections/MissionDirection";
import WhyUsGrid from "@/components/sections/WhyUsGrid";
import GlobalFootprint from "@/components/sections/GlobalFootprint";
import ServicesOverviewGrid from "@/components/sections/ServicesOverviewGrid";
import Timeline from "@/components/sections/Timeline";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import PartnersGrid from "@/components/sections/PartnersGrid";
import Certifications from "@/components/sections/Certifications";
import HseSection from "@/components/sections/HseSection";
import Testimonials from "@/components/sections/Testimonials";
import FaqTeaser from "@/components/sections/FaqTeaser";
import FinalCta from "@/components/sections/FinalCta";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";

export default function About() {
  const [heroTitleDone, setHeroTitleDone] = useState(false);

  return (
    <Layout
      title="About"
      description="Shabakkat serves operators & enterprises with a full spectrum of ICT services across the Middle East and Africa since 2004."
    >
      <HomeHero>
        <Eyebrow>TELECOM AND ICT INFRASTRUCTURE</Eyebrow>
        <AnimatedTitle
          as="h1"
          text="Building, operating, and optimizing critical networks across the Middle East and Africa"
          className="mt-4 max-w-[620px] font-heading text-[30px] font-semibold uppercase leading-[1.2] text-white sm:text-[38px] lg:text-[46px] lg:leading-[1.14]"
          onAnimationComplete={() => setHeroTitleDone(true)}
        />
        <AnimatedParagraph
          active={heroTitleDone}
          className="mt-4 max-w-[560px] text-sm text-white/80 sm:text-base lg:text-[16.5px]"
        >
          Your partner for network rollout, managed services, and turnkey telecom solutions across the Middle East
          and Africa since 2004.
        </AnimatedParagraph>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Button href="/careers">DISCUSS A PROJECT</Button>
          <Button href="/services" variant="outline-light">
            EXPLORE OUR SERVICES
          </Button>
        </div>
      </HomeHero>

      <StatBar />
      <CompanyOverview />
      <MissionDirection />
      <WhyUsGrid />
      <GlobalFootprint />
      <Timeline />
      <ServicesOverviewGrid />
      <FeaturedProjects />
      <PartnersGrid />
      <Certifications />
      <HseSection />
      <Testimonials />
      <FaqTeaser />
      <FinalCta
        title="Ready to build a smarter connected network?"
        description="Talk to our team about network rollout, managed services, or a tailored ICT solution for your business."
      />
    </Layout>
  );
}
