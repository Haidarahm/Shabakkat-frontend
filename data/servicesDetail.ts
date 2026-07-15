export interface ServiceCategory {
  id: string;
  index: string;
  title: string;
  description: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "network-deployment",
    index: "01",
    title: "Network Deployment",
    description:
      "Planning, rollout, modernization, integration, fiber, equipment supply, testing, and commissioning — delivered as one accountable program.",
  },
  {
    id: "managed-operations",
    index: "02",
    title: "Managed Operations",
    description:
      "NOC, back-office, field maintenance, monitoring, incident management, and SLA/KPI reporting for networks already on air.",
  },
  {
    id: "network-optimization",
    index: "03",
    title: "Network Optimization",
    description:
      "Radio audits, drive testing, benchmarking, and capacity, coverage, and performance optimization, grounded in real customer experience data.",
  },
  {
    id: "ict-cybersecurity",
    index: "04",
    title: "ICT & Cybersecurity",
    description:
      "Enterprise networks and data infrastructure, systems integration, and security assessment, hardening, and monitoring.",
  },
  {
    id: "infrastructure-power",
    index: "05",
    title: "Infrastructure & Power",
    description:
      "Turnkey site construction, civil works, towers, shelters, generators, batteries, and backup power for critical sites.",
  },
  {
    id: "professional-services",
    index: "06",
    title: "Professional Services",
    description: "Consultancy, project and vendor management, technical resourcing, governance, and revenue assurance.",
  },
];

export interface ServiceDetail {
  id: string;
  category: string;
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  businessValue?: string;
  capabilities?: string[];
  relatedProjects?: string;
  photoLabel: string;
  imageSide: "left" | "right";
  stats?: { value: string; label: string; color: "red" | "cyan" }[];
  notableList?: { text: string; color: "red" | "cyan" }[];
  partners?: string[];
  standard?: { code: string; label: string };
}

