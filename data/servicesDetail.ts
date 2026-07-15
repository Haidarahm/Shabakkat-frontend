export interface ServiceDetail {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  businessValue?: string;
  capabilities?: string[];
  relatedProjects?: string;
  photoLabel: string;
  imageSide: "left" | "right";
  background?: "muted";
  stats?: { value: string; label: string; color: "red" | "cyan" }[];
  notableList?: { text: string; color: "red" | "cyan" }[];
  partners?: string[];
  standard?: { code: string; label: string };
}

export const servicesDetail: ServiceDetail[] = [
  {
    id: "network-rollout",
    index: "01",
    eyebrow: "NETWORK ROLLOUT",
    title: "Telecom & civil rollout, end to end",
    description:
      "Shabakkat plans, builds, and delivers 3G/4G/5G rollout programs for operators across the Middle East and Africa — combining civil works, radio planning, and program management to bring new coverage on air, on schedule.",
    businessValue:
      "Faster time-to-market for new coverage and capacity, with a single accountable partner for civil, radio, and transmission scopes.",
    capabilities: [
      "Site survey & permitting",
      "RF & transmission engineering",
      "Civil & structural works",
      "BTS/RAN installation (2G–5G)",
      "Fiber deployment",
      "Swap & modernization",
      "Multi-vendor integration",
      "Testing & commissioning",
      "Program & schedule management",
    ],
    relatedProjects:
      "Etisalat Du UAE — Mega 3G & 4G Rollout (2010, 2016) · Ericsson Egypt/Oman/Bahrain — Mega 3G & 4G Rollout (2013)",
    photoLabel: "PHOTO — network rollout site under construction",
    imageSide: "right",
  },
  {
    id: "managed-services",
    index: "02",
    eyebrow: "MANAGED SERVICES",
    title: "24/7 operations, on your behalf",
    description:
      "Delivering managed services since 2009, Shabakkat runs NOC, field maintenance, IN charging, and second-level core/IP back-office support for major operators — currently supporting 11,000+ combined sites across Iraq and Kuwait.",
    capabilities: [
      "24/7 NOC service",
      "24/7 field maintenance",
      "IN charging operation",
      "Core network ops (CS/PS, EPC, IMS, VoLTE, 5G Core)",
      "IP & transport ops (MPLS, Metro Ethernet, backbone)",
      "Fault diagnosis & root cause analysis",
      "OSS/BSS support & KPI reporting",
      "Site acquisition & access mgmt.",
    ],
    stats: [
      { value: "5,000+", label: "Sites — Zain Iraq", color: "red" },
      { value: "6,000+", label: "Sites — STC/Zain/Ooredoo Kuwait", color: "cyan" },
    ],
    photoLabel: "PHOTO — 24/7 NOC operations floor",
    imageSide: "left",
    background: "muted",
  },
  {
    id: "consultancy-resourcing",
    index: "03",
    eyebrow: "CONSULTANCY & RESOURCING",
    title: "300+ engineers, deployed where you need them",
    description:
      "300+ resources assembled into coherent teams to run significant projects across Kuwait, KSA, Iraq, Oman, Bahrain, UAE, Egypt, Ethiopia, Ghana, Tanzania, Nigeria and Sudan — sourced from Poland, China, Hungary, the UK, Lebanon, India, Egypt, Sudan, Iraq, the Philippines, Jordan and more.",
    capabilities: [
      "PMO & Program Management",
      "Project Delivery",
      "Contract & Vendor Management",
      "Skilled Engineers",
    ],
    photoLabel: "PHOTO — engineering team on site",
    imageSide: "right",
  },
  {
    id: "back-office-noc",
    index: "04",
    eyebrow: "BACK OFFICE & NOC MANAGEMENT",
    title: "Full network surveillance, multi-vendor",
    description:
      "Surveillance of RAN/Core/Datacom, Transmission/IP Backbone, and Fibre Networks — alarm monitoring, fault management and escalation, performance management, and reporting across Nokia, Huawei, Ericsson, NEC, Cisco, and Harris Stratex networks.",
    capabilities: [
      "Zain Iraq — 65 sites monitored",
      "STC Kuwait — 25 sites monitored",
      "Etisalat Egypt — 44 sites monitored",
      "Vodafone Egypt — 16 sites monitored",
    ],
    photoLabel: "PHOTO — control room dashboards",
    imageSide: "right",
    background: "muted",
  },
  {
    id: "fiber-digital",
    index: "05",
    eyebrow: "DIGITAL INFRASTRUCTURE & FIBER NETWORKS",
    title: "Fiber networks, built & maintained",
    description:
      "Outside plant and in-building fiber deployment, splicing and testing, and transmission infrastructure for POP sites and landing stations — connecting networks with reliable, high-capacity data links.",
    capabilities: [
      "OSP & ISP fiber networks",
      "Fiber blowing & splicing",
      "OTDR testing & fiber migration",
      "POP sites & landing stations",
      "Transmission infrastructure",
      "Data connectivity",
    ],
    photoLabel: "PHOTO — fiber splicing & OTDR testing",
    imageSide: "right",
  },
  {
    id: "radio-audit",
    index: "06",
    eyebrow: "RADIO AUDIT, BENCHMARK & OPTIMIZATION",
    title: "Real customer experience, measured",
    description:
      "A holistic approach — deep analysis of coverage, signal quality, and voice quality; correlating drive-test KPIs with statistical, configuration, and systems data; and a smart 80-20 SWOT analysis to prioritize optimization quick-wins.",
    capabilities: [
      "RAN/RF optimization & drive testing",
      "Cluster optimization & parameter tuning",
      "Capacity forecasting & QoS improvement",
      "Customer experience (CEM) analysis",
      "Network health assessment",
    ],
    notableList: [
      { text: "KSA 2022 — Mecca Mosque Benchmark, Ramadan Season, 1.4M visitors", color: "red" },
      { text: "Euro Cup 2019 — Estadio Da Luz Network Benchmark", color: "cyan" },
      { text: "Euro Cup 2019 — Benito Villamarín Stadium Benchmark", color: "red" },
      { text: "Seoul 2021–22 — Samsung Network Benchmark & Analyses", color: "cyan" },
    ],
    photoLabel: "PHOTO — drive test / benchmark data",
    imageSide: "left",
  },
  {
    id: "turnkey",
    index: "07",
    eyebrow: "FULL TURNKEY SITE BUILD (FTK)",
    title: "Towers, shelters & civil works, delivered",
    description:
      "Green field and roof-top tower supply and erection, monopole installation (25m–80m), special solution towers and poles, all types of civil works — excavation, sand removal, road cutting, fence repair, concrete foundations — and fully equipped shelter supply.",
    capabilities: [
      "Monopoles 25–80m",
      "Special solution towers 7–9m",
      "Civil & foundation works",
      "Equipped shelters",
      "Earthing & lightning protection",
      "AC systems & rectifiers",
      "Fuel systems",
      "Site acceptance & handover",
    ],
    stats: [
      { value: "1,000+", label: "Iraq deployments", color: "red" },
      { value: "239", label: "Ghana deployments", color: "cyan" },
      { value: "230", label: "Sudan deployments", color: "red" },
      { value: "150", label: "Kuwait deployments", color: "cyan" },
    ],
    photoLabel: "PHOTO — tower & shelter site build",
    imageSide: "right",
    background: "muted",
  },
  {
    id: "power-supply",
    index: "08",
    eyebrow: "POWER SUPPLY & MAINTENANCE",
    title: "Reliable power for critical sites",
    description:
      "Supply and maintenance of diesel generators and power systems for telecom infrastructure, keeping critical sites running in demanding environments across the region.",
    capabilities: [
      "Diesel generator solutions",
      "Hybrid power & solar integration",
      "Rectifiers & UPS",
      "Preventive & corrective maintenance",
    ],
    partners: ["Cummins", "Daikin Air Intelligence", "IPT PowerTech Group", "Meico Energy"],
    relatedProjects: "IHS Kuwait (2020) — Power & Diesel Generators Supply & Maintenance",
    photoLabel: "PHOTO — diesel generator & power systems",
    imageSide: "right",
  },
  {
    id: "battery-supply",
    index: "09",
    eyebrow: "BATTERY SUPPLY & INSTALLATION",
    title: "Backup power, commissioned & integrated",
    description:
      "Supply of batteries for STC Kuwait, with warehousing for dismantled and new products, installation across hundreds of sites, commissioning and integration with the Huawei monitoring system, and safe relocation of old acid batteries.",
    stats: [
      { value: "750", label: "Batteries · 246 sites (2024)", color: "red" },
      { value: "171", label: "Batteries · 54 sites (2025)", color: "cyan" },
    ],
    photoLabel: "PHOTO — battery racks at telecom site",
    imageSide: "left",
    background: "muted",
  },
  {
    id: "cybersecurity",
    index: "10",
    eyebrow: "CYBERSECURITY",
    title: "Protecting networks & data",
    description:
      "IT and cybersecurity specialists safeguard operator and enterprise networks, aligned with our ISO/IEC 27001 information security management practices — from network security architecture to ethical-hacking-informed risk assessment.",
    partners: ["Fidelis Cybersecurity", "RSA", "SEQRED", "Certified Ethical Hacker (CEH)"],
    standard: { code: "ISO/IEC 27001", label: "Information Security Management System" },
    photoLabel: "PHOTO — security operations center",
    imageSide: "right",
  },
  {
    id: "revenue-assurance",
    index: "11",
    eyebrow: "REVENUE ASSURANCE",
    title: "Protecting revenue across BSS & IN",
    description:
      "Revenue assurance specialists work across BSS, IN, and VAS layers to identify leakage, validate billing accuracy, and safeguard operator revenue streams as part of Shabakkat's wider back-office and network performance capability.",
    capabilities: ["Revenue leakage detection", "Billing & IN charging validation", "BSS/VAS assurance"],
    photoLabel: "PHOTO — billing & revenue dashboards",
    imageSide: "right",
  },
];

