import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";

const items = [
  { color: "border-red", text: "First Aid / CPR Training" },
  { color: "border-cyan", text: "Working at Height Safety" },
  { color: "border-red", text: "Electrical Safety Training" },
];

export default function HseSection() {
  const [titleDone, setTitleDone] = useState(false);

  return (
    <div className="section-px section-py grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
      <PhotoPlaceholder
        label="PHOTO — engineers in field, safety gear"
        className="h-[220px] rounded sm:h-[280px] lg:h-[340px]"
      />
      <div>
        <SectionHeading
          eyebrow="HSE COMMITMENT"
          title="Health, safety & environment"
          onTitleComplete={() => setTitleDone(true)}
        />
        <AnimatedParagraph active={titleDone} className="mt-4 text-[15.5px] leading-[1.75] text-text-body">
          Shabakkat is committed to educating, training, and cultivating employee adherence to HSE practices —
          maintaining a healthy and safe working environment for all clients, employees, and suppliers.
        </AnimatedParagraph>
        <div className="mt-5 flex flex-wrap gap-3">
          {items.map((item) => (
            <div
              key={item.text}
              className={`border-l-[3px] bg-bg-muted px-4 py-2.5 font-heading text-[13.5px] ${item.color}`}
            >
              {item.text}
            </div>
          ))}
        </div>
        <p className="mt-4 text-[13px] text-text-muted">Certifications issued via TUTIS.</p>
      </div>
    </div>
  );
}
