import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface StaggerGridProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  amount?: number;
}

export default function StaggerGrid({
  children,
  className = "",
  stagger = 0.09,
  amount = 0.2,
}: StaggerGridProps) {
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger } },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}
