import SectionHeading from "@/components/ui/SectionHeading";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";

const items = [
  { color: "border-red", text: "First Aid / CPR Training" },
  { color: "border-cyan", text: "Working at Height Safety" },
  { color: "border-red", text: "Electrical Safety Training" },
];

export default function HseSection() {
  return (
    <div className="grid grid-cols-2 items-center gap-14 px-14 py-20">
      <PhotoPlaceholder label="PHOTO — engineers in field, safety gear" className="h-[340px] rounded" />
      <div>
        <SectionHeading eyebrow="HSE COMMITMENT" title="Health, safety & environment" />
        <p className="mt-4 text-[15.5px] leading-[1.75] text-text-body">
          Shabakkat is committed to educating, training, and cultivating employee adherence to HSE practices —
          maintaining a healthy and safe working environment for all clients, employees, and suppliers.
        </p>
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
