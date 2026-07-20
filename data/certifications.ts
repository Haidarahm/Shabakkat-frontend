export interface Certification {
  code: string;
  label: string;
  logoSrc: string;
}

export const certifications: Certification[] = [
  { code: "ISO 9001", label: "Quality Mgmt.", logoSrc: "/images/certs/iso-9001.svg" },
  { code: "ISO 14001", label: "Environmental", logoSrc: "/images/certs/iso-14001.svg" },
  { code: "ISO 45001", label: "OH&S Mgmt.", logoSrc: "/images/certs/iso-45001.svg" },
  { code: "ISO/IEC 27001", label: "Info. Security", logoSrc: "/images/certs/iso-27001.svg" },
  { code: "TM Forum", label: "Career Certified", logoSrc: "/images/certs/tm-forum.svg" },
];
