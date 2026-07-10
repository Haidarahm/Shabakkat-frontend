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
    year: "2004",
    color: "red",
    country: "Iraq",
    tag: "TURNKEY",
    client: "Zain Iraq",
    title: "Core Network & FTK Site Build",
    description:
      "Core network buildout paired with full turnkey site construction — Shabakkat's first mega engagement in Iraq.",
    side: "left",
  },
  {
    year: "2005",
    color: "red",
    country: "Saudi Arabia",
    tag: "ROLLOUT",
    client: "STC & Mobily",
    title: "Rollout, Managed Services & Vendor Management",
    description:
      "Multi-vendor rollout and managed services program supporting two of the Kingdom's largest operators.",
    side: "right",
  },
  {
    year: "2007",
    color: "red",
    country: "Sudan",
    tag: "TURNKEY",
    client: "Zain Sudan",
    title: "FTK Site Build & Managed Services",
    description: "Full turnkey site build paired with ongoing managed services across Sudan's expanding network.",
    side: "left",
  },
  {
    year: "2009",
    color: "cyan",
    country: "Iraq",
    tag: "MANAGED SERVICES",
    client: "Zain Iraq",
    title: "Core & Radio Managed Services",
    description: "Extended into core and radio network operations, deepening the long-term Zain Iraq partnership.",
    side: "right",
  },
  {
    year: "2012",
    color: "cyan",
    country: "Iraq",
    tag: "MANAGED SERVICES",
    client: "SIM Iraq – Zain",
    title: "End-to-End Managed Services",
    description: "5,000+ sites managed, 15M+ subscribers served — one of the largest managed services contracts in the region.",
    side: "left",
  },
  {
    year: "2013",
    color: "red",
    country: "Egypt, Oman & Bahrain",
    tag: "ROLLOUT",
    client: "Ericsson",
    title: "Mega 3G & 4G Rollout",
    description: "Multi-country rollout program executed on behalf of Ericsson across three markets simultaneously.",
    side: "right",
  },
  {
    year: "2016",
    color: "red",
    country: "UAE",
    tag: "ROLLOUT",
    client: "Etisalat & Du",
    title: "Mega 3G & 4G Rollout",
    description: "Large-scale coverage and capacity rollout for two of the UAE's leading operators.",
    side: "left",
  },
  {
    year: "2017",
    color: "cyan",
    country: "Kuwait",
    tag: "RADIO AUDIT",
    client: "Zain, Ooredoo & STC",
    title: "Radio Network DT & Optimization; Managed Services",
    description: "Drive-test benchmarking and optimization alongside managed services for all three national operators.",
    side: "right",
  },
  {
    year: "2020",
    color: "navy",
    country: "Kuwait",
    tag: "POWER",
    client: "IHS Towers",
    title: "Power & Diesel Generators Supply & Maintenance",
    description: "Ongoing supply and maintenance of power systems keeping IHS's tower portfolio running.",
    side: "left",
  },
  {
    year: "2021",
    color: "navy",
    country: "Kuwait",
    tag: "CONSULTANCY",
    client: "Ministry of Communications",
    title: "Consultancy & Resourcing",
    description: "20 GPON NOC management engagement supporting national fiber broadband infrastructure.",
    side: "right",
  },
];
