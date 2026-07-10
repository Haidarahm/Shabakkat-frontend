import type { ReactNode } from "react";
import Eyebrow from "./Eyebrow";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  className?: string;
}

export default function SectionHeading({ eyebrow, title, description, className = "" }: SectionHeadingProps) {
  return (
    <div className={className}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-heading text-[34px] font-semibold uppercase leading-[1.15] text-navy">{title}</h2>
      {description && <p className="mt-3.5 max-w-[720px] text-[15.5px] leading-[1.7] text-text-body">{description}</p>}
    </div>
  );
}
