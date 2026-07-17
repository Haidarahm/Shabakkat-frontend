import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import FinalCta from "@/components/sections/FinalCta";
import SectionHeading from "@/components/ui/SectionHeading";
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
      description="Shabakkat serves telecom operators, government, enterprise, data center, and energy & utility clients across the Middle East and Africa."
    >
      <Hero
        photoLabel="PHOTO — regional client sites, full-bleed"
        heightClassName="h-[300px] sm:h-[330px] lg:h-[360px]"
      >
        <div className="mb-4 h-[3px] w-[60px] bg-red" />
        <AnimatedTitle
          as="h1"
          text="Engineering solutions for diverse markets"
          className="mx-auto mb-2.5 font-heading text-[26px] font-semibold uppercase text-white sm:text-[32px] lg:text-[38px]"
          onAnimationComplete={() => setHeroTitleDone(true)}
        />
        <AnimatedParagraph
          active={heroTitleDone}
          className="mx-auto max-w-[640px] text-sm text-white/85 lg:text-[15.5px]"
        >
          Every market presents unique operational, regulatory, and business challenges. Understanding those
          challenges is essential to delivering infrastructure that creates lasting value.
        </AnimatedParagraph>
        <AnimatedParagraph
          active={heroTitleDone}
          delay={0.04}
          className="mx-auto mt-3 max-w-[640px] text-sm text-white/85 lg:text-[15.5px]"
        >
          Shabakkat partners with organizations across multiple sectors, combining engineering expertise, project
          leadership, and technical advisory to deliver solutions aligned with each client&apos;s objectives and
          long-term vision.
        </AnimatedParagraph>
      </Hero>

      <div className="section-px section-py">
        <StaggerGrid className="grid grid-cols-1 gap-6 lg:grid-cols-2" animateOnMount>
          {industries.map((industry) => (
            <StaggerItem key={industry.slug}>
              <IndustryCard industry={industry} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>

      <div className="section-px section-py bg-bg-muted">
        <SectionHeading
          eyebrow="OUR APPROACH"
          title="Understanding every market before engineering every solution"
          description={
            <>
              <span className="block">
                Successful infrastructure programs begin with understanding the environment in which they operate.
              </span>
              <span className="mt-3.5 block">
                Our approach combines technical expertise with a deep understanding of each market&apos;s operational
                priorities, regulatory landscape, investment objectives, and long-term strategy. This enables us to
                deliver solutions that are practical, sustainable, and aligned with our clients&apos; business goals.
              </span>
            </>
          }
        />
      </div>

      <FinalCta
        title="Every market has different challenges. Every solution begins with understanding them."
        description="Whether supporting telecommunications operators, government organizations, data center developers, enterprises, or utility providers, Shabakkat delivers the engineering expertise, project leadership, and technical advisory required to create lasting value."
        ctaLabel="CONTACT OUR TEAM"
      />
    </Layout>
  );
}
