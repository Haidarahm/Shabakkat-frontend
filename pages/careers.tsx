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
import { headOffice, regionalOffices } from "@/data/offices";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";

const cultureHighlights = [
  "800+ professionals across the Middle East & Africa",
  "Multi-vendor technical depth (Nokia, Ericsson, Huawei & more)",
  "Field, NOC & project teams across 13 countries",
  "19+ years of sustained delivery on major regional programs",
];

export default function Careers() {
  const [heroTitleDone, setHeroTitleDone] = useState(false);

  return (
    <Layout
      title="Careers"
      description="Careers and contact — talk to the Shabakkat team about opportunities, your network rollout, managed services, or ICT project."
    >
      <Hero
        photoLabel="PHOTO — Shabakkat corporate office, full-bleed"
        heightClassName="h-[240px] sm:h-[270px] lg:h-[300px]"
        align="bottom"
      >
        <div className="mb-4 h-[3px] w-[60px] bg-red" />
        <AnimatedTitle
          as="h1"
          text="Careers & contact"
          className="font-heading text-[26px] font-semibold uppercase text-white sm:text-[32px] lg:text-[38px]"
          onAnimationComplete={() => setHeroTitleDone(true)}
        />
        <AnimatedParagraph active={heroTitleDone} className="mt-2.5 text-sm text-white/85 lg:text-[15.5px]">
          Talk to our team about opportunities at Shabakkat, or your network rollout, managed services, or ICT
          project.
        </AnimatedParagraph>
      </Hero>

      <div className="section-px section-py">
        <SectionHeading
          eyebrow="WHY WORK AT SHABAKKAT"
          title="Build critical networks with a regional leader"
          description="We're a team of field engineers, NOC specialists, and project professionals delivering telecom & ICT infrastructure across the Middle East and Africa — and we're always glad to hear from people who want to do the same."
        />
        <div className="mt-6 flex flex-wrap gap-2.5">
          {cultureHighlights.map((item) => (
            <Chip key={item}>{item}</Chip>
          ))}
        </div>
        <Button
          href="mailto:info@shabakkat.com?subject=Career%20Inquiry"
          variant="outline"
          className="mt-6 inline-block"
        >
          EMAIL US ABOUT OPPORTUNITIES
        </Button>
      </div>

      <div className="section-px section-py grid grid-cols-1 gap-10 bg-bg-muted lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading eyebrow="SEND AN INQUIRY" title="Tell us about your project" />
          <ContactForm />
        </div>

        <div>
          <Eyebrow>HEAD OFFICE</Eyebrow>
          <div className="mt-3.5">
            <OfficeCard office={headOffice} />
          </div>
          <PhotoPlaceholder label="MAP — Kuwait head office" className="mt-5 h-[220px] rounded" />
          <p className="mt-3 text-[12.5px] text-text-muted">
            ⚠ Office details sourced from the current live site — please confirm addresses, numbers and active
            locations before publishing.
          </p>
        </div>
      </div>

      <div className="section-px section-py">
        <SectionHeading eyebrow="OUR OFFICES" title="Regional presence" />
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {regionalOffices.map((office) => (
            <OfficeCard key={office.name} office={office} />
          ))}
        </div>
        <p className="mt-5 text-[12.5px] text-text-muted">
          ⚠ All office locations above are drawn from the current live website (content dated 2013) — recommend
          client verification before publishing.
        </p>
      </div>

      <div className="section-px bg-bg-tint py-14 text-center sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[640px]">
          <AnimatedTitle
            text="Let's build something reliable, together"
            className="font-heading text-[22px] font-semibold uppercase text-navy sm:text-[26px] lg:text-[30px]"
          />
          <a
            href="mailto:info@shabakkat.com"
            className="mt-3.5 inline-block rounded-[2px] bg-navy px-8 py-[15px] font-heading text-sm tracking-[0.05em] text-white transition-colors hover:bg-navy-dark"
          >
            EMAIL INFO@SHABAKKAT.COM
          </a>
        </div>
      </div>
    </Layout>
  );
}
