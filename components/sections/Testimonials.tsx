import { testimonials, awards } from "@/data/testimonials";
import { accentText } from "@/lib/colorMap";

export default function Testimonials() {
  return (
    <div className="bg-bg-muted px-14 py-20">
      <div className="flex items-center gap-2.5 font-heading text-[13px] tracking-[0.14em] text-cyan">
        <div className="h-[3px] w-[26px] bg-red" />
        WHAT OUR CLIENTS SAY
      </div>
      <h2 className="mb-9 mt-4 font-heading text-[34px] font-semibold uppercase text-navy">Client testimonials</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {testimonials.map((t) => (
          <div key={t.author} className="rounded border border-border bg-white p-7">
            <div className="text-[14.5px] leading-[1.7] text-text-body-alt">&ldquo;{t.quote}&rdquo;</div>
            <div className={`mt-[18px] font-heading text-[13.5px] ${accentText[t.color]}`}>
              — {t.author}, {t.role}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3.5">
        {awards.map((award) => (
          <div
            key={award}
            className="rounded-full border border-border bg-white px-4 py-2 text-[12.5px] text-text-body-alt"
          >
            {award}
          </div>
        ))}
      </div>
    </div>
  );
}
