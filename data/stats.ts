export interface Stat {
  value: string;
  label: string;
  color: "navy" | "cyan" | "red";
}

export const stats: Stat[] = [
  { value: "19+", label: "Years Experience", color: "navy" },
  { value: "20+", label: "Mobile Operators", color: "cyan" },
  { value: "50M+", label: "Subscribers Managed", color: "red" },
  { value: "800+", label: "Employees", color: "navy" },
  { value: "13", label: "Countries", color: "cyan" },
];
