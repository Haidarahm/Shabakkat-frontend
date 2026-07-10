import SectionHeading from "@/components/ui/SectionHeading";

interface SimpleItemGridProps {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
  background?: "muted";
}

export default function SimpleItemGrid({
  id,
  index,
  eyebrow,
  title,
  description,
  items,
  background,
}: SimpleItemGridProps) {
  return (
    <div
      id={id}
      className={`scroll-mt-[160px] px-14 py-[72px] ${background === "muted" ? "bg-bg-muted" : ""}`}
    >
      <SectionHeading eyebrow={`${index} — ${eyebrow}`} title={title} description={description} />
      <div className="mt-7 grid grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item} className="rounded border border-border bg-white p-[22px]">
            <div className="font-heading text-[14.5px]">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
