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
    title: "Telecommunications Operators",
    color: "red",
    summary:
      "Telecommunications networks continue to evolve in response to growing demand, emerging technologies, and increasing customer expectations. Shabakkat supports mobile and fixed network operators in expanding capacity, modernizing infrastructure, enhancing operational resilience, and preparing for the next generation of digital connectivity.",
    notableNames: "du, Ooredoo, Zain, STC",
    focusAreas: [
      "Network rollout & modernization",
      "24/7 managed services & NOC",
      "Radio audit & optimization",
      "Revenue assurance",
    ],
    relevantServices: [
      { label: "Network Rollout", href: "/services/engineering-services#network-rollout" },
      { label: "Managed Services", href: "/services/engineering-services#managed-services" },
      { label: "Radio Audit & Optimization", href: "/services/engineering-services#radio-audit" },
    ],
    relatedProjectHref: "/projects#kuwait-managed-services-program",
  },
  {
    slug: "government",
    title: "Government & Public Sector",
    color: "cyan",
    summary:
      "Governments play a vital role in shaping the future of digital infrastructure through policy, regulation, and strategic investment. Shabakkat partners with ministries, public sector organizations, and telecommunications regulatory authorities to support national digital transformation, strengthen regulatory initiatives, enhance critical infrastructure, and enable secure, scalable, and future-ready public services.",
    notableNames: "Ministries and public institutions",
    focusAreas: ["National digital transformation", "PMO & governance", "Consultancy & resourcing", "Critical infrastructure"],
    relevantServices: [
      { label: "Technical Advisory", href: "/services/technical-advisory#technical-advisory" },
      { label: "Consultancy & Resourcing", href: "/services/pmo-project-delivery#consultancy-resourcing" },
    ],
    relatedProjectHref: "/projects#pmo-governance-transformation",
  },
  {
    slug: "data-centers",
    title: "Data Centers",
    color: "red",
    summary:
      "As digital demand continues to accelerate, data centers have become the backbone of modern business and cloud services. Shabakkat supports the development, modernization, and expansion of resilient digital infrastructure that delivers high availability, operational efficiency, scalability, and long-term business continuity.",
    notableNames: "Data center developers & operators",
    focusAreas: ["Data center infrastructure & fit-out", "Critical power & cooling", "Structured cabling", "Disaster recovery infrastructure"],
    relevantServices: [
      { label: "Data Centers & Digital Infrastructure", href: "/services/engineering-services#data-centers-digital-infrastructure" },
      { label: "Cloud & Hosted Infrastructure", href: "/services/engineering-services#cloud-infrastructure" },
    ],
    relatedProjectHref: "/projects#engineering-digital-infrastructure-expansion",
  },
  {
    slug: "enterprise",
    title: "Enterprise",
    color: "cyan",
    summary:
      "Modern enterprises require resilient, secure, and scalable infrastructure to support growth, operational continuity, and digital transformation. Shabakkat partners with organizations across diverse industries to strengthen their technology foundations and enable sustainable business performance.",
    notableNames: "LAN/WAN, data center & cloud clients",
    focusAreas: [
      "LAN/WAN & structured cabling",
      "Unified communications & contact centres",
      "Cybersecurity assessment & hardening",
      "Cloud & hosted infrastructure",
    ],
    relevantServices: [
      { label: "Enterprise Networks & Data Infrastructure", href: "/services/engineering-services#enterprise-networks" },
      { label: "Unified Communications & Contact Centres", href: "/services/engineering-services#unified-communications" },
      { label: "Cloud & Hosted Infrastructure", href: "/services/engineering-services#cloud-infrastructure" },
      { label: "Cybersecurity", href: "/services/engineering-services#cybersecurity" },
    ],
  },
  {
    slug: "energy-utilities",
    title: "Energy & Utilities",
    color: "red",
    summary:
      "Reliable communications and resilient infrastructure are essential to the continuity of energy and utility operations. Shabakkat supports organizations in modernizing critical infrastructure, improving operational resilience, and enabling secure, reliable communications that support essential services.",
    notableNames: "Energy & utility operators",
    focusAreas: ["Critical infrastructure modernization", "Power supply & maintenance", "Operational resilience", "Reliable communications"],
    relevantServices: [
      { label: "Power Supply & Maintenance", href: "/services/engineering-services#power-supply" },
      { label: "Engineering & Technical Services", href: "/services/engineering-services#engineering-technical-services" },
    ],
    relatedProjectHref: "/projects#full-turnkey-network-deployment-program",
  },
];
