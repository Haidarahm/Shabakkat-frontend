import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import StaggerGrid from "@/components/ui/StaggerGrid";
import StaggerItem from "@/components/ui/StaggerItem";
import type { FeaturedProject } from "@/data/featuredProjects";

interface FeaturedProjectsProps {
  featuredProjects: FeaturedProject[];
}

export default function FeaturedProjects({ featuredProjects }: FeaturedProjectsProps) {
  return (
    <div className="section-px section-py bg-bg-muted">
      <SectionHeading eyebrow="FEATURED PROJECTS" title="Proof at scale" />
      <StaggerGrid className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <StaggerItem key={project.title}>
            <Link
              href={project.href}
              className="group block h-full overflow-hidden rounded-xl border border-border bg-white transition-[box-shadow,transform] duration-200 hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(20,24,28,0.12)]"
            >
              <PhotoPlaceholder
                label={project.photoLabel}
                src={project.photoSrc}
                className="h-[170px] rounded-none"
              />
              <div className="p-[22px]">
                <div className="font-heading text-base">{project.title}</div>
                <div className="mt-2 text-sm text-text-muted">{project.description}</div>
                <div className="mt-4 flex items-center gap-1.5 font-heading text-[12.5px] tracking-[0.04em] text-cyan group-hover:text-navy">
                  LEARN MORE{" "}
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerGrid>
      <div className="mt-8 text-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 font-heading text-[12.5px] tracking-[0.04em] text-navy hover:text-cyan"
        >
          VIEW ALL PROJECTS <span>→</span>
        </Link>
      </div>
    </div>
  );
}
