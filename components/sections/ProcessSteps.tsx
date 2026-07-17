import { motion, type Variants } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { processSteps } from "@/data/processSteps";
import { accentBg } from "@/lib/colorMap";

const stepGrid: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const stepItem: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProcessSteps() {
  return (
    <div className="section-px section-py">
      <SectionHeading
        eyebrow="OUR DELIVERY APPROACH"
        title="From strategy to sustainable operations"
        description="Every engagement follows a structured delivery methodology that integrates advisory, governance, engineering, and operational excellence."
      />
      <div className="relative mt-11">
        <div
          className="absolute top-[26px] z-0 hidden h-0.5 lg:block"
          style={{
            left: "calc(10% + 26px)",
            right: "calc(10% + 26px)",
            backgroundImage:
              "repeating-linear-gradient(90deg, #DADCDE 0 8px, transparent 8px 16px)",
          }}
        />
        <motion.div
          className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
          variants={stepGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {processSteps.map((step) => (
            <motion.div key={step.number} variants={stepItem} className="h-full">
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
