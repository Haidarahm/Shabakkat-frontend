import CategorySwitcher from "@/components/services/CategorySwitcher";
import ServiceDetailBlock from "@/components/services/ServiceDetailBlock";
import {
  serviceCategories,
  servicesDetail,
  type ServiceCategory,
} from "@/data/servicesDetail";

export const SERVICES_CTA = {
  title: "Let's deliver what's next",
  description:
    "Whether you're expanding telecommunications infrastructure, establishing enterprise project governance, modernizing digital infrastructure, or defining your next technology strategy, Shabakkat provides the engineering expertise, project leadership, and strategic advisory to deliver with confidence.",
  ctaLabel: "CONTACT OUR TEAM",
} as const;

interface ServicesPageSectionProps {
  /** When set, only that category is shown. When omitted, all categories render on one page. */
  categoryId?: string;
  /** How category switcher links behave. */
  switcherMode?: "route" | "hash";
}

function CategoryBlocks({
  category,
  startIndex,
  showIntro,
}: {
  category: ServiceCategory;
  startIndex: number;
  /** Show pillar intro once — skip when hero already covered it, or when the only detail block carries the same copy. */
  showIntro: boolean;
}) {
  const services = servicesDetail.filter((s) => s.category === category.id);

  return (
    <section id={category.id} className="scroll-mt-[140px] lg:scroll-mt-[160px]">
      {showIntro && (
        <div className="section-px border-b border-border bg-bg-muted py-8 sm:py-10">
          <div className="font-heading text-xs tracking-[0.05em] text-cyan">{category.index}</div>
          <h2 className="mt-2 font-heading text-[22px] font-semibold uppercase text-navy sm:text-[26px] lg:text-[30px]">
            {category.title}
          </h2>
          <p className="mt-3 max-w-[720px] text-[15px] leading-[1.7] text-text-body">{category.description}</p>
        </div>
      )}

      {!showIntro && (
        <div className="section-px border-b border-border py-5">
          <h2 className="font-heading text-[18px] font-semibold uppercase tracking-[0.04em] text-navy sm:text-[20px]">
            <span className="text-cyan">{category.index}</span>
            <span className="mx-2 text-border">—</span>
            {category.title}
          </h2>
        </div>
      )}

      <div className="flex flex-col divide-y divide-border">
        {services.map((service, i) => (
          <ServiceDetailBlock
            key={service.id}
            service={service}
            background={(startIndex + i) % 2 === 1 ? "muted" : undefined}
          />
        ))}
      </div>
    </section>
  );
}

/**
 * Shared services body used by `/services` (all categories) and
 * `/services/[category]` (one category). Same data + same block logic.
 */
export default function ServicesPageSection({
  categoryId,
  switcherMode = categoryId ? "route" : "hash",
}: ServicesPageSectionProps) {
  const categories = categoryId
    ? serviceCategories.filter((c) => c.id === categoryId)
    : serviceCategories;

  const activeId = categoryId ?? serviceCategories[0]?.id ?? "";
  const isFullPage = !categoryId;

  let blockOffset = 0;

  return (
    <>
      <CategorySwitcher activeId={activeId} mode={switcherMode} />
      {categories.map((category) => {
        const services = servicesDetail.filter((s) => s.category === category.id);
        const startIndex = blockOffset;
        blockOffset += services.length;

        // Avoid duplicating doc copy:
        // - On /services, Engineering intro is already in the hero.
        // - PMO & Advisory each have one detail block that carries the pillar paragraph.
        // - Telecom products always show an intro above its product cards.
        const showIntro =
          category.id === "engineering-services"
            ? !isFullPage
            : category.id === "telecom-products-infrastructure"
              ? true
              : services.length > 1;

        return (
          <CategoryBlocks
            key={category.id}
            category={category}
            startIndex={startIndex}
            showIntro={showIntro}
          />
        );
      })}
    </>
  );
}
