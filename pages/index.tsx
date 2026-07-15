import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
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
import FinalCta from "@/components/sections/FinalCta";
import { useState } from "react";
import Button from "@/components/ui/Button";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";

export default function About() {
  const [heroTitleDone, setHeroTitleDone] = useState(false);

  return (
    <Layout
      title="About"
      description="Shabakkat serves operators & enterprises with a full spectrum of ICT services across the Middle East and Africa since 2004."
    >
      <Hero
        photoLabel="PHOTO — mountaintop telecom towers over coastline, full-bleed"
        photoSrc="/images/hero/mountaintop-towers.jpg"
        heightClassName="h-[520px] min-h-[520px] sm:h-[600px] sm:min-h-[600px] lg:h-screen lg:min-h-[640px]"
      >
        <div className="mx-auto mb-5 h-[3px] w-[60px] bg-red" />
        <AnimatedTitle
          as="h1"
          text="Shabakkat serves operators & enterprises with a full spectrum of ICT services"
          className="mx-auto max-w-[960px] font-heading text-[28px] font-semibold uppercase leading-[1.2] text-white sm:text-[36px] lg:text-[50px] lg:leading-[1.16]"
          onAnimationComplete={() => setHeroTitleDone(true)}
        />
        <AnimatedParagraph
          active={heroTitleDone}
          className="mx-auto mt-4 max-w-[640px] text-sm text-white/85 sm:text-base lg:text-[17px]"
        >
          Your partner for network rollout, managed services, and turnkey telecom solutions across the Middle East
          and Africa since 2004.
        </AnimatedParagraph>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <Button href="/services">OUR SERVICES</Button>
          <Button href="/careers" variant="outline-light">
            CONTACT US
          </Button>
        </div>
      </Hero>

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
      <FinalCta
        title="Ready to build a smarter connected network?"
        description="Talk to our team about network rollout, managed services, or a tailored ICT solution for your business."
      />
    </Layout>
  );
}
