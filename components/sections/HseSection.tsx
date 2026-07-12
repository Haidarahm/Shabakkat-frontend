import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";

const items = [
  { color: "border-red", text: "First Aid / CPR Training" },
  { color: "border-cyan", text: "Working at Height Safety" },
  { color: "border-red", text: "Electrical Safety Training" },
];

const chipRow: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const chipItem: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function HseSection() {
  const [titleDone, setTitleDone] = useState(false);

  return (
    <div className="section-px section-py grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
      <PhotoPlaceholder
        label="PHOTO — engineers in field, safety gear"
        src="/images/hse/engineers-field-safety.jpg"
        className="h-[220px] rounded sm:h-[280px] lg:h-[340px]"
      />
      <div>
        <SectionHeading
          eyebrow="HSE COMMITMENT"
          title="Health, safety & environment"
          onTitleComplete={() => setTitleDone(true)}
        />
        <AnimatedParagraph active={titleDone} className="mt-4 text-[15.5px] leading-[1.75] text-text-body">
          Shabakkat is committed to educating, training, and cultivating employee adherence to HSE practices —
          maintaining a healthy and safe working environment for all clients, employees, and suppliers.
        </AnimatedParagraph>
        <motion.div
          className="mt-5 flex flex-wrap gap-3"
          variants={chipRow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          {items.map((item) => (
            <motion.div
              key={item.text}
              variants={chipItem}
              className={`origin-left border-l-[3px] bg-bg-muted px-4 py-2.5 font-heading text-[13.5px] ${item.color}`}
            >
              {item.text}
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-4 text-[13px] text-text-muted">Certifications issued via TUTIS.</p>
      </div>
    </div>
  );
}
