import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";

const stats = [
  { label: "21+ Years", border: "border-red" },
  { label: "15 Countries", border: "border-cyan" },
  { label: "900+ Workforce", border: "border-navy" },
];

const statsRow: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

const statsItem: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function CompanyOverview() {
  const [titleDone, setTitleDone] = useState(false);

  return (
    <div className="section-px section-py grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div>
        <Eyebrow>WHO WE ARE</Eyebrow>
        <AnimatedTitle
          text="Engineering infrastructure that enables progress"
          className="mt-4 font-heading text-[24px] font-semibold uppercase leading-[1.15] text-navy sm:text-[28px] lg:text-[34px]"
          onAnimationComplete={() => setTitleDone(true)}
        />
        <AnimatedParagraph active={titleDone} className="mt-5 text-base leading-[1.75] text-text-body">
          Digital infrastructure has become the foundation of economic growth, business resilience, and national
          development. Delivering it successfully demands engineering excellence, disciplined execution, and strategic
          leadership. Established in 2005, Shabakkat has spent more than 21 years delivering complex infrastructure
          programs across the Middle East and Africa. Today, we operate across 15 countries with a multidisciplinary
          team of 900+ professionals, supporting operators, enterprises, and government organizations through every
          stage of the infrastructure lifecycle. By integrating Engineering Services, PMO &amp; Project Delivery, and
          Technical Advisory within a single organization, we provide our clients with one strategic partner capable of
          transforming vision into successful execution.
        </AnimatedParagraph>
        <motion.div
          className="mt-7 flex flex-wrap gap-3.5"
          variants={statsRow}
          initial="hidden"
          animate={titleDone ? "visible" : "hidden"}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={statsItem}
              className={`border-l-[3px] bg-bg-muted px-[18px] py-3.5 font-heading text-[13px] ${stat.border}`}
            >
              {stat.label}
            </motion.div>
          ))}
        </motion.div>
      </div>
      <PhotoPlaceholder
        label="PHOTO — corporate HQ / office team collaboration"
        src="/images/company/office-team.jpg"
        className="h-[260px] rounded-xl sm:h-[340px] lg:h-[440px]"
      />
    </div>
  );
}
