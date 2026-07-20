export interface WhyUsItem {
  number: string;
  title: string;
  description: string;
  color: "red" | "cyan";
  fullWidth?: boolean;
}

export const whyUs: WhyUsItem[] = [
  {
    number: "01",
    title: "Integrated Engineering & Advisory Capabilities",
    description:
      "Engineering Services, PMO & Project Delivery, and Technical Advisory operate as one integrated model — giving clients a single accountable partner from strategy through design, delivery, and long-term operations.",
    color: "cyan",
  },
  {
    number: "02",
    title: "Strong PMO & Project Governance Expertise",
    description:
      "Disciplined project controls, risk management, and executive reporting keep complex programs aligned to cost, schedule, quality, and performance — with clear governance at every stage of delivery.",
    color: "red",
  },
  {
    number: "03",
    title: "Multi-Vendor Technical Experience",
    description:
      "Hands-on depth across leading radio, core, transmission, IP, and power vendors — enabling multi-vendor coordination, integration, and optimization without locking clients into a single technology path.",
    color: "cyan",
  },
  {
    number: "04",
    title: "Regional Delivery with Local Market Knowledge",
    description:
      "Regional scale paired with local teams who understand each market's operational realities, regulatory context, and commercial environment — so delivery stays practical, compliant, and commercially sound.",
    color: "red",
  },
  {
    number: "05",
    title: "Long-Term Partnerships Built on Performance and Trust",
    description:
      "Engagements measured in years, not handovers. We build lasting relationships through accountable delivery, transparent communication, and sustained performance — becoming a trusted partner for operators, enterprises, and governments across the region.",
    color: "cyan",
    fullWidth: true,
  },
];
