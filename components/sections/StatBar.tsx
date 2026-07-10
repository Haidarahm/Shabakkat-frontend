import { stats } from "@/data/stats";
import { accentText } from "@/lib/colorMap";

export default function StatBar() {
  return (
    <div className="grid grid-cols-2 border-b border-border-tint bg-bg-tint sm:grid-cols-3 lg:grid-cols-5">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`px-5 py-5 text-center sm:py-7 ${i < stats.length - 1 ? "lg:border-r lg:border-navy/[0.14]" : ""}`}
        >
          <div className={`font-heading text-[22px] sm:text-[26px] lg:text-[30px] ${accentText[stat.color]}`}>
            {stat.value}
          </div>
          <div className="text-[11.5px] uppercase tracking-[0.05em] text-text-subtle">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
