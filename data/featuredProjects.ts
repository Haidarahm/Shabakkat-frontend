export interface FeaturedProject {
  photoLabel: string;
  photoSrc: string;
  title: string;
  description: string;
  href: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    photoLabel: "PHOTO — Iraq network site",
    photoSrc: "/images/projects/iraq-network-site.jpg",
    title: "Zain Iraq — End-to-End Managed Services",
    description:
      "5,000+ sites managed, 15M+ subscribers served through 24/7 NOC, field maintenance, and core network operations.",
    href: "/services#managed-services",
  },
  {
    photoLabel: "PHOTO — Kuwait rollout crew",
    photoSrc: "/images/projects/kuwait-rollout-crew.jpg",
    title: "STC, Zain, Ooredoo — Kuwait",
    description:
      "6,000+ total sites supported with 500+ consultants across managed services and resourcing engagements.",
    href: "/services#consultancy-resourcing",
  },
  {
    photoLabel: "PHOTO — stadium benchmark",
    photoSrc: "/images/projects/stadium-benchmark.jpg",
    title: "Mecca Mosque Benchmark — Ramadan 2022",
    description: "Radio network benchmark during peak season serving 1.4 million visitors.",
    href: "/services#radio-audit",
  },
];
