import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import FaqItem from "@/components/faq/FaqItem";
import { faqHighlights } from "@/data/faq";

export default function FaqTeaser() {
  return (
    <div className="section-px section-py">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
      </div>
      <div className="mx-auto mt-8 max-w-[760px]">
        {faqHighlights.map((item) => (
          <FaqItem key={item.question} item={item} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/faq"
          className="inline-flex items-center gap-1.5 font-heading text-[12.5px] tracking-[0.04em] text-navy hover:text-cyan"
        >
          VIEW ALL FAQS <span>→</span>
        </Link>
      </div>
    </div>
  );
}
