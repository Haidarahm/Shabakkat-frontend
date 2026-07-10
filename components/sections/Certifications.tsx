import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <div className="section-px section-py bg-bg-muted">
      <SectionHeading eyebrow="CERTIFICATIONS & STANDARDS" title="Compliance you can rely on" />
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {certifications.map((cert) => (
          <Card key={cert.code} className="bg-white p-5 text-center">
            <div className="font-heading text-[15px] text-navy">{cert.code}</div>
            <div className="mt-1.5 text-[11.5px] text-text-muted">{cert.label}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
