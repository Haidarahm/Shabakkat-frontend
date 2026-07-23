import { useMemo, useState } from "react";
import type { GetStaticProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import ApplicationForm from "@/components/careers/ApplicationForm";
import { openings as staticOpenings, type Opening } from "@/data/openings";
import { fetchOpenings, fromBackend } from "@/lib/backend";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import AnimatedParagraph from "@/components/ui/AnimatedParagraph";

interface ApplyProps {
  openings: Opening[];
}

export default function CareersApply({ openings }: ApplyProps) {
  const router = useRouter();
  const [heroTitleDone, setHeroTitleDone] = useState(false);

  const opening = useMemo(() => {
    const raw = router.query.opening;
    const id = typeof raw === "string" ? Number(raw) : NaN;
    if (!Number.isFinite(id)) return null;
    return openings.find((o) => o.id === id) ?? null;
  }, [openings, router.query.opening]);

  const isGeneral = router.isReady && !router.query.opening;
  const unknownOpening = router.isReady && Boolean(router.query.opening) && !opening;

  return (
    <Layout
      title={opening ? `Apply — ${opening.title}` : "Apply"}
      description="Submit your application to join the Shabakkat team."
    >
      <Hero
        photoLabel="PHOTO — Shabakkat team collaboration, full-bleed"
        heightClassName="h-[240px] sm:h-[270px] lg:h-[300px]"
        align="bottom"
      >
        <div className="mb-4 h-[3px] w-[60px] bg-red" />
        <AnimatedTitle
          as="h1"
          text={opening ? "Apply for this role" : "Submit your CV"}
          className="font-heading text-[26px] font-semibold uppercase text-white sm:text-[32px] lg:text-[38px]"
          onAnimationComplete={() => setHeroTitleDone(true)}
        />
        <AnimatedParagraph active={heroTitleDone} className="mt-2.5 text-sm text-white/85 lg:text-[15.5px]">
          Share your details and CV — we&apos;ll review every application carefully.
        </AnimatedParagraph>
      </Hero>

      <div className="section-px section-py max-w-[720px]">
        <Link
          href="/careers"
          className="font-heading text-xs uppercase tracking-[0.05em] text-cyan transition-colors hover:text-red"
        >
          ← Back to careers
        </Link>

        {unknownOpening ? (
          <div className="mt-8">
            <SectionHeading
              eyebrow="APPLICATION"
              title="Opening not found"
              description="This role may no longer be available. Browse current opportunities or submit a general CV."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/careers"
                className="inline-block rounded-md border-[1.5px] border-navy px-[30px] py-[14px] font-heading text-sm tracking-[0.05em] text-navy transition-colors hover:border-cyan hover:text-cyan"
              >
                VIEW OPENINGS
              </Link>
              <Link
                href="/careers/apply"
                className="inline-block rounded-md bg-cyan px-[30px] py-[14px] font-heading text-sm tracking-[0.05em] text-white transition-colors hover:bg-red"
              >
                SUBMIT GENERAL CV
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-8">
            <SectionHeading
              eyebrow="APPLICATION"
              title={opening ? opening.title : isGeneral || !router.isReady ? "General application" : "Loading…"}
              description={
                opening
                  ? "Complete the form below to apply for this position."
                  : "Don't see a perfect match? Send us your CV and we'll keep you in mind for future roles."
              }
            />
            {(opening || isGeneral || !router.isReady) && (
              <ApplicationForm opening={opening} />
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<ApplyProps> = async () => ({
  props: { openings: await fromBackend(fetchOpenings, staticOpenings) },
  revalidate: 60,
});
