export interface TimelineEntry {
  year: string;
  color: "red" | "cyan" | "navy";
  country: string;
  tag: string;
  client: string;
  title: string;
  description: string;
  side: "left" | "right";
}

export const timeline: TimelineEntry[] = [
  {
    year: "2005",
    color: "red",
    country: "Kuwait",
    tag: "MILESTONE",
    client: "Shabakkat",
    title: "Company Founded",
    description:
      "Shabakkat is founded as a regional Engineering & Advisory company, laying the foundation for two decades of critical digital infrastructure delivery.",
    side: "left",
  },
  {
    year: "2009",
    color: "cyan",
    country: "Kuwait",
    tag: "RUNNING",
    client: "STC, Ooredoo & Zain",
    title: "Kuwait Managed Services Program",
    description:
      "Managed services, NOC, and field operations supporting all three national operators — an engagement that continues to run today.",
    side: "right",
  },
  {
    year: "2010",
    color: "cyan",
    country: "Iraq",
    tag: "RUNNING",
    client: "Iraq Nationwide",
    title: "Iraq Nationwide Managed Services",
    description:
      "NOC, field maintenance, core operations, and Level 2 support delivered at national scale — ongoing.",
    side: "left",
  },
  {
    year: "2012",
    color: "red",
    country: "Multi-Country",
    tag: "COMPLETED / ONGOING",
    client: "Regional Operators",
    title: "Full Turnkey Network Deployment Program",
    description:
      "FTK, civil works, towers, and site build delivered across multiple countries — completed or ongoing depending on the market.",
    side: "right",
  },
  {
    year: "2014",
    color: "cyan",
    country: "Regional",
    tag: "RUNNING",
    client: "Multi-Vendor Operators",
    title: "Network Operations Center Expansion",
    description: "Expanded multi-vendor NOC operations to support a growing base of managed networks.",
    side: "left",
  },
  {
    year: "2016",
    color: "red",
    country: "Regional",
    tag: "COMPLETED",
    client: "Regional Operators",
    title: "Radio Benchmark & Network Optimization",
    description: "Benchmarking, optimization, and QoS analysis completed across multiple markets.",
    side: "right",
  },
  {
    year: "2018",
    color: "navy",
    country: "Regional",
    tag: "RUNNING",
    client: "Multiple Clients",
    title: "Consultation & Professional Resourcing Program",
    description: "PMO, program management, and engineering resources deployed across active client engagements.",
    side: "left",
  },
  {
    year: "2020",
    color: "cyan",
    country: "Iraq",
    tag: "RUNNING",
    client: "Iraq",
    title: "Iraq National Field Operations Expansion",
    description: "Field maintenance, site management, and E&M support expanded at national scale.",
    side: "right",
  },
  {
    year: "2023",
    color: "navy",
    country: "Regional",
    tag: "RUNNING",
    client: "Multiple Clients",
    title: "PMO & Governance Transformation",
    description: "Project governance, executive reporting, and PMO transformation delivered for clients across the region.",
    side: "left",
  },
  {
    year: "2025",
    color: "red",
    country: "Regional",
    tag: "RUNNING",
    client: "Multiple Clients",
    title: "Engineering & Digital Infrastructure Expansion",
    description:
      "Engineering, advisory, data centers, and infrastructure capabilities expanded to meet growing regional demand.",
    side: "right",
  },
];
