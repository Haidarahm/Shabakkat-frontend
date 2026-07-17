import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import FinalCta from "@/components/sections/FinalCta";
import SectionHeading from "@/components/ui/SectionHeading";
import FaqItem from "@/components/faq/FaqItem";
import { faqCategories } from "@/data/faq";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";

export default function Faq() {
  const [heroTitleDone, setHeroTitleDone] = useState(false);

  return (
    <Layout
      title="FAQ"
      description="Answers to common questions about Shabakkat's telecom and ICT services, delivery model, and how to start a project."
    >
      <Hero
        photoLabel="PHOTO — engineers discussing a project, full-bleed"
        heightClassName="h-[260px] sm:h-[290px] lg:h-[320px]"
      >
        <div className="mb-4 h-[3px] w-[60px] bg-red" />
        <AnimatedTitle
          as="h1"
          text="Frequently asked questions"
          className="mx-auto mb-2.5 font-heading text-[26px] font-semibold uppercase text-white sm:text-[32px] lg:text-[38px]"
          onAnimationComplete={() => setHeroTitleDone(true)}
        />
        <AnimatedParagraph
          active={heroTitleDone}
          className="mx-auto max-w-[640px] text-sm text-white/85 lg:text-[15.5px]"
        >
          Answers to common questions about our services, delivery model, and how to start a project.
        </AnimatedParagraph>
      </Hero>

      {faqCategories.map((category, i) => (
        <div key={category.title} className={`section-px section-py ${i % 2 === 1 ? "bg-bg-muted" : ""}`}>
          <div className="mx-auto max-w-[760px]">
            <SectionHeading eyebrow={`${String(i + 1).padStart(2, "0")}`} title={category.title} />
            <div className="mt-7">
              {category.items.map((item) => (
                <FaqItem key={item.question} item={item} />
              ))}
            </div>
          </div>
        </div>
      ))}

      <FinalCta
        title="Still have a question?"
        description="Talk to our team — we're glad to help with anything not covered here."
      />
    </Layout>
  );
}
