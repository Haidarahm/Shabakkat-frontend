import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import StaggerGrid from "@/components/ui/StaggerGrid";
import StaggerItem from "@/components/ui/StaggerItem";
import { coreValues } from "@/data/coreValues";

export default function CoreValues() {
  return (
    <div className="section-px section-py bg-bg-muted">
      <SectionHeading eyebrow="CORE VALUES" title="The principles that define our culture" />
      <StaggerGrid className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {coreValues.map((value) => (
          <StaggerItem key={value.title}>
            <Card className="h-full bg-white p-6">
              <div className="font-heading text-[16px] text-navy">{value.title}</div>
              <p className="mt-2 text-[13px] leading-[1.6] text-text-muted">{value.description}</p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </div>
  );
}
