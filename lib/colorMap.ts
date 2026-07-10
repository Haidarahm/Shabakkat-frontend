export type AccentColor = "red" | "cyan" | "navy";

export const accentText: Record<AccentColor, string> = {
  red: "text-red",
  cyan: "text-cyan",
  navy: "text-navy",
};

export const accentBg: Record<AccentColor, string> = {
  red: "bg-red",
  cyan: "bg-cyan",
  navy: "bg-navy",
};

export const accentBorder: Record<AccentColor, string> = {
  red: "border-red",
  cyan: "border-cyan",
  navy: "border-navy",
};
