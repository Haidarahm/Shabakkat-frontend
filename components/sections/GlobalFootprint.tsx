import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import StaggerGrid from "@/components/ui/StaggerGrid";
import StaggerItem from "@/components/ui/StaggerItem";
import RegionalMap from "@/components/sections/RegionalMap";
import type { FootprintLocation } from "@/data/offices";

const legend = [
  { color: "bg-red", label: "Headquarters" },
  { color: "bg-cyan", label: "Regional office" },
];

const roleAccent: Record<FootprintLocation["role"], string> = {
  Headquarters: "border-l-red",
  "Regional office": "border-l-cyan",
  "Project delivery": "border-l-border",
};

interface GlobalFootprintProps {
  locations: FootprintLocation[];
}

export default function GlobalFootprint({ locations }: GlobalFootprintProps) {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  return (
    <div className="section-px bg-bg-muted pt-10 pb-8 sm:pt-14 sm:pb-10 lg:pt-20 lg:pb-12">
      <SectionHeading
        eyebrow="REGIONAL PRESENCE"
        title="Regional reach. Local expertise."
        description="Operating across 15 countries, Shabakkat combines regional scale with local knowledge to deliver consistent engineering excellence while understanding the operational, regulatory, and commercial realities of every market we serve."
      />
      <div className="mt-7 grid grid-cols-1 gap-x-9 gap-y-3.5 lg:grid-cols-[1.5fr_1fr]">
        <div className="order-1">
          <RegionalMap locations={locations} activePin={activeLocation} onPinHover={setActiveLocation} />
        </div>

        <StaggerGrid className="order-3 grid h-full grid-cols-1 gap-3 sm:grid-cols-2 sm:grid-rows-2 lg:order-2">
          {locations.map((loc) => {
            const isActive = activeLocation === loc.name;
            return (
              <StaggerItem key={loc.name}>
                <div
                  onMouseEnter={() => setActiveLocation(loc.name)}
                  onMouseLeave={() => setActiveLocation(null)}
                  onFocus={() => setActiveLocation(loc.name)}
                  onBlur={() => setActiveLocation(null)}
                  tabIndex={0}
                  className={`group flex h-full min-h-[168px] cursor-default flex-col overflow-hidden rounded-xl border border-l-[3px] border-border bg-white transition-all duration-200 ${roleAccent[loc.role]} ${
                    isActive ? "ring-2 ring-cyan/50" : ""
                  }`}
                >
                  <PhotoPlaceholder
                    src={loc.photoSrc}
                    label={`${loc.name} — office photo`}
                    alt={`${loc.name} cityscape`}
                    className="min-h-[120px] flex-1 rounded-none"
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 90vw"
                  />
                  <div className="flex shrink-0 items-baseline justify-between gap-2 px-3.5 py-2.5">
                    <div className="font-heading text-sm text-navy">{loc.name}</div>
                    <div className="whitespace-nowrap text-[11px] text-text-muted">{loc.role}</div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGrid>

        <div className="order-2 flex gap-4 text-[11.5px] text-text-muted lg:order-3 lg:col-start-1">
          {legend.map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              <div className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
