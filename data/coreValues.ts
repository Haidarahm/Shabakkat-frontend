export interface CoreValue {
  title: string;
  description: string;
  color: "red" | "cyan" | "navy";
}

export const coreValues: CoreValue[] = [
  {
    title: "Integrity",
    description: "We build trust through accountability, transparency, and ethical leadership.",
    color: "red",
  },
  {
    title: "Excellence",
    description: "We pursue the highest standards in engineering, project delivery, and operational performance.",
    color: "cyan",
  },
  {
    title: "Innovation",
    description: "We embrace forward-thinking solutions that enable sustainable digital transformation.",
    color: "navy",
  },
  {
    title: "Collaboration",
    description: "We work alongside our clients and partners to achieve shared success.",
    color: "red",
  },
  {
    title: "Safety",
    description:
      "We are committed to protecting people, assets, and the environment through uncompromising HSEQ practices.",
    color: "cyan",
  },
];
