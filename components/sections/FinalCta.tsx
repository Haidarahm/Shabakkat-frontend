import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Button from "@/components/ui/Button";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";

const buttonRow: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const buttonItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

interface FinalCtaProps {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export default function FinalCta({
  title,
  description,
  ctaLabel = "CONTACT SHABAKKAT",
  ctaHref = "/contact",
  secondaryCtaLabel,
  secondaryCtaHref,
}: FinalCtaProps) {
  const [titleDone, setTitleDone] = useState(false);

  return (
    <div className="section-px bg-bg-tint py-14 text-center sm:py-16 lg:py-[90px]">
      <div className="mx-auto max-w-[720px]">
        <AnimatedTitle
          text={title}
          className="font-heading text-[24px] font-semibold uppercase text-navy sm:text-[28px] lg:text-[34px]"
          onAnimationComplete={() => setTitleDone(true)}
        />
        <AnimatedParagraph active={titleDone} className="mt-4 mb-7 text-base text-text-body-alt">
          {description}
        </AnimatedParagraph>
        <motion.div
          className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          variants={buttonRow}
          initial="hidden"
          animate={titleDone ? "visible" : "hidden"}
        >
          <motion.div variants={buttonItem}>
            <Button href={ctaHref} variant="outline" size="lg">
              {ctaLabel}
            </Button>
          </motion.div>
          {secondaryCtaLabel && secondaryCtaHref && (
            <motion.div variants={buttonItem}>
              <Button href={secondaryCtaHref} size="lg">
                {secondaryCtaLabel}
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
