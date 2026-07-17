export interface Capability {
  title: string;
  description: string;
  href: string;
}

export const capabilities: Capability[] = [
  {
    title: "Project & Vendor Management",
    description: "Multi-vendor rollout coordination, program governance, and turnkey project delivery.",
    href: "/services/pmo-project-delivery#consultancy-resourcing",
  },
  {
    title: "OSS (CS/PS Core)",
    description: "Circuit- and packet-switched core network operations, provisioning, and assurance.",
    href: "/services/engineering-services#managed-services",
  },
  {
    title: "BSS (IN, VAS, Rev. Assurance)",
    description: "Billing, value-added services, and revenue assurance across subscriber lifecycles.",
    href: "/services/technical-advisory#revenue-assurance",
  },
  {
    title: "RAN & Transmission",
    description: "Site build, microwave links, and radio access network deployment & optimization.",
    href: "/services/engineering-services#network-rollout",
  },
  {
    title: "Network Performance & Monitoring",
    description: "24/7 NOC operations, KPI tracking, and proactive fault management.",
    href: "/services/engineering-services#radio-audit",
  },
  {
    title: "Radio/Core Planning & Optimization",
    description: "RF and core network design, capacity planning, and performance tuning.",
    href: "/services/engineering-services#radio-audit",
  },
  {
    title: "Software Development & Cyber Security",
    description: "Custom OSS/BSS tooling, systems integration, and network security hardening.",
    href: "/services/engineering-services#cybersecurity",
  },
  {
    title: "Power & Civil Works",
    description: "Site power systems, backup solutions, and civil infrastructure for network sites.",
    href: "/services/engineering-services#power-supply",
  },
];
