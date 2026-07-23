import type { Opening } from "@/data/openings";
import Link from "next/link";

export default function OpeningCard({ opening }: { opening: Opening }) {
  const href =
    opening.id != null ? `/careers/apply?opening=${opening.id}` : "/careers/apply";

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="font-heading text-[15px] text-navy">{opening.title}</div>
        <div className="mt-1.5 text-[13px] text-text-muted">
          {opening.department} · {opening.location} · {opening.type}
        </div>
      </div>
      <Link
        href={href}
        className="inline-flex shrink-0 items-center rounded-md border border-cyan px-5 py-2.5 font-heading text-[12.5px] tracking-[0.03em] text-cyan transition-colors hover:bg-cyan hover:text-white"
      >
        APPLY NOW
      </Link>
    </div>
  );
}
