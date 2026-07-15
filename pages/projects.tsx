import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import FinalCta from "@/components/sections/FinalCta";
import StaggerGrid from "@/components/ui/StaggerGrid";
import StaggerItem from "@/components/ui/StaggerItem";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";

export default function Projects() {
  const [heroTitleDone, setHeroTitleDone] = useState(false);

  return (
    <Layout
      title="Projects"
      description="Case studies from Shabakkat's mega projects across the Middle East and Africa — rollout, managed services, turnkey builds, and more."
    >
      <Hero
        photoLabel="PHOTO — engineers reviewing a rollout site, full-bleed"
        heightClassName="h-[300px] sm:h-[330px] lg:h-[360px]"
      >
        <div className="mb-4 h-[3px] w-[60px] bg-red" />
        <AnimatedTitle
          as="h1"
          text="Proof at scale, across the region"
          className="mx-auto mb-2.5 font-heading text-[26px] font-semibold uppercase text-white sm:text-[32px] lg:text-[38px]"
          onAnimationComplete={() => setHeroTitleDone(true)}
        />
        <AnimatedParagraph
          active={heroTitleDone}
          className="mx-auto max-w-[640px] text-sm text-white/85 lg:text-[15.5px]"
        >
          Mega projects delivered for operators, vendors, and government clients across the Middle East and Africa
          since 2004.
        </AnimatedParagraph>
      </Hero>

      <div className="section-px section-py">
        <StaggerGrid className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>

      <FinalCta
        title="Have a project in mind?"
        description="Talk to our team about network rollout, managed services, or a tailored ICT solution for your business."
      />
    </Layout>
  );
}
