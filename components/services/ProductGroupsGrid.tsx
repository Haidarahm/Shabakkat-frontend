import SectionHeading from "@/components/ui/SectionHeading";
import type { ProductGroup } from "@/data/servicesDetail";

interface ProductGroupsGridProps {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  groups: ProductGroup[];
  background?: "muted";
}

export default function ProductGroupsGrid({
  id,
  index,
  eyebrow,
  title,
  description,
  groups,
  background,
}: ProductGroupsGridProps) {
  return (
    <div
      id={id}
      className={`section-px scroll-mt-[160px] py-10 sm:py-12 lg:py-[72px] ${background === "muted" ? "bg-bg-muted" : ""}`}
    >
      <SectionHeading eyebrow={`${index} — ${eyebrow}`} title={title} description={description} />
      <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {groups.map((group) => (
          <div key={group.title} className="rounded-xl border border-border bg-white p-6">
            <div className="font-heading text-[15px] text-navy">{group.title}</div>
            <ul className="mt-4 flex flex-col gap-2.5">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13.5px] leading-[1.55] text-text-body">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
