import { useState } from "react";
import Image from "next/image";
import { footprintLocations, mapViewBox, type FootprintLocation } from "@/data/offices";
import { accentBg, accentFill, type AccentColor } from "@/lib/colorMap";

const roleColor: Record<FootprintLocation["role"], AccentColor> = {
  Headquarters: "red",
  "Regional office": "cyan",
  "Project delivery": "navy",
};

interface RegionalMapProps {
  /** Controlled active pin name — pass this to sync hover state with an external list (e.g. office cards). */
  activePin?: string | null;
  onPinHover?: (name: string | null) => void;
}

export default function RegionalMap({ activePin: controlledActivePin, onPinHover }: RegionalMapProps = {}) {
  const [internalActivePin, setInternalActivePin] = useState<string | null>(null);
  const isControlled = controlledActivePin !== undefined;
  const activePin = isControlled ? controlledActivePin : internalActivePin;

  const setActivePin = (name: string | null) => {
    if (!isControlled) setInternalActivePin(name);
    onPinHover?.(name);
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl border border-border bg-white"
      style={{ aspectRatio: `${mapViewBox.width} / ${mapViewBox.height}` }}
    >
      <Image
        src="/map.svg"
        alt="Shabakkat regional footprint map — Middle East & Africa"
        fill
        sizes="(min-width: 1024px) 60vw, 100vw"
        style={{ objectFit: "contain" }}
        draggable={false}
      />

      {footprintLocations.map((loc) => {
        const left = (loc.mapPoint.cx / mapViewBox.width) * 100;
        const top = (loc.mapPoint.cy / mapViewBox.height) * 100;
        const color = roleColor[loc.role];
        const isActive = activePin === loc.name;

        return (
          <button
            key={loc.name}
            type="button"
            onMouseEnter={() => setActivePin(loc.name)}
            onMouseLeave={() => setActivePin(null)}
            onFocus={() => setActivePin(loc.name)}
            onBlur={() => setActivePin(null)}
            aria-label={`${loc.name} — ${loc.role}`}
            className={`group absolute -translate-x-1/2 -translate-y-full cursor-pointer ${
              isActive ? "z-30" : "z-10"
            }`}
            style={{ left: `${left}%`, top: `${top}%` }}
          >
            {/* Tooltip — rendered above every pin (including neighboring ones) while active */}
            <span
              className={`pointer-events-none absolute bottom-full left-1/2 z-40 mb-2.5 -translate-x-1/2 whitespace-nowrap rounded-md px-2.5 py-1 font-heading text-[11px] tracking-[0.03em] text-white shadow-lg transition-all duration-200 ${accentBg[color]} ${
                isActive ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
              }`}
            >
              {loc.name}
              <span className="mx-1.5 opacity-70">·</span>
              {loc.role}
            </span>

            {/* Pin marker */}
            <span
              className={`relative block transition-transform duration-200 ease-out ${
                isActive ? "-translate-y-2 scale-110" : "group-hover:-translate-y-1"
              }`}
            >
              <svg width="26" height="34" viewBox="0 0 26 34" fill="none" className="drop-shadow-[0_3px_4px_rgba(16,42,67,0.35)]">
                <path
                  d="M13 0C5.82 0 0 5.82 0 13c0 9.75 13 21 13 21s13-11.25 13-21C26 5.82 20.18 0 13 0Z"
                  className={`transition-colors duration-200 ${isActive ? accentFill[color] : "fill-navy"}`}
                />
                <circle cx="13" cy="13" r="5" className="fill-white" />
              </svg>
              <span
                className={`absolute left-1/2 top-[13px] -z-10 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-200 ${accentBg[color]} ${
                  isActive ? "animate-ping opacity-40" : "opacity-0"
                }`}
              />
            </span>
          </button>
        );
      })}
    </div>
  );
}
