export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  color: "red" | "cyan";
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Shabakkat proved to always be a trusted and committed partner... providing a wide range of successful services to Zain — Full Turn Key, Program Management, Technical Audit and Benchmarking.",
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
      'The skills, attitude, and dedication displayed by the FTK teams was excellent and well recognized during delivery of Zain Full Turn Key projects in Iraq.',
    author: "Tamer Elkaffas",
    role: "Director of PMO, Ericsson",
    color: "red",
  },
  {
    quote:
      "Appreciation for the special efforts made during the critical security situation in Al-Anbar, maintaining network continuity to serve customers with continuous success.",
    author: "Mohammed Al Charchafchi",
    role: "Acting CEO, Zain Iraq",
    color: "cyan",
  },
  {
    quote:
      'Certificate of merit for professional working and excellent management on the Asiacell MW Swap project — with "0 accident" recorded across the final three months of implementation.',
    author: "Hao Song",
    role: "Iraq D&S Representative, Huawei Technologies",
    color: "red",
  },
];

export const awards: string[] = [
  "🏆 Best BSS Partner — Huawei Core Partner Convention",
  "🏆 Best Network Quality Assurance — 2022",
  "🏆 Huawei ME Core Partner Convention Award — 2019",
  "🏆 DU–KV Datacenter Relocation Award — Nokia Siemens Networks",
  "🏆 Talent Development Award — 2021",
];
