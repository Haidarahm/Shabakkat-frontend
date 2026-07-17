import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import RegionalMap from "@/components/sections/RegionalMap";
import { footprintLocations } from "@/data/offices";

const legend = [
  { color: "bg-red", label: "Headquarters" },
  { color: "bg-cyan", label: "Regional office" },
];

const roleAccent: Record<(typeof footprintLocations)[number]["role"], string> = {
  Headquarters: "border-l-red",
  "Regional office": "border-l-cyan",
  "Project delivery": "border-l-border",
};

export default function GlobalFootprint() {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  return (
    <div className="section-px section-py bg-bg-muted">
      <SectionHeading
        eyebrow="REGIONAL PRESENCE"
        title="Regional reach. Local expertise."
        description="Operating across 15 countries, Shabakkat combines regional scale with local knowledge to deliver consistent engineering excellence while understanding the operational, regulatory, and commercial realities of every market we serve."
      />
      <div className="mt-7 grid grid-cols-1 items-start gap-9 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <RegionalMap activePin={activeLocation} onPinHover={setActiveLocation} />
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
          {footprintLocations.map((loc) => {
            const isActive = activeLocation === loc.name;
            return (
              <div
                key={loc.name}
                onMouseEnter={() => setActiveLocation(loc.name)}
                onMouseLeave={() => setActiveLocation(null)}
                onFocus={() => setActiveLocation(loc.name)}
                onBlur={() => setActiveLocation(null)}
                tabIndex={0}
                className={`flex cursor-default items-baseline justify-between gap-3 rounded-lg border border-l-[3px] border-border bg-white px-4 py-2.5 transition-all duration-200 ${roleAccent[loc.role]} ${
                  isActive ? "bg-bg-tint ring-2 ring-cyan/50" : ""
                }`}
              >
                <div className="font-heading text-sm text-navy">{loc.name}</div>
                <div className="whitespace-nowrap text-[11.5px] text-text-muted">{loc.role}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
