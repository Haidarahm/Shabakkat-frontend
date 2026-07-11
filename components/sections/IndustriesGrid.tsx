import SectionHeading from "@/components/ui/SectionHeading";
import StaggerGrid from "@/components/ui/StaggerGrid";
import StaggerItem from "@/components/ui/StaggerItem";
import { industries } from "@/data/industries";
import { accentText } from "@/lib/colorMap";

export default function IndustriesGrid() {
  return (
    <div className="section-px section-py bg-white">
      <SectionHeading eyebrow="WHO WE SERVE" title="Industries served" />
      <StaggerGrid className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry) => (
          <StaggerItem key={industry.title}>
            <div className="h-full rounded border border-border p-[26px]">
              <div className={`font-heading text-[17px] ${accentText[industry.color]}`}>{industry.title}</div>
              <div className="mt-2 text-[13.5px] text-text-subtle">{industry.description}</div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </div>
  );
}
