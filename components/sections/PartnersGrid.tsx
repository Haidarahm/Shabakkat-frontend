import SectionHeading from "@/components/ui/SectionHeading";
import LogoLoop, { type LogoItem } from "@/components/LogoLoop";
import type { Partner } from "@/data/partners";

const toLogo = (partner: Partner): LogoItem => ({
  src: partner.logoSrc,
  alt: partner.name,
  title: partner.name,
});

interface PartnersGridProps {
  partners: Partner[];
}

export default function PartnersGrid({ partners }: PartnersGridProps) {
  const midpoint = Math.ceil(partners.length / 2);
  const topRow = partners.slice(0, midpoint).map(toLogo);
  const bottomRow = partners.slice(midpoint).map(toLogo);

  return (
    <div className="section-px section-py">
      <SectionHeading
        eyebrow="STRATEGIC PARTNERS"
        title="Strong partnerships. Greater outcomes."
        description="We collaborate with leading technology providers, equipment manufacturers, and strategic partners to deliver integrated solutions that accelerate execution, reduce complexity, and maximize long-term value for our clients."
      />
      <div className="mt-9 flex flex-col gap-5">
        <LogoLoop
          logos={topRow}
          direction="left"
          speed={60}
          logoHeight={40}
          gap={80}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Strategic partners"
        />
        <LogoLoop
          logos={bottomRow}
          direction="right"
          speed={60}
          logoHeight={40}
          gap={80}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Strategic partners"
        />
      </div>
    </div>
  );
}
