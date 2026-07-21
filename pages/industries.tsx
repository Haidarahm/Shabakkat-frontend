import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import FinalCta from "@/components/sections/FinalCta";
import SectionHeading from "@/components/ui/SectionHeading";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import StaggerGrid from "@/components/ui/StaggerGrid";
import StaggerItem from "@/components/ui/StaggerItem";
import IndustryCard from "@/components/industries/IndustryCard";
import { industries } from "@/data/industries";
import AnimatedTitle from "@/components/ui/AnimatedTitle";

export default function Industries() {
  return (
    <Layout
      title="Industries"
      description="Shabakkat serves telecom operators, government, enterprise, data center, and energy & utility clients across the Middle East and Africa."
    >
      <Hero
        photoLabel="PHOTO — regional client sites, full-bleed"
        heightClassName="h-[240px] sm:h-[280px] lg:h-[300px]"
      >
        <div className="mb-4 h-[3px] w-[60px] bg-red" />
        <AnimatedTitle
          as="h1"
          text="Industries"
          className="mx-auto font-heading text-[26px] font-semibold uppercase text-white sm:text-[32px] lg:text-[38px]"
        />
      </Hero>

      <div className="section-px section-py">
        <StaggerGrid className="grid grid-cols-1 gap-6 lg:grid-cols-2" animateOnMount>
          {industries.map((industry, index) => (
            <StaggerItem key={industry.slug}>
              <IndustryCard industry={industry} index={index + 1} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>

      <div className="section-px section-py grid grid-cols-1 items-center gap-10 bg-bg-muted lg:grid-cols-2 lg:gap-14">
        <SectionHeading
          className="max-w-none"
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
        <PhotoPlaceholder
          label="PHOTO — engineering team assessing market conditions on site"
          src="/images/projects/engineering-team-onsite.jpg"
          alt="Shabakkat engineering team on site"
          className="h-[240px] rounded-xl sm:h-[300px] lg:h-[380px]"
          sizes="(max-width: 1024px) 100vw, 50vw"
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
