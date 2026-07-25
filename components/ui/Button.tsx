import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "outline-light";
  size?: "md" | "lg";
  className?: string;
  onClick?: () => void;
}

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-cyan text-white hover:bg-red",
  outline: "border-[1.5px] border-navy text-navy hover:border-cyan hover:text-cyan",
  "outline-light": "border-[1.5px] border-white text-white hover:border-cyan hover:text-cyan",
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "px-[30px] py-[14px]",
  lg: "px-9 py-4",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: ButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "inline-block rounded-md font-heading text-sm tracking-[0.05em] transition-colors",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
