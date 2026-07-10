import Button from "@/components/ui/Button";

interface FinalCtaProps {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function FinalCta({
  title,
  description,
  ctaLabel = "CONTACT SHABAKKAT",
  ctaHref = "/contact",
}: FinalCtaProps) {
  return (
    <div className="section-px bg-bg-tint py-14 text-center sm:py-16 lg:py-[90px]">
      <div className="mx-auto max-w-[720px]">
        <h2 className="font-heading text-[24px] font-semibold uppercase text-navy sm:text-[28px] lg:text-[34px]">
          {title}
        </h2>
        <p className="mt-4 mb-7 text-base text-text-body-alt">{description}</p>
        <Button href={ctaHref} size="lg">
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
