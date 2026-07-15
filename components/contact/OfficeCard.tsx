import type { OfficeLocation } from "@/data/offices";
import { accentText } from "@/lib/colorMap";

export default function OfficeCard({ office }: { office: OfficeLocation }) {
  return (
    <div className="rounded border border-border bg-white p-[26px]">
      <div className={`font-heading text-base ${accentText[office.color]}`}>{office.name}</div>
      <p className="mt-2.5 text-[13.5px] leading-[1.7] text-text-body">{office.address}</p>
      {office.phone && <div className="mt-2.5 text-[13px] text-text-muted">{office.phone}</div>}
    </div>
  );
}
