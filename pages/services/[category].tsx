import type { GetStaticPaths, GetStaticProps } from "next";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import FinalCta from "@/components/sections/FinalCta";
import CategorySwitcher from "@/components/services/CategorySwitcher";
import ServiceDetailBlock from "@/components/services/ServiceDetailBlock";
import SimpleItemGrid from "@/components/services/SimpleItemGrid";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";
import { serviceCategories, servicesDetail, professionalServices, equipmentSupply } from "@/data/servicesDetail";

interface ServiceCategoryPageProps {
  categoryId: string;
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: serviceCategories.map((category) => ({ params: { category: category.id } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<ServiceCategoryPageProps> = async ({ params }) => {
  return { props: { categoryId: params!.category as string } };
};

export default function ServiceCategoryPage({ categoryId }: ServiceCategoryPageProps) {
  const [heroTitleDone, setHeroTitleDone] = useState(false);
  const category = serviceCategories.find((c) => c.id === categoryId)!;
  const services = servicesDetail.filter((s) => s.category === categoryId);

  return (
    <Layout
      title={category.title}
      description={`${category.description} Part of Shabakkat's full-spectrum telecom & ICT services.`}
    >
      <Hero
        photoLabel={`PHOTO — ${category.title.toLowerCase()}, full-bleed`}
        heightClassName="h-[260px] sm:h-[290px] lg:h-[320px]"
      >
        <div className="mb-4 h-[3px] w-[60px] bg-red" />
        <AnimatedTitle
          as="h1"
          text={category.title}
          className="mx-auto mb-2.5 font-heading text-[26px] font-semibold uppercase text-white sm:text-[32px] lg:text-[38px]"
          onAnimationComplete={() => setHeroTitleDone(true)}
        />
        <AnimatedParagraph
          active={heroTitleDone}
          className="mx-auto max-w-[640px] text-sm text-white/85 lg:text-[15.5px]"
        >
          {category.description}
        </AnimatedParagraph>
      </Hero>

      <CategorySwitcher activeId={category.id} />

      <div className="flex flex-col divide-y divide-border">
        {services.map((service, i) => (
          <ServiceDetailBlock key={service.id} service={service} background={i % 2 === 1 ? "muted" : undefined} />
        ))}
      </div>

      {categoryId === "engineering-services" && (
        <div className="border-t border-border">
          <SimpleItemGrid
            id="equipment-supply"
            index="1.15"
            eyebrow="TELECOM PRODUCTS & INFRASTRUCTURE SOLUTIONS"
            title="Active, passive & power equipment, sourced & delivered"
            description="End-to-end procurement and logistics for the equipment operators need to build and maintain their networks — from tower & energy solutions to network equipment and telecom accessories."
            items={equipmentSupply}
            background={services.length % 2 === 1 ? "muted" : undefined}
          />
        </div>
      )}

      {categoryId === "technical-advisory" && (
        <div className="border-t border-border">
          <SimpleItemGrid
            id="professional-services-list"
            index="3.3"
            eyebrow="PROFESSIONAL SERVICES"
            title="Expert consulting for strategic decisions"
            description="Specialist consulting across network and IT architecture, audits, and business development — bringing outside expertise to the moments that matter most."
            items={professionalServices}
            background={services.length % 2 === 1 ? "muted" : undefined}
          />
        </div>
      )}

      <FinalCta
        title="Need a tailored ICT solution?"
        description="Let's talk about the right combination of services for your network."
      />
    </Layout>
  );
}
