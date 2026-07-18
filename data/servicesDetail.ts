export interface ServiceCategory {
  id: string;
  index: string;
  title: string;
  description: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "engineering-services",
    index: "01",
    title: "Engineering Services",
    description:
      "Our engineering teams deliver comprehensive infrastructure solutions, combining technical expertise, disciplined execution, and operational excellence to build resilient, scalable, and future-ready digital infrastructure.",
  },
  {
    id: "pmo-project-delivery",
    index: "02",
    title: "PMO & Project Delivery",
    description:
      "Our PMO services establish the governance, structure, and leadership required to successfully deliver complex infrastructure programs, ensuring alignment with business objectives while maintaining control over cost, schedule, quality, risk, and performance.",
  },
  {
    id: "technical-advisory",
    index: "03",
    title: "Technical Advisory",
    description:
      "Our advisory services help organizations make informed investment, technology, and infrastructure decisions by combining engineering knowledge with practical industry experience and independent technical assessment.",
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
  photoSrc?: string;
  imageSide: "left" | "right";
  stats?: { value: string; label: string; color: "red" | "cyan" }[];
  notableList?: { text: string; color: "red" | "cyan" }[];
  partners?: string[];
  standard?: { code: string; label: string };
}

export const servicesDetail: ServiceDetail[] = [
  // 01 — Engineering Services
  {
    id: "network-rollout",
    category: "engineering-services",
    index: "1.1",
    eyebrow: "NETWORK INFRASTRUCTURE & DEPLOYMENT",
    title: "Planning, building, and expanding telecom infrastructure",
    description:
      "Shabakkat plans, designs, builds, and expands telecommunications infrastructure from concept to commissioning — combining civil works, radio planning, and program management to bring new coverage on air, on schedule.",
    businessValue:
      "Faster time-to-market for new coverage and capacity, with a single accountable partner for civil, radio, and transmission scopes.",
    capabilities: [
      "Full Turnkey (FTK)",
      "Network Rollout",
      "Site Acquisition",
      "Civil Works",
      "Tower Construction",
      "Steel Structures",
      "Shelters & Passive Infrastructure",
      "Installation & Commissioning",
      "Testing & Acceptance",
      "Network Modernization",
      "Network Expansion",
    ],
    stats: [
      { value: "1,000+", label: "Iraq deployments", color: "red" },
      { value: "239", label: "Ghana deployments", color: "cyan" },
      { value: "230", label: "Sudan deployments", color: "red" },
      { value: "150", label: "Kuwait deployments", color: "cyan" },
    ],
    relatedProjects:
      "Etisalat & du UAE — Mega 3G & 4G Rollout (2010, 2016) · Ericsson Egypt/Oman/Bahrain — Mega 3G & 4G Rollout (2013)",
    photoLabel: "PHOTO — network rollout site under construction",
    photoSrc: "/images/services/communication-tower-and-information-technology.jpg",
    imageSide: "right",
  },
  {
    id: "wireless-fixed-networks",
    category: "engineering-services",
    index: "1.2",
    eyebrow: "WIRELESS & FIXED NETWORKS",
    title: "High-performance connectivity, built for growth",
    description:
      "Delivering high-performance wireless and fixed network solutions that support connectivity, capacity, and future growth for operators and enterprises alike.",
    capabilities: [
      "Radio Access Networks (RAN)",
      "Microwave Transmission",
      "Fiber Optic Networks",
      "FTTH",
      "Backbone & Metro Networks",
      "Indoor Coverage Solutions",
      "Small Cells",
      "Private Networks",
      "Core Network Integration",
      "IP & MPLS Networks",
    ],
    photoLabel: "PHOTO — wireless & fixed network infrastructure",
    photoSrc: "/images/services/wireless-fixed-networks.jpg",
    imageSide: "left",
  },
  {
    id: "fiber-digital",
    category: "engineering-services",
    index: "1.3",
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
    photoSrc: "/images/services/close-glowing-fiber-optics-dark.jpg",
    imageSide: "right",
  },
  {
    id: "data-centers-digital-infrastructure",
    category: "engineering-services",
    index: "1.4",
    eyebrow: "DATA CENTERS & DIGITAL INFRASTRUCTURE",
    title: "Resilient digital infrastructure, designed & built",
    description:
      "Designing, building, and supporting resilient digital infrastructure that powers modern enterprise and telecommunications environments.",
    capabilities: [
      "Data Center Infrastructure",
      "Data Center Fit-Out",
      "Server Rooms",
      "Structured Cabling",
      "Critical Power Systems",
      "Cooling Infrastructure",
      "Edge Data Centers",
      "Disaster Recovery Infrastructure",
    ],
    photoLabel: "PHOTO — data center infrastructure",
    photoSrc: "/images/services/data-center-infrastructure.jpg",
    imageSide: "left",
  },
  {
    id: "enterprise-networks",
    category: "engineering-services",
    index: "1.5",
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
    photoSrc: "/images/services/enterprise-structured-cabling.jpg",
    imageSide: "right",
  },
  {
    id: "managed-services",
    category: "engineering-services",
    index: "1.6",
    eyebrow: "MANAGED OPERATIONS",
    title: "24/7 operations, on your behalf",
    description:
      "Delivering long-term operational excellence through proactive support, maintenance, optimization, and managed services — running NOC, field maintenance, and second-level core/IP back-office support for major operators, currently supporting 11,000+ combined sites across Iraq and Kuwait.",
    capabilities: [
      "Managed Services",
      "Network Operations Center (NOC)",
      "Field Operations",
      "Preventive Maintenance",
      "Corrective Maintenance",
      "Operations & Maintenance (O&M)",
      "Network Optimization",
      "Performance Management",
      "Core Network Support",
      "Level 2 Technical Support",
      "SLA Management",
    ],
    stats: [
      { value: "5,000+", label: "Sites — Zain Iraq", color: "red" },
      { value: "6,000+", label: "Sites — STC/Zain/Ooredoo Kuwait", color: "cyan" },
    ],
    photoLabel: "PHOTO — 24/7 NOC operations floor",
    photoSrc: "/images/services/managed-services-noc.jpg",
    imageSide: "left",
  },
  {
    id: "back-office-noc",
    category: "engineering-services",
    index: "1.7",
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
    photoSrc: "/images/services/back-office-noc.jpg",
    imageSide: "right",
  },
  {
    id: "radio-audit",
    category: "engineering-services",
    index: "1.8",
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
    photoSrc: "/images/services/radio-audit.jpg",
    imageSide: "left",
  },
  {
    id: "engineering-technical-services",
    category: "engineering-services",
    index: "1.9",
    eyebrow: "ENGINEERING & TECHNICAL SERVICES",
    title: "Specialized expertise, at every stage",
    description:
      "Providing specialized engineering expertise throughout planning, implementation, integration, and operational readiness.",
    capabilities: [
      "Network Design",
      "Site Surveys & Technical Audits",
      "Capacity Planning",
      "Infrastructure Assessments",
      "Integration Services",
      "Testing & Commissioning",
      "Technical Documentation",
      "Quality Assurance",
      "Technical Training",
    ],
    photoLabel: "PHOTO — engineering & technical services",
    photoSrc: "/images/services/engineering-technical-services.jpg",
    imageSide: "right",
  },
  {
    id: "power-supply",
    category: "engineering-services",
    index: "1.10",
    eyebrow: "POWER SUPPLY & MAINTENANCE",
    title: "Reliable power for critical sites",
    description:
      "Supply and maintenance of diesel generators and power systems for telecom infrastructure, keeping critical sites running in demanding environments across the region.",
    capabilities: [
      "Diesel Generators",
      "Hybrid Power Systems",
      "Rectifiers & Inverters",
      "Cooling Solutions",
      "Preventive & corrective maintenance",
    ],
    partners: ["Cummins", "Daikin Air Intelligence", "IPT PowerTech Group", "Meico Energy"],
    relatedProjects: "IHS Kuwait (2020) — Power & Diesel Generators Supply & Maintenance",
    photoLabel: "PHOTO — diesel generator & power systems",
    photoSrc: "/images/services/power-supply.jpg",
    imageSide: "left",
  },
  {
    id: "battery-supply",
    category: "engineering-services",
    index: "1.11",
    eyebrow: "BATTERY SUPPLY & INSTALLATION",
    title: "Backup power, commissioned & integrated",
    description:
      "Supply of Lithium and traditional batteries, with warehousing for dismantled and new products, installation across hundreds of sites, commissioning and integration with vendor monitoring systems, and safe relocation of old acid batteries.",
    capabilities: ["Lithium Batteries", "Battery racking & installation", "Monitoring system integration"],
    stats: [
      { value: "750", label: "Batteries · 246 sites (2024)", color: "red" },
      { value: "171", label: "Batteries · 54 sites (2025)", color: "cyan" },
    ],
    photoLabel: "PHOTO — battery racks at telecom site",
    photoSrc: "/images/services/battery-supply.jpg",
    imageSide: "right",
  },
  {
    id: "cybersecurity",
    category: "engineering-services",
    index: "1.12",
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
    photoSrc: "/images/services/cybersecurity.jpg",
    imageSide: "left",
  },
  {
    id: "unified-communications",
    category: "engineering-services",
    index: "1.13",
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
    photoSrc: "/images/services/unified-communications.jpg",
    imageSide: "right",
  },
  {
    id: "cloud-infrastructure",
    category: "engineering-services",
    index: "1.14",
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
    photoSrc: "/images/services/cloud-infrastructure.jpg",
    imageSide: "left",
  },

  // 02 — PMO & Project Delivery
  {
    id: "pmo-project-delivery",
    category: "pmo-project-delivery",
    index: "2.1",
    eyebrow: "GOVERNANCE THAT DRIVES SUCCESSFUL DELIVERY",
    title: "Governance, structure, and leadership for complex programs",
    description:
      "Our PMO services establish the governance, structure, and leadership required to successfully deliver complex infrastructure programs, ensuring alignment with business objectives while maintaining control over cost, schedule, quality, risk, and performance.",
    capabilities: [
      "Enterprise PMO",
      "Program Management",
      "Project Management",
      "Portfolio Management",
      "Planning & Scheduling",
      "Project Controls",
      "Cost Management",
      "Risk Management",
      "Change Management",
      "Quality Management",
      "Resource Management",
      "Governance Frameworks",
      "KPI & Performance Reporting",
      "Executive Dashboards",
      "Transformation Programs",
    ],
    photoLabel: "PHOTO — program governance & executive reporting",
    photoSrc: "/images/services/pmo-project-delivery.jpg",
    imageSide: "right",
  },
  {
    id: "consultancy-resourcing",
    category: "pmo-project-delivery",
    index: "2.2",
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
    photoSrc: "/images/services/consultancy-team.jpg",
    imageSide: "left",
  },

  // 03 — Technical Advisory
  {
    id: "technical-advisory",
    category: "technical-advisory",
    index: "3.1",
    eyebrow: "STRATEGIC INSIGHT. INDEPENDENT EXPERTISE.",
    title: "Informed decisions, backed by engineering knowledge",
    description:
      "Our advisory services help organizations make informed investment, technology, and infrastructure decisions by combining engineering knowledge with practical industry experience and independent technical assessment.",
    capabilities: [
      "Technology Strategy",
      "Digital Transformation Advisory",
      "Infrastructure Planning",
      "Network Strategy",
      "Technical Due Diligence",
      "Vendor Evaluation & Selection",
      "Feasibility Studies",
      "Solution Architecture",
      "Infrastructure Assessments",
      "Technical Audits",
      "Engineering Consulting",
      "RFP Development & Technical Evaluation",
      "Independent Verification & Validation (IV&V)",
    ],
    photoLabel: "PHOTO — advisory workshop / strategy session",
    photoSrc: "/images/services/technical-advisory.jpg",
    imageSide: "right",
  },
  {
    id: "revenue-assurance",
    category: "technical-advisory",
    index: "3.2",
    eyebrow: "REVENUE ASSURANCE",
    title: "Protecting revenue across BSS & IN",
    description:
      "Revenue assurance specialists work across BSS, IN, and VAS layers to identify leakage, validate billing accuracy, and safeguard operator revenue streams as part of Shabakkat's wider back-office and network performance capability.",
    capabilities: ["Revenue leakage detection", "Billing & IN charging validation", "BSS/VAS assurance"],
    photoLabel: "PHOTO — billing & revenue dashboards",
    photoSrc: "/images/services/revenue-assurance.jpg",
    imageSide: "left",
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

export interface ProductGroup {
  title: string;
  items: string[];
}

export const telecomProductGroups: ProductGroup[] = [
  {
    title: "Tower & Energy Solutions",
    items: [
      "Diesel Generators",
      "Hybrid Power Systems",
      "Lithium Batteries",
      "Rectifiers & Inverters",
      "Cooling Solutions",
    ],
  },
  {
    title: "Towers & Passive Infrastructure",
    items: ["Towers & Monopoles", "Telecom Shelters", "Outdoor Cabinets", "Civil Infrastructure"],
  },
  {
    title: "Network Equipment",
    items: [
      "Customer Premises Equipment (CPE)",
      "Fixed Wireless Access",
      "Enterprise Connectivity Solutions",
    ],
  },
  {
    title: "Telecom Accessories",
    items: [
      "Antennas & RF Solutions",
      "Telecom Site Accessories",
      "Power & Connectivity Accessories",
      "Installation Materials",
    ],
  },
];

/** Flat list kept for any consumers that still expect a string array. */
export const equipmentSupply: string[] = telecomProductGroups.flatMap((group) => group.items);
