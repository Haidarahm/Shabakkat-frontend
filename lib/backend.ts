import type { ProjectCaseStudy } from "@/data/projects";
import type { ServiceCategory, ServiceDetail } from "@/data/servicesDetail";
import type { Industry } from "@/data/industries";
import type { Partner } from "@/data/partners";
import type { Certification } from "@/data/certifications";
import type { Opening } from "@/data/openings";
import type { Stat } from "@/data/stats";
import type { Testimonial, Award } from "@/data/testimonials";
import type { FeaturedProject } from "@/data/featuredProjects";
import type { FaqCategory, FaqItem } from "@/data/faq";
import type { FootprintLocation, OfficeLocation } from "@/data/offices";

/**
 * Server-side Laravel API client.
 * Used only from getStaticProps / API routes — never from the browser
 * (keeps CSP connect-src 'self' intact).
 */
const BASE_URL = process.env.BACKEND_API_URL ?? "https://back.shabakkat.com/api";

async function getJson<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { Accept: "application/json" },
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) {
    throw new Error(`Backend ${res.status} for ${path}`);
  }
  return (await res.json()) as T;
}

/** Prefer backend data; fall back to the provided static value if the API is unreachable. */
export async function fromBackend<T>(loader: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await loader();
  } catch {
    return fallback;
  }
}

export function fetchProjects(): Promise<ProjectCaseStudy[]> {
  return getJson("/projects");
}

export function fetchFeaturedProjects(): Promise<FeaturedProject[]> {
  return getJson("/featured-projects");
}

export function fetchServiceCategories(): Promise<ServiceCategory[]> {
  return getJson("/service-categories");
}

export function fetchServices(): Promise<ServiceDetail[]> {
  return getJson("/services");
}

export function fetchIndustries(): Promise<Industry[]> {
  return getJson("/industries");
}

export function fetchPartners(): Promise<Partner[]> {
  return getJson("/partners");
}

export function fetchCertifications(): Promise<Certification[]> {
  return getJson("/certifications");
}

export function fetchStats(): Promise<Stat[]> {
  return getJson("/stats");
}

export function fetchTestimonials(): Promise<Testimonial[]> {
  return getJson("/testimonials");
}

export function fetchAwards(): Promise<Award[]> {
  return getJson("/awards");
}

export function fetchOpenings(): Promise<Opening[]> {
  return getJson("/openings");
}

export interface FaqPayload {
  highlights: FaqItem[];
  categories: FaqCategory[];
}

export function fetchFaqs(): Promise<FaqPayload> {
  return getJson("/faqs");
}

export interface BackendOffice {
  name: string;
  role: FootprintLocation["role"] | null;
  color: "red" | "cyan" | null;
  address: string | null;
  phone: string | null;
  photoSrc: string | null;
  isHeadquarters: boolean;
  mapPoint: { cx: number; cy: number } | null;
}

export function fetchOffices(): Promise<BackendOffice[]> {
  return getJson("/offices");
}

export function officesToFootprint(offices: BackendOffice[]): FootprintLocation[] {
  return offices
    .filter((o) => o.role && o.photoSrc && o.mapPoint)
    .map((o) => ({
      name: o.name.replace(/^Shabakkat —\s*/i, "").replace(/\s*\(Headquarters\)$/i, "").trim() || o.name,
      role: o.role as FootprintLocation["role"],
      photoSrc: o.photoSrc as string,
      mapPoint: o.mapPoint as { cx: number; cy: number },
    }));
}

export function officesToHeadOffice(offices: BackendOffice[]): OfficeLocation | null {
  const hq = offices.find((o) => o.isHeadquarters) ?? offices[0];
  if (!hq) return null;
  return {
    name: hq.name,
    color: (hq.color as "red" | "cyan") ?? "red",
    address: hq.address ?? "",
    ...(hq.phone ? { phone: hq.phone } : {}),
  };
}

export function officesToRegional(offices: BackendOffice[]): OfficeLocation[] {
  return offices
    .filter((o) => !o.isHeadquarters)
    .map((o) => ({
      name: o.name,
      color: (o.color as "red" | "cyan") ?? "cyan",
      address: o.address ?? "",
      ...(o.phone ? { phone: o.phone } : {}),
    }));
}

export { BASE_URL as BACKEND_API_URL };
