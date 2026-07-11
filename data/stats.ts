export interface Stat {
  value: number;
  suffix?: string;
  label: string;
  color: "navy" | "cyan" | "red";
}

export const stats: Stat[] = [
  { value: 19, suffix: "+", label: "Years Experience", color: "navy" },
  { value: 20, suffix: "+", label: "Mobile Operators", color: "cyan" },
  { value: 50, suffix: "M+", label: "Subscribers Managed", color: "red" },
  { value: 800, suffix: "+", label: "Employees", color: "navy" },
  { value: 13, label: "Countries", color: "cyan" },
];
