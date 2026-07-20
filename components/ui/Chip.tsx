import type { ReactNode } from "react";

export default function Chip({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-md border border-border bg-white px-3.5 py-2 font-heading text-[13px] text-navy ${className}`}
    >
      {children}
    </div>
  );
}
