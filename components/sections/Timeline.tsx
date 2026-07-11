import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/ui/SectionHeading";
import { timeline } from "@/data/timeline";
import { accentBorder, accentText, accentBg } from "@/lib/colorMap";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const tagPillClasses = (color: "red" | "cyan" | "navy") =>
  `rounded-full px-2.5 py-[3px] font-heading text-[10px] tracking-[0.05em] ${accentText[color]} ${accentBg[color]}/10`;

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = itemRefs.current.filter((el): el is HTMLDivElement => el !== null);
      const header = document.querySelector("header");
      const headerHeight = () => header?.getBoundingClientRect().height ?? 84;

      // The last entry has nothing to hand off to, so it scrolls away normally instead of pinning.
      items.slice(0, -1).forEach((item) => {
        ScrollTrigger.create({
          trigger: item,
          start: () => `top ${headerHeight()}`,
          // Reserve real space for the hold (pinSpacing true) so the next entry never
          // slides in underneath/over the pinned one — it only arrives once this one lets go.
          end: () => `+=${item.offsetHeight * 1.5}`,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="section-px section-py">
      <SectionHeading eyebrow="OUR JOURNEY" title="Mega projects timeline" />
      <div ref={containerRef} className="relative mx-auto mt-5 max-w-[1080px]">
        <div className="absolute bottom-1 left-5 top-1 w-0.5 -translate-x-1/2 bg-[#ECECEC] lg:left-1/2" />
        {timeline.map((entry, i) => (
          <div
            key={entry.year}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className="relative grid grid-cols-[40px_1fr] items-start gap-4 py-[18px] lg:grid-cols-[1fr_64px_1fr] lg:items-center lg:gap-0 lg:py-[26px]"
          >
            <div className="flex flex-col items-center gap-1 lg:col-start-2">
              <div className={`whitespace-nowrap font-heading text-[13px] ${accentText[entry.color]}`}>
                {entry.year}
              </div>
              <div className={`h-3.5 w-3.5 rounded-full border-[3px] bg-white ${accentBorder[entry.color]}`} />
            </div>

            <div
              className={
                entry.side === "left"
                  ? "lg:col-start-1 lg:pr-8 lg:text-right"
                  : "lg:col-start-3 lg:pl-8 lg:text-left"
              }
            >
              <div
                className={`flex flex-wrap items-center gap-2.5 ${
                  entry.side === "left" ? "lg:justify-end" : ""
                }`}
              >
                <div className="font-heading text-base text-navy">{entry.client}</div>
                <div className={tagPillClasses(entry.color)}>{entry.tag}</div>
                <div className="text-xs text-text-muted">{entry.country}</div>
              </div>
              <div className="mt-2 font-heading text-[14.5px] text-text-body-alt">{entry.title}</div>
              <div className="mt-1.5 text-[13.5px] leading-[1.6] text-text-muted">{entry.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
