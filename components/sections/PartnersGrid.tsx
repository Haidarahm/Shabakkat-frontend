import SectionHeading from "@/components/ui/SectionHeading";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import StaggerGrid from "@/components/ui/StaggerGrid";
import StaggerItem from "@/components/ui/StaggerItem";
import { partners } from "@/data/partners";

export default function PartnersGrid() {
  return (
    <div className="section-px section-py">
      <SectionHeading
        eyebrow="TRUSTED BY"
        title="Customers & partners"
        description="Shabakkat is proud to be associated with leading Communications Service Providers and Enterprises across the Middle East and Africa, including Zain Group, Wataniya, Airtel, MTN, Maroc Telecom, and INWI, alongside government institutions such as Autoroutes du Maroc."
      />
      <StaggerGrid className="mt-8 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-6">
        {partners.map((partner) => (
          <StaggerItem key={partner}>
            <PhotoPlaceholder label={partner} className="h-[70px] rounded-[3px] text-[11px]" />
          </StaggerItem>
        ))}
      </StaggerGrid>
    </div>
  );
}
