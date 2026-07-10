import SectionHeading from "@/components/ui/SectionHeading";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import { partners } from "@/data/partners";

export default function PartnersGrid() {
  return (
    <div className="px-14 py-20">
      <SectionHeading
        eyebrow="TRUSTED BY"
        title="Customers & partners"
        description="Shabakkat is proud to be associated with leading Communications Service Providers and Enterprises across the Middle East and Africa, including Zain Group, Wataniya, Airtel, MTN, Maroc Telecom, and INWI, alongside government institutions such as Autoroutes du Maroc."
      />
      <div className="mt-8 grid grid-cols-6 gap-3.5">
        {partners.map((partner) => (
          <PhotoPlaceholder key={partner} label={partner} className="h-[70px] rounded-[3px] text-[11px]" />
        ))}
      </div>
    </div>
  );
}
