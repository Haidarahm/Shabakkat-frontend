export interface WhyUsItem {
  number: string;
  title: string;
  description: string;
  color: "red" | "cyan";
}

export const whyUs: WhyUsItem[] = [
  { number: "01", title: "21+ Years of Engineering Excellence", description: "Two decades of delivering complex infrastructure programs across the Middle East and Africa.", color: "red" },
  { number: "02", title: "Operations Across 15 Countries", description: "Regional scale paired with local market knowledge in every country we serve.", color: "cyan" },
  { number: "03", title: "900+ Engineering & Technical Professionals", description: "A multidisciplinary team supporting every stage of the infrastructure lifecycle.", color: "red" },
  { number: "04", title: "Integrated Engineering & Advisory Capabilities", description: "Engineering Services, PMO & Project Delivery, and Technical Advisory within a single organization.", color: "cyan" },
  { number: "05", title: "Strong PMO & Project Governance Expertise", description: "Governance frameworks that keep cost, schedule, quality, and risk under control.", color: "red" },
  { number: "06", title: "Multi-Vendor Technical Experience", description: "Depth across leading equipment vendors and technologies.", color: "cyan" },
  { number: "07", title: "Regional Delivery with Local Market Knowledge", description: "Understanding the operational, regulatory, and commercial realities of every market.", color: "red" },
  { number: "08", title: "Long-Term Partnerships Built on Performance and Trust", description: "Sustained relationships built on performance, accountability, and long-term value.", color: "cyan" },
];
