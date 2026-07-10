export interface ProcessStep {
  number: number;
  color: "red" | "cyan";
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  { number: 1, color: "red", title: "MANAGE", description: "Coordinate multi-vendor, multi-technology environments under a single point of accountability — from Nokia and Huawei to Ericsson and Cisco." },
  { number: 2, color: "cyan", title: "OPERATE", description: "Run day-to-day network operations with efficiency and quality benefits built in, from field maintenance to 24/7 NOC coverage." },
  { number: 3, color: "red", title: "MONITOR", description: "Track network health with purpose-built tools and processes, surfacing issues before they affect subscribers." },
  { number: 4, color: "cyan", title: "IMPROVE", description: "Benchmark performance against KPIs and SLAs, translating findings into targeted optimization actions." },
  { number: 5, color: "red", title: "EVOLVE", description: "Feed lessons learned back into the cycle — an ascent with progression that compounds across every engagement." },
];
