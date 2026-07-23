import type { Stat } from "@/data/stats";
import CountUp from "@/components/ui/CountUp";

interface StatBarProps {
  stats: Stat[];
}

export default function StatBar({ stats }: StatBarProps) {
  return (
    <div className="section-px relative z-10 -mt-8 sm:-mt-10 lg:-mt-12">
      <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-border bg-white px-4 py-5 shadow-[0_8px_24px_rgba(16,42,67,0.08)] sm:py-6"
          >
            <div className="font-heading text-[22px] text-navy sm:text-[26px] lg:text-[28px]">
              <CountUp to={stat.value} duration={2} />
              {stat.suffix}
            </div>
            <div className="mt-1.5 text-[12px] text-text-muted">{stat.label}</div>
            <div className="mt-2.5 h-[3px] w-6 rounded-full bg-cyan" />
          </div>
        ))}
      </div>
    </div>
  );
}
