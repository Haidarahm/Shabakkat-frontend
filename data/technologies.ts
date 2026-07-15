export interface TechnologyGroup {
  title: string;
  description: string;
  color: "red" | "cyan";
}

export const technologies: TechnologyGroup[] = [
  { title: "Vendor Equipment", description: "Nokia, Huawei, Ericsson, NEC, Cisco, Harris Stratex, ZTE, Alcatel-Lucent", color: "red" },
  { title: "Core & Network Layers", description: "RAN/Core/Datacom, Transmission/IP Backbone, Fiber Networks", color: "cyan" },
  { title: "Security & Tools", description: "Fidelis Cybersecurity, RSA, SEQRED, EXFO, Oracle", color: "red" },
  { title: "Power & Civil Partners", description: "Cummins, Daikin, IPT PowerTech, Mitas Industry, Meico Energy", color: "cyan" },
];
