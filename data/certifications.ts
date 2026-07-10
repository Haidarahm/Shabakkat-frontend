export interface Certification {
  code: string;
  label: string;
}

export const certifications: Certification[] = [
  { code: "ISO 9001", label: "Quality Mgmt." },
  { code: "ISO 14001", label: "Environmental" },
  { code: "ISO 45001", label: "OH&S Mgmt." },
  { code: "ISO/IEC 27001", label: "Info. Security" },
  { code: "NEBOSH IGC", label: "HSE Certified" },
  { code: "TM Forum", label: "Career Certified" },
];
