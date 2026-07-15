import { useState } from "react";
import Button from "@/components/ui/Button";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";

interface FinalCtaProps {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function FinalCta({
  title,
  description,
  ctaLabel = "CONTACT SHABAKKAT",
  ctaHref = "/careers",
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
        <Button href={ctaHref} size="lg">
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
