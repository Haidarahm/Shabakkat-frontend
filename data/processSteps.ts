export interface ProcessStep {
  number: number;
  color: "red" | "cyan";
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    color: "red",
    title: "ADVISE",
    description:
      "Understanding business objectives, evaluating opportunities, and defining the optimal strategy that guides every stage of delivery.",
  },
  {
    number: 2,
    color: "cyan",
    title: "PLAN",
    description:
      "Establishing governance, project controls, execution frameworks, and delivery roadmaps that keep complex programs accountable and on track.",
  },
  {
    number: 3,
    color: "red",
    title: "ENGINEER",
    description:
      "Designing, deploying, integrating, testing, and commissioning critical infrastructure into resilient, production-ready assets.",
  },
  {
    number: 4,
    color: "cyan",
    title: "OPERATE",
    description:
      "Supporting long-term operations through managed services, maintenance, and technical support that protect uptime and service quality.",
  },
  {
    number: 5,
    color: "red",
    title: "OPTIMIZE",
    description:
      "Driving continuous performance improvement, operational resilience, and sustainable long-term value across every delivered asset.",
  },
];
