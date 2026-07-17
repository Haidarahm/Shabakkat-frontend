import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import StaggerGrid from "@/components/ui/StaggerGrid";
import StaggerItem from "@/components/ui/StaggerItem";
import { whyUs } from "@/data/whyUs";
import { accentText } from "@/lib/colorMap";

export default function WhyUsGrid() {
  return (
    <div className="section-px section-py">
      <SectionHeading
        eyebrow="WHY SHABAKKAT"
        title="Engineering confidence into every project"
        description="Critical infrastructure requires more than technical capability. It requires a partner capable of aligning strategy, governance, and execution within a single delivery model."
      />
      <StaggerGrid className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whyUs.map((item) => (
          <StaggerItem key={item.number}>
            <Card className="p-[26px]">
              <div className={`font-heading text-[13px] tracking-[0.05em] ${accentText[item.color]}`}>
                {item.number}
              </div>
              <div className="mt-2 font-heading text-[17px]">{item.title}</div>
              <div className="mt-1.5 text-sm text-text-muted">{item.description}</div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGrid>
    </div>
  );
}
