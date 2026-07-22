import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerGrid from "@/components/ui/StaggerGrid";
import StaggerItem from "@/components/ui/StaggerItem";
import { capabilities } from "@/data/capabilities";

export default function CapabilitiesGrid() {
  return (
    <div className="section-px section-py">
      <SectionHeading eyebrow="CORE CAPABILITIES" title="Four core capabilities. One strategic partner." />
      <StaggerGrid
        className="mt-8 grid grid-cols-1 gap-px border border-[#ECECEC] bg-[#ECECEC] sm:grid-cols-2 lg:grid-cols-4"
        animateOnMount
      >
        {capabilities.map((cap, i) => (
          <StaggerItem key={cap.title}>
            <Link
              href={cap.href}
              className={`group relative flex h-[184px] flex-col gap-2.5 bg-white p-[18px] text-navy transition-colors duration-200 hover:text-white ${
                i % 2 === 0 ? "hover:bg-navy" : "hover:bg-red"
              }`}
            >
              <div className="font-heading text-[15px]">{cap.title}</div>
              <div className="text-[12.5px] leading-[1.6] opacity-100 transition-opacity duration-200 lg:opacity-0 lg:group-hover:opacity-100">
                {cap.description}
              </div>
              <div className="mt-auto flex items-center gap-1.5 font-heading text-[11.5px] tracking-[0.03em] opacity-100 transition-opacity duration-200 lg:opacity-0 lg:group-hover:opacity-100">
                LEARN MORE <span>→</span>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </div>
  );
}
