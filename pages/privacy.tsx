import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";

const paragraphClasses = "mt-3.5 max-w-[720px] text-[15px] leading-[1.75] text-text-body";
const listClasses = "mt-3.5 max-w-[720px] list-disc space-y-1.5 pl-5 text-[15px] leading-[1.75] text-text-body";

export default function Privacy() {
  const [heroTitleDone, setHeroTitleDone] = useState(false);

  return (
    <Layout
      title="Privacy Policy"
      description="How Shabakkat collects, uses, and protects information submitted through this website."
    >
      <Hero
        photoLabel="PHOTO — Shabakkat office, full-bleed"
        heightClassName="h-[220px] sm:h-[250px] lg:h-[280px]"
        align="bottom"
      >
        <div className="mb-4 h-[3px] w-[60px] bg-red" />
        <AnimatedTitle
          as="h1"
          text="Privacy policy"
          className="font-heading text-[26px] font-semibold uppercase text-white sm:text-[32px] lg:text-[38px]"
          onAnimationComplete={() => setHeroTitleDone(true)}
        />
        <AnimatedParagraph active={heroTitleDone} className="mt-2.5 text-sm text-white/85 lg:text-[15.5px]">
          Last updated: July 2026
        </AnimatedParagraph>
      </Hero>

      <div className="section-px section-py max-w-[880px]">
        <p className={paragraphClasses}>
          This policy explains what information Shabakkat collects through this website, why we collect it, and
          how it is handled. It applies to shabakkat.com and covers the forms and pages currently published on
          this site.
        </p>

        <SectionHeading
          className="mt-12"
          eyebrow="WHAT WE COLLECT"
          title="Information you provide to us"
        />
        <p className={paragraphClasses}>
          The only information this website collects is what you choose to submit through the inquiry form on
          the Careers &amp; Contact page. That form asks for:
        </p>
        <ul className={listClasses}>
          <li>Full name</li>
          <li>Company name (optional)</li>
          <li>Email address</li>
          <li>Phone number (optional)</li>
          <li>The service you&apos;re interested in</li>
          <li>Your message</li>
        </ul>
        <p className={paragraphClasses}>
          We do not require you to create an account, and we do not collect payment information anywhere on this
          site.
        </p>

        <SectionHeading
          className="mt-12"
          eyebrow="WHY WE COLLECT IT"
          title="How your information is used"
        />
        <p className={paragraphClasses}>
          We use the information you submit solely to respond to your inquiry — whether that&apos;s a question
          about our services, a project or proposal request, a supplier or partnership inquiry, or a question
          about career opportunities at Shabakkat. We do not use it for marketing you haven&apos;t asked for, and
          we do not sell it.
        </p>

        <SectionHeading
          className="mt-12"
          eyebrow="WHO SEES IT"
          title="Who receives your information"
        />
        <p className={paragraphClasses}>
          Submissions are received by Shabakkat&apos;s internal commercial and technical teams so the right
          person can follow up with you. We do not share, sell, or rent your information to third parties for
          their own marketing purposes.
        </p>

        <SectionHeading
          className="mt-12"
          eyebrow="STORAGE & RETENTION"
          title="Where information is stored and for how long"
        />
        <p className={paragraphClasses}>
          Submitted inquiries are processed on Shabakkat&apos;s servers and retained only for as long as
          reasonably necessary to respond to your inquiry and maintain a record of business communications, or
          as required by applicable law. As our contact-handling systems evolve, this policy will be updated to
          reflect the specific tools and retention periods in use.
        </p>

        <SectionHeading
          className="mt-12"
          eyebrow="COOKIES & ANALYTICS"
          title="Cookies and tracking"
        />
        <p className={paragraphClasses}>
          This website does not currently use tracking cookies, advertising cookies, or third-party analytics
          services. If that changes in the future, this policy will be updated to describe what is used and how
          you can control it.
        </p>

        <SectionHeading
          className="mt-12"
          eyebrow="YOUR RIGHTS"
          title="Accessing, correcting, or deleting your information"
        />
        <p className={paragraphClasses}>
          You can ask us what information we hold about you, request a correction, or request that we delete it,
          by contacting us using the details below. We will respond to reasonable requests within a reasonable
          timeframe.
        </p>

        <SectionHeading
          className="mt-12"
          eyebrow="CONTACT"
          title="Questions about this policy"
        />
        <p className={paragraphClasses}>
          If you have questions about this privacy policy or how your information is handled, contact us at{" "}
          <a href="mailto:info@shabakkat.com" className="text-cyan hover:text-navy">
            info@shabakkat.com
          </a>{" "}
          or write to our head office: Qibla Area, Block 13, Mohammad Thunayan Al-Ghanim Street, Al Nour
          Investment Building, 1st Floor, PO Box 3976, Safat, 13040 Kuwait.
        </p>
      </div>
    </Layout>
  );
}
