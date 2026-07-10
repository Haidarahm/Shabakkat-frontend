import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { capabilities } from "@/data/capabilities";

export default function CapabilitiesGrid() {
  return (
    <div className="section-px section-py">
      <SectionHeading eyebrow="CORE CAPABILITIES" title="Area of expertise" />
      <div className="mt-8 grid grid-cols-1 gap-px border border-[#ECECEC] bg-[#ECECEC] sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((cap) => (
          <Link
            key={cap.title}
            href={cap.href}
            className={`group relative flex h-[184px] flex-col gap-2.5 p-[18px] transition-colors duration-200 ${
              cap.highlighted
                ? "bg-navy text-white"
                : "bg-white text-navy hover:bg-navy hover:text-white"
            }`}
          >
            <div className="font-heading text-[15px]">{cap.title}</div>
            <div
              className={`text-[12.5px] leading-[1.6] transition-opacity duration-200 ${
                cap.highlighted ? "opacity-100" : "opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
              }`}
            >
              {cap.description}
            </div>
            <div
              className={`mt-auto flex items-center gap-1.5 font-heading text-[11.5px] tracking-[0.03em] transition-opacity duration-200 ${
                cap.highlighted ? "opacity-100" : "opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
              }`}
            >
              LEARN MORE <span>→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
