export interface Capability {
  title: string;
  description: string;
  href: string;
  highlighted?: boolean;
}

export const capabilities: Capability[] = [
  {
    title: "Project & Vendor Management",
    description: "Multi-vendor rollout coordination, program governance, and turnkey project delivery.",
    href: "/services#consultancy-resourcing",
    highlighted: true,
  },
  {
    title: "OSS (CS/PS Core)",
    description: "Circuit- and packet-switched core network operations, provisioning, and assurance.",
    href: "/services#managed-services",
  },
  {
    title: "BSS (IN, VAS, Rev. Assurance)",
    description: "Billing, value-added services, and revenue assurance across subscriber lifecycles.",
    href: "/services#revenue-assurance",
  },
  {
    title: "RAN & Transmission",
    description: "Site build, microwave links, and radio access network deployment & optimization.",
    href: "/services#network-rollout",
  },
  {
    title: "Network Performance & Monitoring",
    description: "24/7 NOC operations, KPI tracking, and proactive fault management.",
    href: "/services#radio-audit",
  },
  {
    title: "Radio/Core Planning & Optimization",
    description: "RF and core network design, capacity planning, and performance tuning.",
    href: "/services#radio-audit",
  },
  {
    title: "Software Development & Cyber Security",
    description: "Custom OSS/BSS tooling, systems integration, and network security hardening.",
    href: "/services#cybersecurity",
  },
  {
    title: "Power & Civil Works",
    description: "Site power systems, backup solutions, and civil infrastructure for network sites.",
    href: "/services#power-supply",
  },
];
