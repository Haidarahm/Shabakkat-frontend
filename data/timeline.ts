export interface TimelineEntry {
  slug: string;
  year: string;
  engagement: string;
  service: string;
  status: "Milestone" | "Running" | "Completed" | "Completed / Ongoing by Country";
  color: "red" | "cyan" | "navy";
  side: "left" | "right";
  photoSrc: string;
}

/** Journey Timeline — 10 selected engagements from the content doc. */
export const timeline: TimelineEntry[] = [
  {
    slug: "company-founded",
    year: "2005",
    engagement: "Company Founded",
    service: "Engineering & Advisory",
    status: "Milestone",
    color: "red",
    side: "left",
    photoSrc: "/images/projects/founding-milestone.jpg",
  },
  {
    slug: "kuwait-managed-services-program",
    year: "2009",
    engagement: "Kuwait Managed Services Program (STC, Ooredoo, Zain)",
    service: "Managed Services, NOC, Field Operations",
    status: "Running",
    color: "cyan",
    side: "right",
    photoSrc: "/images/projects/kuwait-rollout-crew.jpg",
  },
  {
    slug: "iraq-nationwide-managed-services",
    year: "2010",
    engagement: "Iraq Nationwide Managed Services",
    service: "NOC, Field Maintenance, Core Operations, L2 Support",
    status: "Running",
    color: "cyan",
    side: "left",
    photoSrc: "/images/projects/iraq-network-site.jpg",
  },
  {
    slug: "full-turnkey-network-deployment-program",
    year: "2012",
    engagement: "Full Turnkey Network Deployment Program",
    service: "FTK, Civil Works, Towers, Site Build",
    status: "Completed / Ongoing by Country",
    color: "red",
    side: "right",
    photoSrc: "/images/projects/turnkey-network-deployment.jpg",
  },
  {
    slug: "network-operations-center-expansion",
    year: "2014",
    engagement: "Network Operations Center Expansion",
    service: "Multi-Vendor NOC Operations",
    status: "Running",
    color: "cyan",
    side: "left",
    photoSrc: "/images/projects/multi-vendor-noc.jpg",
  },
  {
    slug: "radio-benchmark-network-optimization",
    year: "2016",
    engagement: "Radio Benchmark & Network Optimization",
    service: "Benchmarking, Optimization, QoS Analysis",
    status: "Completed",
    color: "red",
    side: "right",
    photoSrc: "/images/projects/radio-benchmark.jpg",
  },
  {
    slug: "consultation-professional-resourcing-program",
    year: "2018",
    engagement: "Consultation & Professional Resourcing Program",
    service: "PMO, Program Management, Engineering Resources",
    status: "Running",
    color: "navy",
    side: "left",
    photoSrc: "/images/projects/engineering-team-onsite.jpg",
  },
  {
    slug: "iraq-national-field-operations-expansion",
    year: "2020",
    engagement: "Iraq National Field Operations Expansion",
    service: "Field Maintenance, Site Management, E&M",
    status: "Running",
    color: "cyan",
    side: "right",
    photoSrc: "/images/projects/iraq-field-operations.jpg",
  },
  {
    slug: "pmo-governance-transformation",
    year: "2023",
    engagement: "PMO & Governance Transformation",
    service: "Project Governance, Executive Reporting, PMO",
    status: "Running",
    color: "navy",
    side: "left",
    photoSrc: "/images/projects/pmo-governance.jpg",
  },
  {
    slug: "engineering-digital-infrastructure-expansion",
    year: "2025",
    engagement: "Engineering & Digital Infrastructure Expansion",
    service: "Engineering, Advisory, Data Centers, Infrastructure",
    status: "Running",
    color: "red",
    side: "right",
    photoSrc: "/images/projects/data-center-expansion.jpg",
  },
];
