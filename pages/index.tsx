import { useState } from "react";
import type { GetStaticProps } from "next";
import { motion, type Variants } from "framer-motion";
import Layout from "@/components/layout/Layout";
import HomeHero from "@/components/sections/HomeHero";
import CompanyOverview from "@/components/sections/CompanyOverview";
import IntegratedDeliveryModel from "@/components/sections/IntegratedDeliveryModel";
import WhyUsGrid from "@/components/sections/WhyUsGrid";
import ChairmanMessage from "@/components/sections/ChairmanMessage";
import VisionMission from "@/components/sections/VisionMission";
import CoreValues from "@/components/sections/CoreValues";
import GlobalFootprint from "@/components/sections/GlobalFootprint";
import Certifications from "@/components/sections/Certifications";
import PartnersGrid from "@/components/sections/PartnersGrid";
import FinalCta from "@/components/sections/FinalCta";
import Button from "@/components/ui/Button";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";
import { partners as staticPartners, type Partner } from "@/data/partners";
import { certifications as staticCertifications, type Certification } from "@/data/certifications";
import { footprintLocations as staticFootprint, type FootprintLocation } from "@/data/offices";
import { stats as staticStats, type Stat } from "@/data/stats";
import {
  fetchPartners,
  fetchCertifications,
  fetchOffices,
  fetchStats,
  officesToFootprint,
  fromBackend,
} from "@/lib/backend";

const heroButtonRow: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.12 } },
};

const heroButtonItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

interface HomeProps {
  partners: Partner[];
  certifications: Certification[];
  locations: FootprintLocation[];
  stats: Stat[];
}

export default function Home({ partners, certifications, locations, stats }: HomeProps) {
  const [heroTitleDone, setHeroTitleDone] = useState(false);

  return (
    <Layout
      title="Home"
      description="Shabakkat is a regional Engineering & Advisory company delivering critical digital infrastructure across the Middle East and Africa since 2005."
    >
      <HomeHero>
        <AnimatedTitle
          as="h1"
          text="Engineering the digital backbone of nations"
          className="max-w-[620px] font-heading text-[30px] font-semibold uppercase leading-[1.2] text-white sm:text-[38px] lg:text-[46px] lg:leading-[1.14]"
          onAnimationComplete={() => setHeroTitleDone(true)}
        />
        <AnimatedParagraph
          active={heroTitleDone}
          className="mt-4 max-w-[560px] text-sm text-white/80 sm:text-base lg:text-[16.5px]"
        >
          Shabakkat is a regional Engineering &amp; Advisory company delivering critical digital infrastructure across
          the Middle East and Africa.
        </AnimatedParagraph>
        <AnimatedParagraph
          active={heroTitleDone}
          delay={0.04}
          className="mt-3 max-w-[560px] text-sm text-white/80 sm:text-base lg:text-[16.5px]"
        >
          Through Engineering Services, PMO &amp; Project Delivery, and Technical Advisory, we enable operators,
          enterprises, and governments to deliver resilient infrastructure, accelerate digital transformation, and
          build sustainable networks for the future.
        </AnimatedParagraph>
        <motion.div
          className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4"
          variants={heroButtonRow}
          initial="hidden"
          animate={heroTitleDone ? "visible" : "hidden"}
        >
          <motion.div variants={heroButtonItem}>
            <Button href="/services">EXPLORE OUR SERVICES</Button>
          </motion.div>
          <motion.div variants={heroButtonItem}>
            <Button href="/contact" variant="outline-light">
              CONTACT US
            </Button>
          </motion.div>
        </motion.div>
      </HomeHero>

      <CompanyOverview stats={stats} />
      <IntegratedDeliveryModel />
      <WhyUsGrid />
      <ChairmanMessage />
      <VisionMission />
      <CoreValues />
      <GlobalFootprint locations={locations} />
      <Certifications certifications={certifications} />
      <PartnersGrid partners={partners} />
      <FinalCta
        title="Let's build what's next"
        description="Whether you're expanding national infrastructure, delivering complex transformation programs, or shaping the next generation of digital connectivity, Shabakkat brings together the engineering expertise, project leadership, and strategic advisory needed to deliver with confidence."
        ctaLabel="EXPLORE OUR SERVICES"
        ctaHref="/services"
        secondaryCtaLabel="CONTACT US"
        secondaryCtaHref="/contact"
      />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const [partners, certifications, locations, stats] = await Promise.all([
    fromBackend(fetchPartners, staticPartners),
    fromBackend(fetchCertifications, staticCertifications),
    fromBackend(async () => officesToFootprint(await fetchOffices()), staticFootprint),
    fromBackend(fetchStats, staticStats),
  ]);

  return {
    props: { partners, certifications, locations, stats },
    revalidate: 60,
  };
};
