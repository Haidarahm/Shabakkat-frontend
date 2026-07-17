import { useState } from "react";
import type { ReactNode } from "react";
import Eyebrow from "./Eyebrow";
import AnimatedTitle from "./AnimatedTitle";
import AnimatedParagraph from "./AnimatedParagraph";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  className?: string;
  onTitleComplete?: () => void;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
  onTitleComplete,
}: SectionHeadingProps) {
  const [titleDone, setTitleDone] = useState(false);

  return (
    <div className={className}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <AnimatedTitle
        text={title}
        className="mt-4 font-heading text-[24px] font-semibold uppercase leading-[1.15] text-navy sm:text-[28px] lg:text-[34px]"
        onAnimationComplete={() => {
          setTitleDone(true);
          onTitleComplete?.();
        }}
      />
      {description && (
        <AnimatedParagraph
          as="div"
          active={titleDone}
          className="mt-3.5 max-w-[720px] text-[15.5px] leading-[1.7] text-text-body"
        >
          {description}
        </AnimatedParagraph>
      )}
    </div>
  );
}
