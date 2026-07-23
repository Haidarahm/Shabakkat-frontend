import { useState } from "react";
import type { GetStaticProps } from "next";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import FinalCta from "@/components/sections/FinalCta";
import ProcessSteps from "@/components/sections/ProcessSteps";
import ServicesPageSection, { SERVICES_CTA } from "@/components/services/ServicesPageSection";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";
import {
  serviceCategories as staticCategories,
  servicesDetail as staticServices,
  type ServiceCategory,
  type ServiceDetail,
} from "@/data/servicesDetail";
import { fetchServiceCategories, fetchServices, fromBackend } from "@/lib/backend";

interface ServicesProps {
  categories: ServiceCategory[];
  services: ServiceDetail[];
}

export default function Services({ categories, services }: ServicesProps) {
  const [heroTitleDone, setHeroTitleDone] = useState(false);

  return (
    <Layout
      title="Services"
      description="Engineering Services, PMO & Project Delivery, Technical Advisory, and Telecom Products — Shabakkat's integrated delivery model for critical digital infrastructure."
    >
      <Hero
        photoLabel="PHOTO — engineers & ICT infrastructure, full-bleed"
        heightClassName="h-[300px] sm:h-[330px] lg:h-[360px]"
      >
        <div className="mb-4 h-[3px] w-[60px] bg-red" />
        <AnimatedTitle
          as="h1"
          text="Engineering excellence through end-to-end delivery"
          className="mx-auto mb-2.5 font-heading text-[26px] font-semibold uppercase text-white sm:text-[32px] lg:text-[38px]"
          onAnimationComplete={() => setHeroTitleDone(true)}
        />
        <AnimatedParagraph
          active={heroTitleDone}
          className="mx-auto max-w-[640px] text-sm text-white/85 lg:text-[15.5px]"
        >
          Our engineering teams deliver comprehensive infrastructure solutions, combining technical expertise,
          disciplined execution, and operational excellence to build resilient, scalable, and future-ready digital
          infrastructure.
        </AnimatedParagraph>
      </Hero>

      <ServicesPageSection switcherMode="hash" categories={categories} services={services} />
      <ProcessSteps />

      <FinalCta
        title={SERVICES_CTA.title}
        description={SERVICES_CTA.description}
        ctaLabel={SERVICES_CTA.ctaLabel}
      />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<ServicesProps> = async () => {
  const [categories, services] = await Promise.all([
    fromBackend(fetchServiceCategories, staticCategories),
    fromBackend(fetchServices, staticServices),
  ]);

  return {
    props: { categories, services },
    revalidate: 60,
  };
};
