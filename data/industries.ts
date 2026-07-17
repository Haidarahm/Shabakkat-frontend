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
      { label: "Network Rollout", href: "/services/network-deployment#network-rollout" },
      { label: "Managed Services", href: "/services/managed-operations#managed-services" },
      { label: "Radio Audit & Optimization", href: "/services/network-optimization#radio-audit" },
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
      { label: "Consultancy & Resourcing", href: "/services/professional-services#consultancy-resourcing" },
      { label: "Network Rollout", href: "/services/network-deployment#network-rollout" },
    ],
  },
  {
    slug: "enterprises",
    title: "Enterprises",
    color: "red",
    summary:
      "ICT infrastructure for enterprise clients — from LAN/WAN, structured cabling, and data centers to unified communications, cloud, and cybersecurity hardening.",
    notableNames: "LAN/WAN, data center & cloud clients",
    focusAreas: [
      "LAN/WAN & structured cabling",
      "Data center & cloud infrastructure",
      "Unified communications & contact centres",
      "Cybersecurity assessment & hardening",
    ],
    relevantServices: [
      { label: "Enterprise Networks & Data Infrastructure", href: "/services/ict-cybersecurity#enterprise-networks" },
      { label: "Unified Communications & Contact Centres", href: "/services/ict-cybersecurity#unified-communications" },
      { label: "Cloud & Hosted Infrastructure", href: "/services/ict-cybersecurity#cloud-infrastructure" },
      { label: "Cybersecurity", href: "/services/ict-cybersecurity#cybersecurity" },
    ],
  },
  {
    slug: "government-sector",
    title: "Government Sector",
    color: "cyan",
    summary: "Consultancy, resourcing, and infrastructure delivery for ministries and public institutions.",
    notableNames: "Ministries and public institutions",
    focusAreas: ["Consultancy & resourcing", "National infrastructure programs", "NOC management for public networks"],
    relevantServices: [
      { label: "Consultancy & Resourcing", href: "/services/professional-services#consultancy-resourcing" },
      { label: "Back Office & NOC", href: "/services/managed-operations#back-office-noc" },
    ],
    relatedProjectHref: "/projects#kuwait-ministry-communications-consultancy",
  },
];
