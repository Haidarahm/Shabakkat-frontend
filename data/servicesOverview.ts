export interface ServiceOverviewItem {
  title: string;
  photoLabel: string;
  href: string;
}

export const servicesOverview: ServiceOverviewItem[] = [
  { title: "Network Rollout", photoLabel: "towers", href: "/services#network-rollout" },
  { title: "Managed Services", photoLabel: "NOC", href: "/services#managed-services" },
  { title: "Consultancy & Resourcing", photoLabel: "team", href: "/services#consultancy-resourcing" },
  { title: "Back Office & NOC", photoLabel: "control room", href: "/services#back-office-noc" },
  { title: "Radio Audit & Optimization", photoLabel: "drive test", href: "/services#radio-audit" },
  { title: "Full Turnkey Site Build", photoLabel: "civil works", href: "/services#turnkey" },
  { title: "Power Supply & Maintenance", photoLabel: "generators", href: "/services#power-supply" },
  { title: "Battery Supply & Installation", photoLabel: "battery racks", href: "/services#battery-supply" },
  { title: "Cybersecurity", photoLabel: "security ops", href: "/services#cybersecurity" },
  { title: "Revenue Assurance", photoLabel: "dashboards", href: "/services#revenue-assurance" },
];
