import type { GetStaticPaths, GetStaticProps } from "next";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import FinalCta from "@/components/sections/FinalCta";
import ServicesPageSection, { SERVICES_CTA } from "@/components/services/ServicesPageSection";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";
import { serviceCategories } from "@/data/servicesDetail";

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

      <ServicesPageSection categoryId={categoryId} switcherMode="route" />

      <FinalCta
        title={SERVICES_CTA.title}
        description={SERVICES_CTA.description}
        ctaLabel={SERVICES_CTA.ctaLabel}
      />
    </Layout>
  );
}
