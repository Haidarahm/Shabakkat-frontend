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
  {
    id: "telecom-products-infrastructure",
    index: "04",
    title: "Telecom Products & Infrastructure Solutions",
    description:
      "Supplying the tower, energy, passive infrastructure, network equipment, and accessories required to build, power, and sustain critical telecommunications sites.",
  },
];

export interface ServiceDetail {
  id: string;
  category: string;
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  capabilities?: string[];
  photoLabel: string;
  photoSrc?: string;
  imageSide: "left" | "right";
}

/** Service detail blocks — exact subsections from the content doc. */
export const servicesDetail: ServiceDetail[] = [
  // 01 — Engineering Services
  {
    id: "network-rollout",
    category: "engineering-services",
    index: "1.1",
    eyebrow: "NETWORK INFRASTRUCTURE & DEPLOYMENT",
    title: "Network Infrastructure & Deployment",
    description:
      "Planning, designing, building, and expanding telecommunications infrastructure from concept to commissioning.",
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
    photoLabel: "PHOTO — network rollout site under construction",
    photoSrc: "/images/services/communication-tower-and-information-technology.jpg",
    imageSide: "right",
  },
  {
    id: "wireless-fixed-networks",
    category: "engineering-services",
    index: "1.2",
    eyebrow: "WIRELESS & FIXED NETWORKS",
    title: "Wireless & Fixed Networks",
    description:
      "Delivering high-performance wireless and fixed network solutions that support connectivity, capacity, and future growth.",
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
    id: "data-centers-digital-infrastructure",
    category: "engineering-services",
    index: "1.3",
    eyebrow: "DATA CENTERS & DIGITAL INFRASTRUCTURE",
    title: "Data Centers & Digital Infrastructure",
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
    imageSide: "right",
  },
  {
    id: "managed-services",
    category: "engineering-services",
    index: "1.4",
    eyebrow: "MANAGED OPERATIONS",
    title: "Managed Operations",
    description:
      "Delivering long-term operational excellence through proactive support, maintenance, optimization, and managed services.",
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
    photoLabel: "PHOTO — 24/7 NOC operations floor",
    photoSrc: "/images/services/managed-services-noc.jpg",
    imageSide: "left",
  },
  {
    id: "engineering-technical-services",
    category: "engineering-services",
    index: "1.5",
    eyebrow: "ENGINEERING & TECHNICAL SERVICES",
    title: "Engineering & Technical Services",
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

  // 02 — PMO & Project Delivery
  {
    id: "pmo-project-delivery",
    category: "pmo-project-delivery",
    index: "2.1",
    eyebrow: "PMO & PROJECT DELIVERY",
    title: "Governance That Drives Successful Delivery",
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

  // 03 — Technical Advisory
  {
    id: "technical-advisory",
    category: "technical-advisory",
    index: "3.1",
    eyebrow: "TECHNICAL ADVISORY",
    title: "Strategic Insight. Independent Expertise.",
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

  // 04 — Telecom Products & Infrastructure Solutions
  {
    id: "tower-energy-solutions",
    category: "telecom-products-infrastructure",
    index: "4.1",
    eyebrow: "TOWER & ENERGY SOLUTIONS",
    title: "Tower & Energy Solutions",
    description:
      "Power and energy systems that keep telecom sites running reliably — from diesel generators and hybrid power to batteries, rectifiers, and cooling.",
    capabilities: [
      "Diesel Generators",
      "Hybrid Power Systems",
      "Lithium Batteries",
      "Rectifiers & Inverters",
      "Cooling Solutions",
    ],
    photoLabel: "PHOTO — tower & energy solutions",
    photoSrc: "/images/services/data-center-infrastructure.jpg",
    imageSide: "right",
  },
  {
    id: "towers-passive-infrastructure",
    category: "telecom-products-infrastructure",
    index: "4.2",
    eyebrow: "TOWERS & PASSIVE INFRASTRUCTURE",
    title: "Towers & Passive Infrastructure",
    description:
      "Structural and passive infrastructure that supports network deployment — towers, monopoles, shelters, outdoor cabinets, and civil works.",
    capabilities: [
      "Towers & Monopoles",
      "Telecom Shelters",
      "Outdoor Cabinets",
      "Civil Infrastructure",
    ],
    photoLabel: "PHOTO — towers & passive infrastructure",
    photoSrc: "/images/services/communication-tower-and-information-technology.jpg",
    imageSide: "left",
  },
  {
    id: "network-equipment",
    category: "telecom-products-infrastructure",
    index: "4.3",
    eyebrow: "NETWORK EQUIPMENT",
    title: "Network Equipment",
    description:
      "Connectivity equipment for operators and enterprises — CPE, fixed wireless access, and enterprise connectivity solutions.",
    capabilities: [
      "Customer Premises Equipment (CPE)",
      "Fixed Wireless Access",
      "Enterprise Connectivity Solutions",
    ],
    photoLabel: "PHOTO — network equipment",
    photoSrc: "/images/services/wireless-fixed-networks.jpg",
    imageSide: "right",
  },
  {
    id: "telecom-accessories",
    category: "telecom-products-infrastructure",
    index: "4.4",
    eyebrow: "TELECOM ACCESSORIES",
    title: "Telecom Accessories",
    description:
      "Installation materials and accessories that complete the site build — antennas, RF solutions, power accessories, and connectivity materials.",
    capabilities: [
      "Antennas & RF Solutions",
      "Telecom Site Accessories",
      "Power & Connectivity Accessories",
      "Installation Materials",
    ],
    photoLabel: "PHOTO — telecom accessories",
    photoSrc: "/images/services/enterprise-structured-cabling.jpg",
    imageSide: "left",
  },
];

export interface ProductGroup {
  title: string;
  items: string[];
}

/** @deprecated Prefer servicesDetail entries under telecom-products-infrastructure. Kept for reference. */
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
