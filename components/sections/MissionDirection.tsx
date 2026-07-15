import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";

const directionPoints = [
  { color: "bg-red", text: "Network Expertise on Demand" },
  { color: "bg-cyan", text: "Delivering Special Projects" },
  { color: "bg-red", text: "Managing Operations End-to-End" },
];

const pointList: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const pointItem: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function MissionDirection() {
  const [missionTitleDone, setMissionTitleDone] = useState(false);
  const [directionTitleDone, setDirectionTitleDone] = useState(false);

  return (
    <div className="section-px section-py bg-bg-muted">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="rounded border border-border-tint bg-bg-tint p-6 sm:p-8 lg:p-12">
          <Eyebrow>OUR MISSION</Eyebrow>
          <AnimatedTitle
            text="Enabling a smarter connected world"
            className="mt-[18px] font-heading text-[22px] font-semibold uppercase text-navy sm:text-[26px] lg:text-[30px]"
            onAnimationComplete={() => setMissionTitleDone(true)}
          />
          <AnimatedParagraph
            active={missionTitleDone}
            className="mt-[18px] text-[15.5px] leading-[1.75] text-text-body-alt"
          >
            Shabakkat&apos;s mission is to help clients reach their potential through technology. We remain at the
            forefront of ICT innovation to engineer and implement solutions that deliver measurable, significant,
            and timely business value — partnering with clients to achieve their goals and finding true reward in
            helping them reach market prominence.
          </AnimatedParagraph>
          <div className="mt-6 font-heading text-[15px] tracking-[0.04em] text-red">
            &ldquo;Your Partner For Success&rdquo;
          </div>
        </div>
        <div>
          <Eyebrow>OUR DIRECTION</Eyebrow>
          <AnimatedTitle
            text="People, technology, and process"
            className="mt-4 font-heading text-[24px] font-semibold uppercase leading-[1.15] text-navy sm:text-[28px] lg:text-[34px]"
            onAnimationComplete={() => setDirectionTitleDone(true)}
          />
          <AnimatedParagraph active={directionTitleDone} className="mt-4 text-[15.5px] leading-[1.7] text-text-body">
            Capitalizing on 800+ dedicated people, Shabakkat operates across three models — sourcing the right
            expertise from Asia, the US, Europe, and MEA to pair skill with place.
          </AnimatedParagraph>
          <motion.div
            className="mt-5 flex flex-col gap-3"
            variants={pointList}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            {directionPoints.map((point) => (
              <motion.div
                key={point.text}
                variants={pointItem}
                className="origin-left flex items-center gap-3.5 rounded border border-border bg-white px-5 py-4"
              >
                <div className={`h-2 w-2 flex-shrink-0 rounded-full ${point.color}`} />
                <div className="font-heading text-[14.5px]">{point.text}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
