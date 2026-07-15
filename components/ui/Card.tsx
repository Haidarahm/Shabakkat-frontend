import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "link";
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`h-full rounded-xl border border-border transition-[box-shadow,transform] duration-200 hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(20,24,28,0.12)] ${className}`}
    >
      {children}
    </div>
  );
}
