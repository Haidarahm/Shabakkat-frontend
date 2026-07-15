import type { ReactNode } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceDetailBlock from "@/components/services/ServiceDetailBlock";
import type { ServiceCategory, ServiceDetail } from "@/data/servicesDetail";

interface ServiceCategorySectionProps {
  category: ServiceCategory;
  services: ServiceDetail[];
  background?: "muted";
  children?: ReactNode;
}

export default function ServiceCategorySection({
  category,
  services,
  background,
  children,
}: ServiceCategorySectionProps) {
  return (
    <div
      id={category.id}
      className={`section-px scroll-mt-[132px] py-10 sm:py-12 lg:scroll-mt-[160px] lg:py-[72px] ${
        background === "muted" ? "bg-bg-muted" : ""
      }`}
    >
      <SectionHeading
        eyebrow={`CATEGORY ${category.index}`}
        title={category.title}
        description={category.description}
      />
      <div className="mt-8 flex flex-col divide-y divide-border">
        {services.map((service) => (
          <ServiceDetailBlock key={service.id} service={service} />
        ))}
      </div>
      {children}
    </div>
  );
}
