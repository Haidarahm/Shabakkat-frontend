import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import type { ProjectCaseStudy } from "@/data/projects";
import { accentText, accentBg } from "@/lib/colorMap";

const cardContent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
};

const textItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const scopeList: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const scopeItem: Variants = {
  hidden: { opacity: 0, x: -14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function ProjectCard({ project }: { project: ProjectCaseStudy }) {
  return (
    <div
      id={project.slug}
      className="flex h-full scroll-mt-[132px] flex-col overflow-hidden rounded-xl border border-border bg-white lg:scroll-mt-[160px]"
    >
      <PhotoPlaceholder label={project.photoLabel} src={project.photoSrc} className="h-[180px] shrink-0 rounded-none" />
      <motion.div
        className="flex flex-1 flex-col p-6 lg:p-7"
        variants={cardContent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div variants={textItem} className="flex flex-wrap items-center gap-2.5">
          <div
            className={`rounded-full px-2.5 py-[3px] font-heading text-[10px] tracking-[0.05em] ${accentText[project.color]} ${accentBg[project.color]}/10`}
          >
            {project.tag}
          </div>
          <div className="text-xs text-text-muted">
            {project.country} - {project.year}
          </div>
        </motion.div>

        <motion.div
          variants={textItem}
          className="mt-3 font-heading text-[13px] tracking-[0.03em] text-text-muted"
        >
          {project.client}
        </motion.div>

        <motion.div variants={textItem} className="mt-1.5 font-heading text-lg text-navy">
          {project.title}
        </motion.div>

        <motion.p variants={textItem} className="mt-3 text-[13.5px] leading-[1.7] text-text-body">
          {project.challenge}
        </motion.p>

        <motion.div
          variants={textItem}
          className="mb-2 mt-4 font-heading text-[11px] uppercase tracking-[0.08em] text-text-muted"
        >
          Scope
        </motion.div>

        <motion.ul className="flex flex-col gap-2" variants={scopeList}>
          {project.scope.map((item) => (
            <motion.li
              key={item}
              variants={scopeItem}
              className="flex items-start gap-2.5 text-[13.5px] leading-[1.55] text-text-body"
            >
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan" />
              {item}
            </motion.li>
          ))}
        </motion.ul>

        {project.scale && (
          <motion.div
            variants={textItem}
            className="mt-4 border-l-[3px] border-cyan bg-bg-muted px-4 py-2.5 font-heading text-[13px] text-navy"
          >
            {project.scale}
          </motion.div>
        )}

        <motion.p variants={textItem} className="mt-4 text-[13.5px] leading-[1.7] text-text-muted">
          {project.results}
        </motion.p>

        <motion.div variants={textItem} className="mt-auto pt-4">
          <Link
            href={project.relatedServiceHref}
            className="inline-flex items-center gap-1.5 font-heading text-[12.5px] tracking-[0.04em] text-cyan hover:text-navy"
          >
            EXPLORE THIS SERVICE <span>{'->'}</span>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
