import SectionHeading from "@/components/ui/SectionHeading";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import StaggerGrid from "@/components/ui/StaggerGrid";
import StaggerItem from "@/components/ui/StaggerItem";
import { partners } from "@/data/partners";

export default function PartnersGrid() {
  return (
    <div className="section-px section-py">
      <SectionHeading
        eyebrow="STRATEGIC PARTNERS"
        title="Strong partnerships. Greater outcomes."
        description="We collaborate with leading technology providers, equipment manufacturers, and strategic partners to deliver integrated solutions that accelerate execution, reduce complexity, and maximize long-term value for our clients."
      />
      <StaggerGrid className="mt-8 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-6">
        {partners.map((partner) => (
          <StaggerItem key={partner.name}>
            <PhotoPlaceholder
              label={partner.name}
              src={partner.logoSrc}
              objectFit="contain"
              className="h-[70px] rounded-lg border border-border bg-white p-3 text-[11px]"
            />
          </StaggerItem>
        ))}
      </StaggerGrid>
    </div>
  );
}
