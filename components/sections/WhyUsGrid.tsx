import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { whyUs } from "@/data/whyUs";
import { accentText } from "@/lib/colorMap";

export default function WhyUsGrid() {
  return (
    <div className="section-px section-py">
      <SectionHeading
        eyebrow="WHY SHABAKKAT"
        title="We love to see our clients shine. When they do well, so do we."
      />
      <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whyUs.map((item) => (
          <Card key={item.number} className="p-[26px]">
            <div className={`font-heading text-[13px] tracking-[0.05em] ${accentText[item.color]}`}>
              {item.number}
            </div>
            <div className="mt-2 font-heading text-[17px]">{item.title}</div>
            <div className="mt-1.5 text-sm text-text-muted">{item.description}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
