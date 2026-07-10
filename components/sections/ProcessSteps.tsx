import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { processSteps } from "@/data/processSteps";
import { accentBg } from "@/lib/colorMap";

export default function ProcessSteps() {
  return (
    <div className="px-14 py-20">
      <SectionHeading
        eyebrow="OUR PHILOSOPHY"
        title="Empowering our clients through a continuous cycle"
        description="Every engagement moves through the same disciplined cycle — each stage feeding the next, so lessons learned in one project sharpen delivery on the next."
      />
      <div className="relative mt-11">
        <div
          className="absolute top-[26px] z-0 h-0.5"
          style={{
            left: "calc(10% + 26px)",
            right: "calc(10% + 26px)",
            backgroundImage:
              "repeating-linear-gradient(90deg, #DADCDE 0 8px, transparent 8px 16px)",
          }}
        />
        <div className="relative z-10 grid grid-cols-5 gap-4">
          {processSteps.map((step) => (
            <div key={step.number}>
              <div className="flex items-center justify-center">
                <div
                  className={`flex h-[52px] w-[52px] items-center justify-center rounded-full font-heading text-base text-white shadow-[0_0_0_6px_#fff] ${accentBg[step.color]}`}
                >
                  {step.number}
                </div>
              </div>
              <Card className="mt-4 min-h-[150px] p-[18px] text-center">
                <div className="font-heading text-[14.5px] text-navy">{step.title}</div>
                <div className="mt-2 text-[13px] leading-[1.6] text-text-body">{step.description}</div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
