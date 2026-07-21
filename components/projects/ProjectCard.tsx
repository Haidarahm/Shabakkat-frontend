import Link from "next/link";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import Chip from "@/components/ui/Chip";
import type { ProjectCaseStudy } from "@/data/projects";
import { accentText, accentBg } from "@/lib/colorMap";

export default function ProjectCard({ project }: { project: ProjectCaseStudy }) {
  return (
    <div
      id={project.slug}
      className="flex h-full scroll-mt-[132px] flex-col overflow-hidden rounded-xl border border-border bg-white lg:scroll-mt-[160px]"
    >
      <PhotoPlaceholder label={project.photoLabel} src={project.photoSrc} className="h-[180px] shrink-0 rounded-none" />
      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <div className="flex flex-wrap items-center gap-2.5">
          <div
            className={`rounded-full px-2.5 py-[3px] font-heading text-[10px] tracking-[0.05em] ${accentText[project.color]} ${accentBg[project.color]}/10`}
          >
            {project.tag}
          </div>
          <div className="text-xs text-text-muted">
            {project.country} - {project.year}
          </div>
        </div>

        <div className="mt-3 font-heading text-[13px] tracking-[0.03em] text-text-muted">{project.client}</div>
        <div className="mt-1.5 font-heading text-lg text-navy">{project.title}</div>

        <p className="mt-3 text-[13.5px] leading-[1.7] text-text-body">{project.challenge}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.scope.map((item) => (
            <Chip key={item} className="!py-1.5 text-[12px]">
              {item}
            </Chip>
          ))}
        </div>

        {project.scale && (
          <div className="mt-4 border-l-[3px] border-cyan bg-bg-muted px-4 py-2.5 font-heading text-[13px] text-navy">
            {project.scale}
          </div>
        )}

        <p className="mt-4 text-[13.5px] leading-[1.7] text-text-muted">{project.results}</p>

        <Link
          href={project.relatedServiceHref}
          className="mt-auto inline-flex items-center gap-1.5 pt-4 font-heading text-[12.5px] tracking-[0.04em] text-cyan hover:text-navy"
        >
          EXPLORE THIS SERVICE <span>{'->'}</span>
        </Link>
      </div>
    </div>
  );
}
