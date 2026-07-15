export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 22, suffix: "+", label: "Years Experience" },
  { value: 20, suffix: "+", label: "Mobile Operators" },
  { value: 50, suffix: "M+", label: "Subscribers Managed" },
  { value: 800, suffix: "+", label: "Employees" },
  { value: 13, label: "Countries" },
];
