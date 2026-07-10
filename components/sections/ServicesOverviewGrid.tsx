import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import Button from "@/components/ui/Button";
import { servicesOverview } from "@/data/servicesOverview";

export default function ServicesOverviewGrid() {
  return (
    <div className="section-px section-py bg-bg-muted">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading eyebrow="WHAT WE DO" title="Full-spectrum services" />
        <Button href="/services" variant="outline">
          VIEW ALL SERVICES
        </Button>
      </div>
      <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {servicesOverview.map((service) => (
          <Link
            key={service.title}
            href={service.href}
            className="group block rounded border border-border bg-white p-[22px] transition-[box-shadow,transform] duration-200 hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(20,24,28,0.12)]"
          >
            <PhotoPlaceholder label={service.photoLabel} className="mb-3.5 h-[90px] rounded-[3px] text-[10px]" />
            <div className="font-heading text-[14.5px] text-navy">{service.title}</div>
            <div className="mt-2.5 flex items-center gap-1.5 font-heading text-[12.5px] tracking-[0.04em] text-cyan group-hover:text-navy">
              LEARN MORE{" "}
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