export interface ServiceCategory {
  id: string;
  title: string;
  items: string[];
}

export const professionalServices: string[] = [
  "Networks Audit & Benchmarks",
  "Mobile Network Solution Architects",
  "IT Solution Architects",
  "Bid Development & Business Case Consultants",
  "Feasibility Studies & Site Audits",
  "Technical Due Diligence & Gap Assessment",
  "Operational Readiness & Risk Assessment",
  "Modernization Strategy",
];

export const equipmentSupply: string[] = [
  "Active & Passive Equipment",
  "Antennas & RF Accessories",
  "Fiber & Microwave Equipment",
  "Diesel Generators & Batteries",
  "Cabinets & Spare Parts",
  "Logistics & Supply Chain",
];

export const jumpNavLinks: { label: string; href: string }[] = [
  { label: "Network Rollout", href: "#network-rollout" },
  { label: "Managed Services", href: "#managed-services" },
  { label: "Consultancy & Resourcing", href: "#consultancy-resourcing" },
  { label: "Back Office & NOC", href: "#back-office-noc" },
  { label: "Fiber & Digital Infrastructure", href: "#fiber-digital" },
  { label: "Radio Audit & Optimization", href: "#radio-audit" },
  { label: "Turnkey Site Build", href: "#turnkey" },
  { label: "Power Supply", href: "#power-supply" },
  { label: "Battery Supply", href: "#battery-supply" },
  { label: "Cybersecurity", href: "#cybersecurity" },
  { label: "Revenue Assurance", href: "#revenue-assurance" },
  { label: "Professional Services", href: "#professional-services" },
  { label: "Equipment Supply", href: "#equipment-supply" },
];
