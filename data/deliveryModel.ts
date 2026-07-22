export interface DeliveryModelItem {
  title: string;
  description: string;
  href: string;
  color: "red" | "cyan" | "navy";
}

export const deliveryModel: DeliveryModelItem[] = [
  {
    title: "Engineering Services",
    description:
      "Delivering engineering excellence across the complete infrastructure lifecycle, transforming complex challenges into resilient, scalable, and future-ready digital infrastructure.",
    href: "/services#engineering-services",
    color: "red",
  },
  {
    title: "PMO & Project Delivery",
    description:
      "Providing the governance, leadership, and execution discipline required to successfully deliver complex programs with certainty, accountability, and measurable results.",
    href: "/services#pmo-project-delivery",
    color: "cyan",
  },
  {
    title: "Technical Advisory",
    description:
      "Supporting strategic decision-making through independent engineering expertise, technology consulting, infrastructure planning, and digital transformation advisory.",
    href: "/services#technical-advisory",
    color: "navy",
  },
  {
    title: "Telecom Products & Infrastructure Solutions",
    description:
      "Supplying tower and energy systems, passive infrastructure, network equipment, and telecom accessories that support resilient network build-out and operations.",
    href: "/services#telecom-products-infrastructure",
    color: "red",
  },
];
