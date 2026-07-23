import { useState } from "react";
import { motion } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";

const paragraphs = [
  "As I retrace in my mind the path that Shabakkat has followed since its inception, I have feelings of pride and gratitude. Pride is for the phenomenal growth that this company has achieved in a relatively short time, from executing our first local project to the track record which we are now honored to share with our esteemed clients across the Middle East and Africa. Gratitude is for the trust and loyalty of our clients who consider Shabakkat to be their provider of choice of telecommunications and technology services and solutions. I am also grateful for the commitment, dedication, and resilience of our team of more than 800 professionals who remain true to our values in demanding situations and difficult environments.",
  "Today Shabakkat serves leading organizations in our region: Fixed and wireless operators, governments, and large enterprises. We embrace the fast pace of innovation in our industry and our people strive to always provide cutting edge technology services to our clients: In addition to deploying and managing 2G and 3G services, Shabakkat is now preparing its resources to be ready for the deployment of 4th generation mobile networks for its telecommunications clients. The company also provides, through its sister company Advaltis, cloud computing services to enterprises and developers.",
  "What differentiates us is our steadfastness in responding to our clients' needs, our flexibility in adapting our offerings to their challenges, and our skill in project management and quality assurance. Shabakkat will always be a true partner of your business and make your challenge its own.",
];

export default function ChairmanMessage() {
  const [titleDone, setTitleDone] = useState(false);

  return (
    <div className="section-px section-py bg-bg-muted">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <PhotoPlaceholder
            label="PHOTO — Shabakkat leadership & team"
            src="/images/company/office-team.jpg"
            alt="Shabakkat corporate team"
            className="h-[280px] rounded-xl sm:h-[360px] lg:h-[480px]"
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
        </motion.div>

        <div>
          <Eyebrow>THE CHAIRMAN&apos;S MESSAGE</Eyebrow>
          <AnimatedTitle
            text="Abdulaziz Behbehani"
            className="mt-4 font-heading text-[24px] font-semibold uppercase leading-[1.15] text-navy sm:text-[28px] lg:text-[34px]"
            onAnimationComplete={() => setTitleDone(true)}
          />
          <AnimatedParagraph
            active={titleDone}
            className="mt-2 font-heading text-[12px] tracking-[0.08em] text-red"
          >
            CHAIRMAN, SHABAKKAT
          </AnimatedParagraph>

          <div className="mt-6 flex flex-col gap-4">
            {paragraphs.map((paragraph, index) => (
              <AnimatedParagraph
                key={paragraph.slice(0, 40)}
                active={titleDone}
                delay={0.08 + index * 0.1}
                className="text-[15.5px] leading-[1.75] text-text-body"
              >
                {paragraph}
              </AnimatedParagraph>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