export const servicesDetail: ServiceDetail[] = [
  // 01 — Network Deployment
  {
    id: "network-rollout",
    category: "network-deployment",
    index: "1.1",
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
      "Etisalat & du UAE — Mega 3G & 4G Rollout (2010, 2016) · Ericsson Egypt/Oman/Bahrain — Mega 3G & 4G Rollout (2013)",
    photoLabel: "PHOTO — network rollout site under construction",
    imageSide: "right",
  },
  {
    id: "fiber-digital",
    category: "network-deployment",
    index: "1.2",
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
    imageSide: "left",
  },

  // 02 — Managed Operations
  {
    id: "managed-services",
    category: "managed-operations",
    index: "2.1",
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
    imageSide: "right",
  },
  {
    id: "back-office-noc",
    category: "managed-operations",
    index: "2.2",
    eyebrow: "BACK OFFICE & NOC MANAGEMENT",
    title: "Full network surveillance, multi-vendor",
    description:
      "Surveillance of RAN/Core/Datacom, Transmission/IP Backbone, and Fiber Networks — alarm monitoring, fault management and escalation, performance management, and reporting across Nokia, Huawei, Ericsson, NEC, Cisco, and Harris Stratex networks.",
    capabilities: [
      "Zain Iraq — 65 sites monitored",
      "STC Kuwait — 25 sites monitored",
      "Etisalat Egypt — 44 sites monitored",
      "Vodafone Egypt — 16 sites monitored",
    ],
    photoLabel: "PHOTO — control room dashboards",
    imageSide: "left",
  },

  // 03 — Network Optimization
  {
    id: "radio-audit",
    category: "network-optimization",
    index: "3.1",
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
    imageSide: "right",
  },

  // 04 — ICT & Cybersecurity
  {
    id: "cybersecurity",
    category: "ict-cybersecurity",
    index: "4.1",
    eyebrow: "CYBERSECURITY",
    title: "Protecting networks & data",
    description:
      "IT and cybersecurity specialists safeguard operator and enterprise networks, aligned with our ISO/IEC 27001 information security management practices — from network security architecture to ethical-hacking-informed risk assessment.",
    capabilities: [
      "24/7 managed security monitoring",
      "Firewall, intrusion prevention & content filtering",
      "Network operations center for security incidents",
      "Privacy, integrity & authenticity controls",
    ],
    partners: ["Fidelis Cybersecurity", "RSA", "SEQRED", "Certified Ethical Hacker (CEH)"],
    standard: { code: "ISO/IEC 27001", label: "Information Security Management System" },
    photoLabel: "PHOTO — security operations center",
    imageSide: "left",
  },
  {
    id: "enterprise-networks",
    category: "ict-cybersecurity",
    index: "4.2",
    eyebrow: "ENTERPRISE NETWORKS & DATA INFRASTRUCTURE",
    title: "LAN/WAN, structured cabling & data centers for the enterprise",
    description:
      "Shabakkat designs, builds, and commissions enterprise data network infrastructure — from structured cabling and wireless access across LAN/WAN environments to scalable, highly-available data centers and SAN storage architectures.",
    businessValue:
      "A single accountable partner for enterprise network and data-center infrastructure, engineered for redundancy, availability, and reduced total cost of ownership.",
    capabilities: [
      "LAN & WAN design, deployment & commissioning",
      "Structured cabling (copper & fiber)",
      "Outside plant (OSP) infrastructure",
      "Data center & SAN design and build",
      "Business continuity & disaster recovery planning",
    ],
    photoLabel: "PHOTO — enterprise data center / structured cabling",
    imageSide: "right",
  },
  {
    id: "unified-communications",
    category: "ict-cybersecurity",
    index: "4.3",
    eyebrow: "UNIFIED COMMUNICATIONS & CONTACT CENTRES",
    title: "IP telephony & contact center systems, integrated",
    description:
      "Shabakkat designs, builds, and maintains IP-centric communications platforms for enterprises — from VoIP and unified messaging to full contact center deployments with call management and multi-channel integration.",
    capabilities: [
      "IP-based switching & VoIP",
      "Unified messaging & IVR",
      "Contact center deployment & call management",
      "Multi-channel integration (email, IM, fax, SMS)",
      "Integration with business support systems",
    ],
    photoLabel: "PHOTO — contact center / IP telephony operations",
    imageSide: "left",
  },
  {
    id: "cloud-infrastructure",
    category: "ict-cybersecurity",
    index: "4.4",
    eyebrow: "CLOUD & HOSTED INFRASTRUCTURE",
    title: "IaaS, PaaS & SaaS, delivered through Advaltis",
    description:
      "Through Shabakkat's subsidiary Advaltis, enterprises get access to virtualized, highly-available cloud infrastructure — helping clients avoid heavy capital expenditure while scaling IT resources on demand.",
    capabilities: [
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Software as a Service (SaaS)",
    ],
    photoLabel: "PHOTO — cloud & virtualized infrastructure",
    imageSide: "right",
  },

  // 05 — Infrastructure & Power
  {
    id: "turnkey",
    category: "infrastructure-power",
    index: "5.1",
    eyebrow: "FULL TURNKEY SITE BUILD (FTK)",
    title: "Towers, shelters & civil works, delivered",
    description:
      "Greenfield and roof-top tower supply and erection, monopole installation (25m–80m), special solution towers and poles, all types of civil works — excavation, sand removal, road cutting, fence repair, concrete foundations — and fully equipped shelter supply.",
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
  },
  {
    id: "power-supply",
    category: "infrastructure-power",
    index: "5.2",
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
    imageSide: "left",
  },
  {
    id: "battery-supply",
    category: "infrastructure-power",
    index: "5.3",
    eyebrow: "BATTERY SUPPLY & INSTALLATION",
    title: "Backup power, commissioned & integrated",
    description:
      "Supply of batteries for STC Kuwait, with warehousing for dismantled and new products, installation across hundreds of sites, commissioning and integration with the Huawei monitoring system, and safe relocation of old acid batteries.",
    stats: [
      { value: "750", label: "Batteries · 246 sites (2024)", color: "red" },
      { value: "171", label: "Batteries · 54 sites (2025)", color: "cyan" },
    ],
    photoLabel: "PHOTO — battery racks at telecom site",
    imageSide: "right",
  },

  // 06 — Professional Services
  {
    id: "consultancy-resourcing",
    category: "professional-services",
    index: "6.1",
    eyebrow: "CONSULTANCY & RESOURCING",
    title: "300+ engineers, deployed where you need them",
    description:
      "300+ resources assembled into coherent teams to run significant projects across Kuwait, KSA, Iraq, Oman, Bahrain, UAE, Egypt, Ethiopia, Ghana, Tanzania, Nigeria, and Sudan — sourced from Poland, China, Hungary, the UK, Lebanon, India, Egypt, Sudan, Iraq, the Philippines, Jordan, and more.",
    capabilities: [
      "PMO & program management",
      "Project delivery",
      "Contract & vendor management",
      "Skilled engineers",
    ],
    photoLabel: "PHOTO — engineering team on site",
    imageSide: "left",
  },
  {
    id: "revenue-assurance",
    category: "professional-services",
    index: "6.2",
    eyebrow: "REVENUE ASSURANCE",
    title: "Protecting revenue across BSS & IN",
    description:
      "Revenue assurance specialists work across BSS, IN, and VAS layers to identify leakage, validate billing accuracy, and safeguard operator revenue streams as part of Shabakkat's wider back-office and network performance capability.",
    capabilities: ["Revenue leakage detection", "Billing & IN charging validation", "BSS/VAS assurance"],
    photoLabel: "PHOTO — billing & revenue dashboards",
    imageSide: "right",
  },
];

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

export const jumpNavLinks: { label: string; href: string }[] = serviceCategories.map((c) => ({
  label: c.title,
  href: `#${c.id}`,
}));
