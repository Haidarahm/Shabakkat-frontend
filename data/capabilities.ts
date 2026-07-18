export interface Capability {
  title: string;
  description: string;
  href: string;
}

/** Three core capabilities from the content doc (Engineering · PMO · Advisory). */
export const capabilities: Capability[] = [
  {
    title: "Engineering Services",
    description:
      "Delivering engineering excellence across the complete infrastructure lifecycle, transforming complex challenges into resilient, scalable, and future-ready digital infrastructure.",
    href: "/services/engineering-services",
  },
  {
    title: "PMO & Project Delivery",
    description:
      "Providing the governance, leadership, and execution discipline required to successfully deliver complex programs with certainty, accountability, and measurable results.",
    href: "/services/pmo-project-delivery",
  },
  {
    title: "Technical Advisory",
    description:
      "Supporting strategic decision-making through independent engineering expertise, technology consulting, infrastructure planning, and digital transformation advisory.",
    href: "/services/technical-advisory",
  },
];
