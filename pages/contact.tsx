import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import Eyebrow from "@/components/ui/Eyebrow";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import ContactForm from "@/components/contact/ContactForm";
import OfficeCard from "@/components/contact/OfficeCard";
import { headOffice, regionalOffices } from "@/data/offices";

export default function Contact() {
  return (
    <Layout
      title="Contact"
      description="Talk to the Shabakkat team about your network rollout, managed services, or ICT project."
    >
      <Hero photoLabel="PHOTO — Shabakkat corporate office, full-bleed" heightClassName="h-[300px]" align="bottom">
        <div className="mb-4 h-[3px] w-[60px] bg-red" />
        <h1 className="font-heading text-[38px] font-semibold uppercase text-white">Get in touch</h1>
        <p className="mt-2.5 text-[15.5px] text-white/85">
          Talk to our team about your network rollout, managed services, or ICT project.
        </p>
      </Hero>

      <div className="grid grid-cols-2 gap-16 px-14 py-[72px]">
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

      <div className="bg-bg-muted px-14 py-[72px]">
        <SectionHeading eyebrow="OUR OFFICES" title="Regional presence" />
        <div className="mt-8 grid grid-cols-3 gap-5">
          {regionalOffices.map((office) => (
            <OfficeCard key={office.name} office={office} />
          ))}
        </div>
        <p className="mt-5 text-[12.5px] text-text-muted">
          ⚠ All office locations above are drawn from the current live website (content dated 2013) — recommend
          client verification before publishing.
        </p>
      </div>

      <div className="bg-bg-tint px-14 py-20 text-center">
        <div className="mx-auto max-w-[640px]">
          <h2 className="font-heading text-[30px] font-semibold uppercase text-navy">
            Let&apos;s build something reliable, together
          </h2>
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
