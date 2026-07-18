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
    title: "Iraq Nationwide Managed Services",
    description: "NOC, field maintenance, core operations, and Level 2 support delivered at national scale since 2010.",
    href: "/projects#iraq-nationwide-managed-services",
  },
  {
    photoLabel: "PHOTO — Kuwait NOC operations",
    photoSrc: "/images/projects/kuwait-rollout-crew.jpg",
    title: "Kuwait Managed Services Program",
    description: "Managed services, NOC, and field operations supporting STC, Ooredoo, and Zain since 2009.",
    href: "/projects#kuwait-managed-services-program",
  },
  {
    photoLabel: "PHOTO — turnkey site build, multi-country",
    photoSrc: "/images/projects/turnkey-network-deployment.jpg",
    title: "Full Turnkey Network Deployment Program",
    description: "FTK, civil works, towers, and site build delivered across multiple countries since 2012.",
    href: "/projects#full-turnkey-network-deployment-program",
  },
];
