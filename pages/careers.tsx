import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import Eyebrow from "@/components/ui/Eyebrow";
import Chip from "@/components/ui/Chip";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/contact/ContactForm";
import OfficeCard from "@/components/contact/OfficeCard";
import OpeningCard from "@/components/careers/OpeningCard";
import { headOffice, regionalOffices } from "@/data/offices";
import { openings } from "@/data/openings";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";

const cultureHighlights = [
  "900+ professionals across the Middle East & Africa",
  "Multi-vendor technical depth (Nokia, Ericsson, Huawei & more)",
  "Field, NOC & project teams across 15 countries",
  "21+ years of sustained delivery on major regional programs",
];

export default function Careers() {
  const [heroTitleDone, setHeroTitleDone] = useState(false);

  return (
    <Layout
      title="Careers"
      description="Careers and contact — talk to the Shabakkat team about opportunities, or your engineering, PMO, or advisory needs."
    >
      <Hero
        photoLabel="PHOTO — Shabakkat corporate office, full-bleed"
        heightClassName="h-[240px] sm:h-[270px] lg:h-[300px]"
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
          Whether you&apos;re planning a new infrastructure program, seeking a trusted engineering partner, or
          exploring new opportunities, our team is ready to help.
        </AnimatedParagraph>
      </Hero>

      <div className="section-px section-py">
        <SectionHeading
          eyebrow="BUILD YOUR FUTURE WITH SHABAKKAT"
          title="Build critical infrastructure with a regional leader"
          description="At Shabakkat, we believe our people are our greatest strength. We are always looking for passionate professionals who are committed to engineering excellence, innovation, and delivering meaningful impact across the region. Whether you're an experienced professional or an emerging talent, you'll find opportunities to work on challenging projects, collaborate with industry experts, and contribute to shaping the future of digital infrastructure."
        />
        <div className="mt-6 flex flex-wrap gap-2.5">
          {cultureHighlights.map((item) => (
            <Chip key={item}>{item}</Chip>
          ))}
        </div>
        <Button
          href="mailto:info@shabakkat.com?subject=CV%20Submission"
          variant="outline"
          className="mt-6 inline-block"
        >
          SUBMIT YOUR CV
        </Button>
      </div>

      <div className="section-px section-py bg-bg-muted">
        <SectionHeading
          eyebrow="CURRENT OPPORTUNITIES"
          title="Join our team"
          description="Explore our latest career opportunities across engineering, project management, technical advisory, operations, and corporate functions."
        />
        <div className="mt-8 flex flex-col gap-4">
          {openings.map((opening) => (
            <OpeningCard key={opening.title} opening={opening} />
          ))}
        </div>
      </div>

      <div className="section-px section-py grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading eyebrow="SEND AN INQUIRY" title="Tell us about your project" />
          <ContactForm />
        </div>

        <div>
          <Eyebrow>HEADQUARTERS</Eyebrow>
          <div className="mt-3.5">
            <OfficeCard office={headOffice} />
          </div>
          <div className="mt-5 grid grid-cols-1 gap-4 text-[13.5px] text-text-body sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-bg-muted px-4 py-3">
              <div className="font-heading text-xs uppercase tracking-[0.06em] text-text-muted">Email</div>
              <div className="mt-1">info@shabakkat.com</div>
            </div>
            <div className="rounded-lg border border-border bg-bg-muted px-4 py-3">
              <div className="font-heading text-xs uppercase tracking-[0.06em] text-text-muted">Business Hours</div>
              <div className="mt-1">Sunday to Thursday, 8:00 AM – 5:00 PM (GMT+3)</div>
            </div>
          </div>
          <PhotoPlaceholder label="MAP — Kuwait head office" className="mt-5 h-[220px] rounded-xl" />
        </div>
      </div>

      <div className="section-px section-py">
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
