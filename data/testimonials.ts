export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  color: "red" | "cyan";
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Shabakkat proved to always be a trusted and committed partner... providing a wide range of successful services to Zain — Full Turnkey, Program Management, Technical Audit and Benchmarking.",
    author: "Khaled A. Al-Hajeri",
    role: "Group CTO, Zain Group",
    color: "red",
  },
  {
    quote:
      "Zain KSA always found Shabakkat a reliable and committed partner with a wide range of engineering services, great dedication, and high-level knowledge of different vendor equipment.",
    author: "Ismail Fikree",
    role: "COO, Zain KSA",
    color: "cyan",
  },
  {
    quote:
      'The skills, attitude, and dedication displayed by the FTK teams were excellent and well recognized during delivery of Zain Full Turnkey projects in Iraq.',
    author: "Tamer Elkaffas",
    role: "Director of PMO, Ericsson",
    color: "red",
  },
  {
    quote:
      "We appreciate the special efforts made during the critical security situation in Al-Anbar, maintaining network continuity to serve customers with continuous success.",
    author: "Mohammed Al Charchafchi",
    role: "Acting CEO, Zain Iraq",
    color: "cyan",
  },
  {
    quote:
      'Certificate of merit for professional working and excellent management on the Asiacell MW Swap project — with "0 accidents" recorded across the final three months of implementation.',
    author: "Hao Song",
    role: "Iraq D&S Representative, Huawei Technologies",
    color: "red",
  },
];

export interface Award {
  label: string;
  /** Omit when the award year is unknown — those sort after dated awards. */
  year?: number;
}

export const awards: Award[] = [
  { year: 2019, label: "Huawei ME Core Partner Convention Award" },
  { year: 2021, label: "Talent Development Award" },
  { year: 2022, label: "Best Network Quality Assurance" },
  { label: "Best BSS Partner — Huawei Core Partner Convention" },
  { label: "DU–KV Datacenter Relocation Award — Nokia Siemens Networks" },
];
