import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerGrid from "@/components/ui/StaggerGrid";
import StaggerItem from "@/components/ui/StaggerItem";
import type { ServiceCategory, ServiceDetail } from "@/data/servicesDetail";

interface ServiceCategoryGridProps {
  categories: ServiceCategory[];
  services: ServiceDetail[];
}

export default function ServiceCategoryGrid({ categories, services }: ServiceCategoryGridProps) {
  return (
    <div className="section-px section-py bg-bg-muted">
      <SectionHeading eyebrow="WHAT WE DO" title="Four core capabilities" />
      <StaggerGrid className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => {
          const count = services.filter((s) => s.category === category.id).length;
          return (
            <StaggerItem key={category.id}>
              <Link
                href={`/services/${category.id}`}
                className="group block h-full rounded-xl border border-border bg-white p-7 transition-[box-shadow,transform] duration-200 hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(20,24,28,0.12)]"
              >
                <div className="font-heading text-xs tracking-[0.05em] text-cyan">{category.index}</div>
                <div className="mt-2.5 font-heading text-lg text-navy">{category.title}</div>
                <p className="mt-2.5 text-[13.5px] leading-[1.65] text-text-muted">{category.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[12px] text-text-muted">
                    {count} service{count === 1 ? "" : "s"}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-heading text-[12.5px] tracking-[0.04em] text-cyan group-hover:text-navy">
                    VIEW SERVICES{" "}
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </StaggerItem>
          );
        })}
      </StaggerGrid>
    </div>
  );
}
