import SectionHeading from "@/components/ui/SectionHeading";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import { footprintLocations } from "@/data/offices";

const legend = [
  { color: "bg-red", label: "Headquarters" },
  { color: "bg-cyan", label: "Regional office" },
  { color: "bg-navy", label: "Project delivery" },
];

const roleAccent: Record<(typeof footprintLocations)[number]["role"], string> = {
  Headquarters: "border-l-red",
  "Regional office": "border-l-cyan",
  "Project delivery": "border-l-border",
};

export default function GlobalFootprint() {
  return (
    <div className="section-px section-py bg-bg-muted">
      <SectionHeading
        eyebrow="REGIONAL PRESENCE"
        title="Regional reach. Local expertise."
        description="Operating across 15 countries, Shabakkat combines regional scale with local knowledge to deliver consistent engineering excellence while understanding the operational, regulatory, and commercial realities of every market we serve."
      />
      <div className="mt-7 grid grid-cols-1 items-start gap-9 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <PhotoPlaceholder
            label="MAP — Middle East & Africa footprint"
            src="/images/footprint/mea-map.jpg"
            className="aspect-[1480/1400] w-full rounded-xl border border-border"
          />
          <div className="mt-3.5 flex gap-4 text-[11.5px] text-text-muted">
            {legend.map((item) => (
              <div key={item.label} className="flex items-center gap-1.5">
                <div className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                {item.label}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 content-start gap-2.5 sm:grid-cols-2">
          {footprintLocations.map((loc) => (
            <div
              key={loc.name}
              className={`flex items-baseline justify-between gap-3 rounded-lg border border-l-[3px] border-border bg-white px-4 py-2.5 ${roleAccent[loc.role]}`}
            >
              <div className="font-heading text-sm text-navy">{loc.name}</div>
              <div className="whitespace-nowrap text-[11.5px] text-text-muted">{loc.role}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
