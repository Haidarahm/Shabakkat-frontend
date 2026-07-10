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
    <div className="bg-bg-tint px-14 py-[90px] text-center">
      <div className="mx-auto max-w-[720px]">
        <h2 className="font-heading text-[34px] font-semibold uppercase text-navy">{title}</h2>
        <p className="mt-4 mb-7 text-base text-text-body-alt">{description}</p>
        <Button href={ctaHref} size="lg">
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
