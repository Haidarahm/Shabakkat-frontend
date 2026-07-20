import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import StaggerGrid from "@/components/ui/StaggerGrid";
import StaggerItem from "@/components/ui/StaggerItem";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <div className="section-px section-py">
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div className="lg:sticky lg:top-[100px]">
          <SectionHeading
            className="max-w-none"
            eyebrow="CERTIFICATIONS"
            title="Built on international standards"
            description="Our management systems are aligned with internationally recognized standards for quality, information security, health, safety, and environmental management, ensuring every engagement is delivered with consistency, compliance, and excellence."
          />
        </div>

        <StaggerGrid className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {certifications.map((cert, index) => {
            const isLast = index === certifications.length - 1;
            return (
              <StaggerItem key={cert.code} className={isLast ? "sm:col-span-2" : undefined}>
                <Card
                  className={`flex h-full items-center gap-4 border-border bg-bg-muted p-4 sm:p-5 ${
                    isLast
                      ? "sm:flex-row sm:justify-center sm:gap-5 sm:text-left"
                      : "sm:flex-col sm:items-center sm:text-center"
                  }`}
                >
                  <div className="relative h-[64px] w-[64px] shrink-0 sm:h-[72px] sm:w-[72px]">
                    <Image src={cert.logoSrc} alt={`${cert.code} certificate mark`} fill sizes="72px" />
                  </div>
                  <div>
                    <div className="font-heading text-[15px] text-navy">{cert.code}</div>
                    <div className="mt-1 text-[11.5px] text-text-muted">{cert.label}</div>
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </div>
    </div>
  );
}
