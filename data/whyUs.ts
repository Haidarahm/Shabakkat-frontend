export interface WhyUsItem {
  number: string;
  title: string;
  description: string;
  color: "red" | "cyan";
}

export const whyUs: WhyUsItem[] = [
  { number: "01", title: "Attractive Market", description: "Positioned in a high-demand regional telecom & ICT market.", color: "red" },
  { number: "02", title: "Robust Business Model", description: "Proven delivery frameworks across every service line.", color: "cyan" },
  { number: "03", title: "Lucrative Sector", description: "Sustained growth across telecom and enterprise ICT.", color: "red" },
  { number: "04", title: "Ready Platform to Grow", description: "Infrastructure and teams built to scale with client demand.", color: "cyan" },
  { number: "05", title: "Strong CSP Relationships", description: "Trusted, long-term partnerships with regional operators.", color: "red" },
  { number: "06", title: "Reliable Execution", description: "Consistent delivery across hundreds of projects.", color: "cyan" },
  { number: "07", title: "Profitable Track Record", description: "19+ years of sustained, profitable operations.", color: "red" },
  { number: "08", title: "Strong Financial Position", description: "Stability that supports long-cycle telecom engagements.", color: "cyan" },
  { number: "09", title: "Unique Service Portfolio", description: "End-to-end coverage from civil works to cybersecurity.", color: "red" },
];
