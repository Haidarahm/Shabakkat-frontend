import Layout from "@/components/layout/Layout";
import HomeHero from "@/components/sections/HomeHero";
import StatBar from "@/components/sections/StatBar";
import IntegratedDeliveryModel from "@/components/sections/IntegratedDeliveryModel";
import ServicesOverviewGrid from "@/components/sections/ServicesOverviewGrid";
import WhyUsGrid from "@/components/sections/WhyUsGrid";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import PartnersGrid from "@/components/sections/PartnersGrid";
import Testimonials from "@/components/sections/Testimonials";
import FaqTeaser from "@/components/sections/FaqTeaser";
import FinalCta from "@/components/sections/FinalCta";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";

export default function Home() {
  const [heroTitleDone, setHeroTitleDone] = useState(false);

  return (
    <Layout
      title="Home"
      description="Shabakkat is a regional Engineering & Advisory company delivering critical digital infrastructure across the Middle East and Africa since 2005."
    >
      <HomeHero>
        <Eyebrow>ENGINEERING &amp; ADVISORY</Eyebrow>
        <AnimatedTitle
          as="h1"
          text="Engineering the digital backbone of nations"
          className="mt-4 max-w-[620px] font-heading text-[30px] font-semibold uppercase leading-[1.2] text-white sm:text-[38px] lg:text-[46px] lg:leading-[1.14]"
          onAnimationComplete={() => setHeroTitleDone(true)}
        />
        <AnimatedParagraph
          active={heroTitleDone}
          className="mt-4 max-w-[560px] text-sm text-white/80 sm:text-base lg:text-[16.5px]"
        >
          Through Engineering Services, PMO &amp; Project Delivery, and Technical Advisory, we enable operators,
          enterprises, and governments to deliver resilient infrastructure, accelerate digital transformation, and
          build sustainable networks for the future.
        </AnimatedParagraph>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Button href="/services">EXPLORE OUR SERVICES</Button>
          <Button href="/careers" variant="outline-light">
            CONTACT US
          </Button>
        </div>
      </HomeHero>

      <StatBar />
      <IntegratedDeliveryModel />
      <ServicesOverviewGrid />
      <WhyUsGrid />
      <FeaturedProjects />
      <PartnersGrid />
      <Testimonials />
      <FaqTeaser />
      <FinalCta
        title="Let's build what's next"
        description="Whether you're expanding national infrastructure, delivering complex transformation programs, or shaping the next generation of digital connectivity, Shabakkat brings together the engineering expertise, project leadership, and strategic advisory needed to deliver with confidence."
      />
    </Layout>
  );
}
