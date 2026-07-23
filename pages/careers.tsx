import { useState } from "react";
import type { GetStaticProps } from "next";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import Button from "@/components/ui/Button";
import OpeningCard from "@/components/careers/OpeningCard";
import FinalCta from "@/components/sections/FinalCta";
import { openings as staticOpenings, type Opening } from "@/data/openings";
import { fetchOpenings, fromBackend } from "@/lib/backend";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";

interface CareersProps {
  openings: Opening[];
}

export default function Careers({ openings }: CareersProps) {
  const [heroTitleDone, setHeroTitleDone] = useState(false);

  return (
    <Layout
      title="Careers"
      description="Join Shabakkat — engineering excellence, innovation, and meaningful impact across the Middle East and Africa."
    >
      <Hero
        photoLabel="PHOTO — Shabakkat team collaboration, full-bleed"
        heightClassName="h-[240px] sm:h-[270px] lg:h-[300px]"
        align="bottom"
      >
        <div className="mb-4 h-[3px] w-[60px] bg-red" />
        <AnimatedTitle
          as="h1"
          text="Build your future with Shabakkat"
          className="font-heading text-[26px] font-semibold uppercase text-white sm:text-[32px] lg:text-[38px]"
          onAnimationComplete={() => setHeroTitleDone(true)}
        />
        <AnimatedParagraph active={heroTitleDone} className="mt-2.5 text-sm text-white/85 lg:text-[15.5px]">
          We are always looking for passionate professionals committed to engineering excellence, innovation, and
          delivering meaningful impact across the region.
        </AnimatedParagraph>
      </Hero>

      <div className="section-px section-py grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <SectionHeading
            className="max-w-none"
            eyebrow="CAREERS"
            title="Build your future with Shabakkat"
            description="At Shabakkat, we believe our people are our greatest strength. We are always looking for passionate professionals who are committed to engineering excellence, innovation, and delivering meaningful impact across the region. Whether you're an experienced professional or an emerging talent, you'll find opportunities to work on challenging projects, collaborate with industry experts, and contribute to shaping the future of digital infrastructure."
          />

          <Button
            href="mailto:info@shabakkat.com?subject=CV%20Submission"
            variant="outline"
            className="mt-6 inline-block"
          >
            SUBMIT YOUR CV
          </Button>
        </div>

        <PhotoPlaceholder
          label="PHOTO — Shabakkat field engineering team"
          src="/images/projects/kuwait-rollout-crew.jpg"
          alt="Shabakkat engineering team on site"
          className="h-[240px] rounded-xl sm:h-[300px] lg:h-[380px]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      <div className="section-px section-py bg-bg-muted">
        <SectionHeading
          eyebrow="CURRENT OPPORTUNITIES"
          title="Join our team"
          description="Explore our latest career opportunities across engineering, project management, technical advisory, operations, and corporate functions."
        />
        <div className="mt-8 flex flex-col gap-4">
          {openings.map((opening) => (
            <OpeningCard key={`${opening.title}-${opening.location}`} opening={opening} />
          ))}
        </div>
      </div>

      <FinalCta
        title="Have a project in mind?"
        description="Talk to our team about engineering services, PMO & project delivery, or technical advisory for your next program."
        ctaLabel="CONTACT OUR TEAM"
        ctaHref="/contact"
      />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<CareersProps> = async () => ({
  props: { openings: await fromBackend(fetchOpenings, staticOpenings) },
  revalidate: 60,
});
