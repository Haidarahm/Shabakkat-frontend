import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder";
import { featuredProjects } from "@/data/featuredProjects";

export default function FeaturedProjects() {
  return (
    <div className="bg-bg-muted px-14 py-20">
      <SectionHeading eyebrow="FEATURED PROJECTS" title="Proof at scale" />
      <div className="mt-8 grid grid-cols-3 gap-5">
        {featuredProjects.map((project) => (
          <Link
            key={project.title}
            href={project.href}
            className="group block overflow-hidden rounded border border-border bg-white transition-[box-shadow,transform] duration-200 hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(20,24,28,0.12)]"
          >
            <PhotoPlaceholder label={project.photoLabel} className="h-[170px] rounded-none" />
            <div className="p-[22px]">
              <div className="font-heading text-base">{project.title}</div>
              <div className="mt-2 text-sm text-text-muted">{project.description}</div>
              <div className="mt-4 flex items-center gap-1.5 font-heading text-[12.5px] tracking-[0.04em] text-cyan group-hover:text-navy">
                LEARN MORE{" "}
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
