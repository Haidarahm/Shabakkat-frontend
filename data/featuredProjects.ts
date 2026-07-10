export interface FeaturedProject {
  photoLabel: string;
  title: string;
  description: string;
  href: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    photoLabel: "PHOTO — Iraq network site",
    title: "Zain Iraq — End-to-End Managed Services",
    description:
      "5,000+ sites managed, 15M+ subscribers served through 24/7 NOC, field maintenance, and core network operations.",
    href: "/services#managed-services",
  },
  {
    photoLabel: "PHOTO — Kuwait rollout crew",
    title: "STC, Zain, Ooredoo — Kuwait",
    description:
      "6,000+ total sites supported with 500+ consultants across managed services and resourcing engagements.",
    href: "/services#consultancy-resourcing",
  },
  {
    photoLabel: "PHOTO — stadium benchmark",
    title: "Mecca Mosque Benchmark — Ramadan 2022",
    description: "Radio network benchmark during peak season serving 1.4 million visitors.",
    href: "/services#radio-audit",
  },
];
