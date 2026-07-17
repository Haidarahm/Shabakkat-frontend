export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 21, suffix: "+", label: "Years Experience" },
  { value: 15, label: "Countries" },
  { value: 900, suffix: "+", label: "Professionals" },
  { value: 20, suffix: "+", label: "Mobile Operators" },
  { value: 50, suffix: "M+", label: "Subscribers Managed" },
];
