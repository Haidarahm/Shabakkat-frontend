import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import FinalCta from "@/components/sections/FinalCta";
import JumpNav from "@/components/services/JumpNav";
import ServiceCategorySection from "@/components/services/ServiceCategorySection";
import SimpleItemGrid from "@/components/services/SimpleItemGrid";
import CapabilitiesGrid from "@/components/sections/CapabilitiesGrid";
import TechnologiesGrid from "@/components/sections/TechnologiesGrid";
import ProcessSteps from "@/components/sections/ProcessSteps";
import { serviceCategories, servicesDetail, professionalServices, equipmentSupply } from "@/data/servicesDetail";
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

      <CapabilitiesGrid />
      <TechnologiesGrid />
      <ProcessSteps />

      <JumpNav />

      {serviceCategories.map((category, i) => {
        const services = servicesDetail.filter((s) => s.category === category.id);
        const background = i % 2 === 0 ? undefined : "muted";

        if (category.id === "network-deployment") {
          return (
            <ServiceCategorySection key={category.id} category={category} services={services} background={background}>
              <div className="mt-10 border-t border-border pt-10">
                <SimpleItemGrid
                  id="equipment-supply"
                  index="1.3"
                  eyebrow="TELECOM EQUIPMENT SUPPLY"
                  title="Active, passive & power equipment, sourced & delivered"
                  description="End-to-end procurement and logistics for the equipment operators need to build and maintain their networks — from active radio equipment to spare parts and consumables."
                  items={equipmentSupply}
                  bare
                />
              </div>
            </ServiceCategorySection>
          );
        }

        if (category.id === "professional-services") {
          return (
            <ServiceCategorySection key={category.id} category={category} services={services} background={background}>
              <div className="mt-10 border-t border-border pt-10">
                <SimpleItemGrid
                  id="professional-services-list"
                  index="6.3"
                  eyebrow="PROFESSIONAL SERVICES"
                  title="Expert consulting for strategic decisions"
                  description="Specialist consulting across network and IT architecture, audits, and business development — bringing outside expertise to the moments that matter most."
                  items={professionalServices}
                  bare
                />
              </div>
            </ServiceCategorySection>
          );
        }

        return (
          <ServiceCategorySection key={category.id} category={category} services={services} background={background} />
        );
      })}

      <FinalCta
        title="Need a tailored ICT solution?"
        description="Let's talk about the right combination of services for your network."
      />
    </Layout>
  );
}
