export interface Industry {
  title: string;
  description: string;
  color: "red" | "cyan";
}

export const industries: Industry[] = [
  { title: "Telecom Operators", description: "du, Viva, Ooredoo, Zain, STC, GO, Airtel", color: "red" },
  { title: "Network Vendors", description: "Nokia, Ericsson, Huawei, ZTE, Alcatel-Lucent", color: "cyan" },
  { title: "Enterprises", description: "LAN/WAN, data center & cloud clients", color: "red" },
  { title: "Government Sector", description: "Ministries and public institutions", color: "cyan" },
];
