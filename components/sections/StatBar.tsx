import { stats } from "@/data/stats";
import { accentText } from "@/lib/colorMap";

export default function StatBar() {
  return (
    <div className="grid grid-cols-5 border-b border-border-tint bg-bg-tint">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`px-5 py-7 text-center ${i < stats.length - 1 ? "border-r border-navy/[0.14]" : ""}`}
        >
          <div className={`font-heading text-[30px] ${accentText[stat.color]}`}>{stat.value}</div>
          <div className="text-[11.5px] uppercase tracking-[0.05em] text-text-subtle">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
