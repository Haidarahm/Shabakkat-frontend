import { useState } from "react";
import type { GetStaticProps } from "next";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import Eyebrow from "@/components/ui/Eyebrow";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import ContactForm from "@/components/contact/ContactForm";
import OfficeCard from "@/components/contact/OfficeCard";
import {
  headOffice as staticHeadOffice,
  regionalOffices as staticRegionalOffices,
  type OfficeLocation,
} from "@/data/offices";
import {
  fetchOffices,
  officesToHeadOffice,
  officesToRegional,
  type BackendOffice,
} from "@/lib/backend";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";

const CONTACT_HERO_IMAGES = [
  "/images/contact/contact-hero-1.jpg",
  "/images/contact/contact-hero-2.jpg",
  "/images/contact/contact-hero-3.jpg",
  "/images/contact/contact-hero-4.jpg",
  "/images/contact/contact-hero-5.jpg",
  "/images/contact/contact-hero-6.jpg",
];

interface ContactProps {
  headOffice: OfficeLocation;
  regionalOffices: OfficeLocation[];
}

export default function Contact({ headOffice, regionalOffices }: ContactProps) {
  const [heroTitleDone, setHeroTitleDone] = useState(false);

  return (
    <Layout
      title="Contact"
      description="Get in touch with Shabakkat — engineering excellence, project leadership, and strategic advisory for your infrastructure programs."
    >
      <Hero
        photoLabel="PHOTO — Shabakkat corporate office, full-bleed"
        photoSrcs={CONTACT_HERO_IMAGES}
        heightClassName="h-[300px] sm:h-[330px] lg:h-[360px]"
        align="bottom"
      >
        <div className="mb-4 h-[3px] w-[60px] bg-red" />
        <AnimatedTitle
          as="h1"
          text="Let's start the conversation"
          className="font-heading text-[26px] font-semibold uppercase text-white sm:text-[32px] lg:text-[38px]"
          onAnimationComplete={() => setHeroTitleDone(true)}
        />
        <AnimatedParagraph active={heroTitleDone} className="mt-2.5 text-sm text-white/85 lg:text-[15.5px]">
          Whether you&apos;re planning a new infrastructure program, seeking a trusted engineering partner, or exploring
          new opportunities, our team is ready to help.
        </AnimatedParagraph>
      </Hero>

      <div className="section-px section-py grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading eyebrow="GET IN TOUCH" title="Tell us about your project" />
          <ContactForm />
        </div>

        <div>
          <Eyebrow>HEADQUARTERS</Eyebrow>
          <div className="mt-3.5">
            <OfficeCard office={headOffice} />
          </div>
          <div className="mt-5 text-[13.5px] text-text-body">
            <div className="rounded-lg border border-border bg-bg-muted px-4 py-3">
              <div className="font-heading text-xs uppercase tracking-[0.06em] text-text-muted">Email</div>
              <div className="mt-1">info@shabakkat.com</div>
            </div>
          </div>
          <PhotoPlaceholder label="MAP — Kuwait head office" className="mt-5 h-[220px] rounded-xl" />
        </div>
      </div>

      <div className="section-px section-py bg-bg-muted">
        <SectionHeading eyebrow="REGIONAL PRESENCE" title="Regional reach. Local presence." />
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {regionalOffices.map((office) => (
            <OfficeCard key={office.name} office={office} />
          ))}
        </div>
      </div>

      <div className="section-px bg-bg-tint py-14 text-center sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[640px]">
          <AnimatedTitle
            text="Let's build something reliable, together"
            className="font-heading text-[22px] font-semibold uppercase text-navy sm:text-[26px] lg:text-[30px]"
          />
          <a
            href="mailto:info@shabakkat.com"
            className="mt-3.5 inline-block rounded-md bg-cyan px-8 py-[15px] font-heading text-sm tracking-[0.05em] text-white transition-colors hover:bg-red"
          >
            EMAIL INFO@SHABAKKAT.COM
          </a>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<ContactProps> = async () => {
  let offices: BackendOffice[] | null = null;
  try {
    offices = await fetchOffices();
  } catch {
    offices = null;
  }

  const headOffice =
    (offices ? officesToHeadOffice(offices) : null) ?? staticHeadOffice;
  const regionalOffices =
    offices && offices.length > 0 ? officesToRegional(offices) : staticRegionalOffices;

  return {
    props: { headOffice, regionalOffices },
    revalidate: 60,
  };
};
