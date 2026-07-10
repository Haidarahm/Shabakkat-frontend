import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { competitors } from "@/data/competitors";

export default function CompetitiveLandscape() {
  return (
    <div className="px-14 py-20">
      <SectionHeading
        eyebrow="REGIONAL LANDSCAPE"
        title="Positioned among the Gulf's telecom infrastructure specialists"
        description="The GCC's telecom infrastructure and managed-services market includes established regional players. Shabakkat differentiates through its full-spectrum portfolio — spanning rollout, managed services, NOC, power, cybersecurity, and revenue assurance — under a single accountable partner."
      />
      <div className="mt-8 grid grid-cols-3 gap-5">
        {competitors.map((c) => (
          <Card key={c.name} className="p-6">
            <div className="font-heading text-[16px] text-navy">{c.name}</div>
            <div className="mt-0.5 text-xs text-text-muted">{c.region}</div>
            <div className="mt-2.5 text-[13.5px] leading-[1.6] text-text-body">{c.description}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
