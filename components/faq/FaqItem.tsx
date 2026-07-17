import { useId, useState } from "react";
import type { FaqItem as FaqItemData } from "@/data/faq";

export default function FaqItem({ item }: { item: FaqItemData }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const buttonId = `faq-question-${id}`;
  const panelId = `faq-answer-${id}`;

  return (
    <div className="border-b border-border py-4">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 text-left"
        >
          <span className="font-heading text-[14.5px] text-navy sm:text-[15.5px]">{item.question}</span>
          <span
            aria-hidden="true"
            className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-border text-cyan transition-transform duration-300 ${
              open ? "rotate-45" : ""
            }`}
          >
            +
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-[13.5px] leading-[1.7] text-text-body">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}
