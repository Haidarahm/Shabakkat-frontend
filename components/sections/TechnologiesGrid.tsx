import SectionHeading from "@/components/ui/SectionHeading";
import StaggerGrid from "@/components/ui/StaggerGrid";
import StaggerItem from "@/components/ui/StaggerItem";
import { technologies } from "@/data/technologies";
import { accentText } from "@/lib/colorMap";

export default function TechnologiesGrid() {
  return (
    <div className="section-px section-py bg-bg-muted">
      <SectionHeading eyebrow="MULTI-VENDOR, MULTI-TECHNOLOGY" title="Technologies & expertise" />
      <StaggerGrid className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {technologies.map((tech) => (
          <StaggerItem key={tech.title}>
            <div className={`h-full rounded-xl border border-border bg-white p-6`}>
              <div className={`font-heading text-[15px] ${accentText[tech.color]}`}>{tech.title}</div>
              <div className="mt-2.5 text-[13.5px] leading-[1.6] text-text-subtle">{tech.description}</div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </div>
  );
}
