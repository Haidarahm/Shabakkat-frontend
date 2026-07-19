export interface ProjectCaseStudy {
  slug: string;
  client: string;
  country: string;
  year: string;
  tag: string;
  color: "red" | "cyan" | "navy";
  title: string;
  challenge: string;
  scope: string[];
  scale?: string;
  results: string;
  photoLabel: string;
  photoSrc?: string;
  relatedServiceHref: string;
}

export const projects: ProjectCaseStudy[] = [
  {
    slug: "company-founded",
    client: "Shabakkat",
    country: "Kuwait",
    year: "2005",
    tag: "MILESTONE",
    color: "red",
    title: "Company founded as a regional Engineering & Advisory partner",
    challenge:
      "The Middle East and Africa needed a single, accountable partner capable of combining engineering execution with project governance and independent advisory.",
    scope: ["Engineering & Advisory", "Regional expansion foundations"],
    results: "Shabakkat is founded, laying the foundation for two decades of critical digital infrastructure delivery.",
    photoLabel: "PHOTO — Shabakkat founding milestone, 2005",
    photoSrc: "/images/projects/founding-milestone.jpg",
    relatedServiceHref: "/services/pmo-project-delivery#pmo-project-delivery",
  },
  {
    slug: "kuwait-managed-services-program",
    client: "STC, Ooredoo & Zain",
    country: "Kuwait",
    year: "2009–ongoing",
    tag: "MANAGED SERVICES",
    color: "cyan",
    title: "Managed services program for all three national operators",
    challenge:
      "Kuwait's three national operators needed a single partner able to run day-to-day network operations, NOC, and field operations at national scale.",
    scope: ["Managed Services", "NOC", "Field Operations"],
    results: "A running engagement supporting STC, Ooredoo, and Zain since 2009 with managed services, NOC, and field operations.",
    photoLabel: "PHOTO — Kuwait NOC operations",
    photoSrc: "/images/projects/kuwait-rollout-crew.jpg",
    relatedServiceHref: "/services/engineering-services#managed-services",
  },
  {
    slug: "iraq-nationwide-managed-services",
    client: "Iraq Nationwide",
    country: "Iraq",
    year: "2010–ongoing",
    tag: "MANAGED SERVICES",
    color: "cyan",
    title: "Nationwide managed services across Iraq",
    challenge:
      "Operators in Iraq needed NOC, field maintenance, core operations, and Level 2 support delivered consistently at national scale.",
    scope: ["NOC", "Field Maintenance", "Core Operations", "Level 2 Support"],
    results: "An ongoing nationwide managed services engagement covering NOC, field maintenance, core operations, and L2 support.",
    photoLabel: "PHOTO — Iraq network site",
    photoSrc: "/images/projects/iraq-network-site.jpg",
    relatedServiceHref: "/services/engineering-services#managed-services",
  },
  {
    slug: "full-turnkey-network-deployment-program",
    client: "Regional Operators",
    country: "Multi-Country",
    year: "2012",
    tag: "TURNKEY",
    color: "red",
    title: "Full turnkey network deployment across multiple countries",
    challenge:
      "Regional operators needed a coordinated turnkey program covering civil works, towers, and site build across several markets simultaneously.",
    scope: ["Full Turnkey (FTK)", "Civil Works", "Towers", "Site Build"],
    results: "Completed or ongoing by country — a multi-market turnkey deployment program spanning FTK, civil works, towers, and site build.",
    photoLabel: "PHOTO — turnkey site build, multi-country",
    photoSrc: "/images/projects/turnkey-network-deployment.jpg",
    relatedServiceHref: "/services/engineering-services#network-rollout",
  },
  {
    slug: "network-operations-center-expansion",
    client: "Multi-Vendor Operators",
    country: "Regional",
    year: "2014",
    tag: "MANAGED SERVICES",
    color: "cyan",
    title: "Expanding multi-vendor NOC operations",
    challenge:
      "A growing base of managed networks required expanded multi-vendor NOC capacity to maintain service levels.",
    scope: ["Multi-Vendor NOC Operations"],
    results: "Network Operations Center capacity expanded to support a growing base of managed multi-vendor networks.",
    photoLabel: "PHOTO — multi-vendor NOC expansion",
    photoSrc: "/images/projects/multi-vendor-noc.jpg",
    relatedServiceHref: "/services/engineering-services#managed-services",
  },
  {
    slug: "radio-benchmark-network-optimization",
    client: "Regional Operators",
    country: "Regional",
    year: "2016",
    tag: "RADIO AUDIT",
    color: "red",
    title: "Radio benchmark & network optimization across multiple markets",
    challenge:
      "Operators needed independent benchmarking and optimization to validate network performance against real customer experience.",
    scope: ["Benchmarking", "Optimization", "QoS Analysis"],
    results: "Completed benchmarking, optimization, and QoS analysis engagements across multiple regional markets.",
    photoLabel: "PHOTO — radio benchmark & drive test data",
    photoSrc: "/images/projects/radio-benchmark.jpg",
    relatedServiceHref: "/services/engineering-services#engineering-technical-services",
  },
  {
    slug: "consultation-professional-resourcing-program",
    client: "Multiple Clients",
    country: "Regional",
    year: "2018–ongoing",
    tag: "CONSULTANCY & RESOURCING",
    color: "navy",
    title: "Consultation & professional resourcing at scale",
    challenge:
      "Clients across the region needed flexible access to PMO, program management, and engineering resources without building separate in-house teams.",
    scope: ["PMO", "Program Management", "Engineering Resources"],
    results: "An ongoing resourcing program deploying PMO, program management, and engineering resources across active client engagements.",
    photoLabel: "PHOTO — engineering team on site",
    photoSrc: "/images/projects/engineering-team-onsite.jpg",
    relatedServiceHref: "/services/pmo-project-delivery#pmo-project-delivery",
  },
  {
    slug: "iraq-national-field-operations-expansion",
    client: "Iraq",
    country: "Iraq",
    year: "2020–ongoing",
    tag: "MANAGED SERVICES",
    color: "cyan",
    title: "Expanding field operations across Iraq",
    challenge:
      "National-scale infrastructure required expanded field maintenance, site management, and electrical & mechanical (E&M) support.",
    scope: ["Field Maintenance", "Site Management", "E&M"],
    results: "Field maintenance, site management, and E&M support expanded to national scale across Iraq.",
    photoLabel: "PHOTO — field operations, Iraq",
    photoSrc: "/images/projects/iraq-field-operations.jpg",
    relatedServiceHref: "/services/engineering-services#managed-services",
  },
  {
    slug: "pmo-governance-transformation",
    client: "Multiple Clients",
    country: "Regional",
    year: "2023–ongoing",
    tag: "PMO",
    color: "navy",
    title: "PMO & governance transformation",
    challenge:
      "Clients needed stronger project governance, executive reporting, and PMO maturity to manage increasingly complex programs.",
    scope: ["Project Governance", "Executive Reporting", "PMO"],
    results: "An ongoing PMO and governance transformation engagement delivering project governance and executive reporting for regional clients.",
    photoLabel: "PHOTO — program governance & executive reporting",
    photoSrc: "/images/projects/pmo-governance.jpg",
    relatedServiceHref: "/services/pmo-project-delivery#pmo-project-delivery",
  },
  {
    slug: "engineering-digital-infrastructure-expansion",
    client: "Multiple Clients",
    country: "Regional",
    year: "2025–ongoing",
    tag: "ENGINEERING & ADVISORY",
    color: "red",
    title: "Engineering & digital infrastructure expansion",
    challenge:
      "Growing regional demand for data centers and digital infrastructure required expanded engineering and advisory capabilities.",
    scope: ["Engineering", "Advisory", "Data Centers", "Infrastructure"],
    results: "Engineering, advisory, data center, and infrastructure capabilities expanded to meet growing regional demand.",
    photoLabel: "PHOTO — data center & digital infrastructure expansion",
    photoSrc: "/images/projects/data-center-expansion.jpg",
    relatedServiceHref: "/services/engineering-services#data-centers-digital-infrastructure",
  },
];
