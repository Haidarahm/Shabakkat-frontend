export interface ServiceOverviewItem {
  title: string;
  photoLabel: string;
  photoSrc: string;
  href: string;
}

export const servicesOverview: ServiceOverviewItem[] = [
  {
    title: "Network Rollout",
    photoLabel: "towers",
    photoSrc: "/images/services/network-rollout.jpg",
    href: "/services/network-deployment#network-rollout",
  },
  {
    title: "Managed Services",
    photoLabel: "NOC",
    photoSrc: "/images/services/managed-services-noc.jpg",
    href: "/services/managed-operations#managed-services",
  },
  {
    title: "Consultancy & Resourcing",
    photoLabel: "team",
    photoSrc: "/images/services/consultancy-team.jpg",
    href: "/services/professional-services#consultancy-resourcing",
  },
  {
    title: "Back Office & NOC",
    photoLabel: "control room",
    photoSrc: "/images/services/back-office-noc.jpg",
    href: "/services/managed-operations#back-office-noc",
  },
  {
    title: "Fiber & Digital Infrastructure",
    photoLabel: "fiber network",
    photoSrc: "/images/services/fiber-digital.jpg",
    href: "/services/network-deployment#fiber-digital",
  },
  {
    title: "Radio Audit & Optimization",
    photoLabel: "drive test",
    photoSrc: "/images/services/radio-audit.jpg",
    href: "/services/network-optimization#radio-audit",
  },
  {
    title: "Full Turnkey Site Build",
    photoLabel: "civil works",
    photoSrc: "/images/services/turnkey-civil-works.jpg",
    href: "/services/infrastructure-power#turnkey",
  },
  {
    title: "Power Supply & Maintenance",
    photoLabel: "generators",
    photoSrc: "/images/services/power-supply.jpg",
    href: "/services/infrastructure-power#power-supply",
  },
  {
    title: "Battery Supply & Installation",
    photoLabel: "battery racks",
    photoSrc: "/images/services/battery-supply.jpg",
    href: "/services/infrastructure-power#battery-supply",
  },
  {
    title: "Cybersecurity",
    photoLabel: "security ops",
    photoSrc: "/images/services/cybersecurity.jpg",
    href: "/services/ict-cybersecurity#cybersecurity",
  },
  {
    title: "Revenue Assurance",
    photoLabel: "dashboards",
    photoSrc: "/images/services/revenue-assurance.jpg",
    href: "/services/professional-services#revenue-assurance",
  },
];
