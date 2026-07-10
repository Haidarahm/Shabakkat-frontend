import SectionHeading from "@/components/ui/SectionHeading";
import { industries } from "@/data/industries";
import { accentText } from "@/lib/colorMap";

export default function IndustriesGrid() {
  return (
    <div className="section-px section-py bg-white">
      <SectionHeading eyebrow="WHO WE SERVE" title="Industries served" />
      <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry) => (
          <div key={industry.title} className="rounded border border-border p-[26px]">
            <div className={`font-heading text-[17px] ${accentText[industry.color]}`}>{industry.title}</div>
            <div className="mt-2 text-[13.5px] text-text-subtle">{industry.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
