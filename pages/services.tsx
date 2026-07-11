import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import FinalCta from "@/components/sections/FinalCta";
import JumpNav from "@/components/services/JumpNav";
import ServiceDetailBlock from "@/components/services/ServiceDetailBlock";
import SimpleItemGrid from "@/components/services/SimpleItemGrid";
import { servicesDetail, professionalServices, equipmentSupply } from "@/data/servicesDetail";
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

      <JumpNav />

      {servicesDetail.map((service) => (
        <ServiceDetailBlock key={service.id} service={service} />
      ))}

      <SimpleItemGrid
        id="professional-services"
        index="12"
        eyebrow="PROFESSIONAL SERVICES"
        title="Expert consulting for strategic decisions"
        description="Specialist consulting across network and IT architecture, audits, and business development — bringing outside expertise to the moments that matter most."
        items={professionalServices}
        background="muted"
      />

      <SimpleItemGrid
        id="equipment-supply"
        index="13"
        eyebrow="TELECOM EQUIPMENT SUPPLY"
        title="Active, passive & power equipment, sourced & delivered"
        description="End-to-end procurement and logistics for the equipment operators need to build and maintain their networks — from active radio equipment to spare parts and consumables."
        items={equipmentSupply}
      />

      <FinalCta
        title="Need a tailored ICT solution?"
        description="Let's talk about the right combination of services for your network."
      />
    </Layout>
  );
}
