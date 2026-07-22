export interface Certification {
  code: string;
  title: string;
  logoSrc: string;
}

export const certifications: Certification[] = [
  {
    code: "ISO 9001",
    title: "ISO 9001 Quality Management System",
    logoSrc: "/images/certs/iso-9001.svg",
  },
  {
    code: "ISO 14001",
    title: "ISO 14001 Environmental Management System",
    logoSrc: "/images/certs/iso-14001.svg",
  },
  {
    code: "ISO 45001",
    title: "ISO 45001 Occupational Health & Safety Management System",
    logoSrc: "/images/certs/iso-45001.svg",
  },
  {
    code: "ISO/IEC 27001",
    title: "ISO/IEC 27001 Information Security Management System",
    logoSrc: "/images/certs/iso-27001.svg",
  },
  {
    code: "TM Forum",
    title: "TM Forum Career Certified",
    logoSrc: "/images/certs/tm-forum.svg",
  },
];
