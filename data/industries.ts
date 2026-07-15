export interface Industry {
  slug: string;
  title: string;
  color: "red" | "cyan";
  summary: string;
  notableNames: string;
  focusAreas: string[];
  relevantServices: { label: string; href: string }[];
  relatedProjectHref?: string;
}

export const industries: Industry[] = [
  {
    slug: "telecom-operators",
    title: "Telecom Operators",
    color: "red",
    summary:
      "Full-lifecycle network delivery for mobile and fixed operators — from rollout through managed operations and optimization.",
    notableNames: "du, Viva, Ooredoo, Zain, STC, GO, Airtel",
    focusAreas: [
      "Network rollout & modernization",
      "24/7 managed services & NOC",
      "Radio audit & optimization",
      "Revenue assurance",
    ],
    relevantServices: [
      { label: "Network Rollout", href: "/services#network-rollout" },
      { label: "Managed Services", href: "/services#managed-services" },
      { label: "Radio Audit & Optimization", href: "/services#radio-audit" },
    ],
  },
  {
    slug: "network-vendors",
    title: "Network Vendors",
    color: "cyan",
    summary:
      "Delivery partner for equipment vendors executing multi-vendor rollout, integration, and resourcing programs on their behalf.",
    notableNames: "Nokia, Ericsson, Huawei, ZTE, Alcatel-Lucent",
    focusAreas: ["Multi-vendor rollout execution", "Integration & commissioning", "Consultancy & resourcing"],
    relevantServices: [
      { label: "Consultancy & Resourcing", href: "/services#consultancy-resourcing" },
      { label: "Network Rollout", href: "/services#network-rollout" },
    ],
  },
  {
    slug: "enterprises",
    title: "Enterprises",
    color: "red",
    summary: "ICT infrastructure for enterprise clients — from LAN/WAN and data center builds to cybersecurity hardening.",
    notableNames: "LAN/WAN, data center & cloud clients",
    focusAreas: [
      "LAN/WAN & structured cabling",
      "Data center & cloud infrastructure",
      "Cybersecurity assessment & hardening",
    ],
    relevantServices: [{ label: "Cybersecurity", href: "/services#cybersecurity" }],
  },
  {
    slug: "government-sector",
    title: "Government Sector",
    color: "cyan",
    summary: "Consultancy, resourcing, and infrastructure delivery for ministries and public institutions.",
    notableNames: "Ministries and public institutions",
    focusAreas: ["Consultancy & resourcing", "National infrastructure programs", "NOC management for public networks"],
    relevantServices: [
      { label: "Consultancy & Resourcing", href: "/services#consultancy-resourcing" },
      { label: "Back Office & NOC", href: "/services#back-office-noc" },
    ],
    relatedProjectHref: "/projects#kuwait-ministry-communications-consultancy",
  },
];
