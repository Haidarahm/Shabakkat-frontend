import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export default function StaggerItem({ children, className = "" }: StaggerItemProps) {
  return (
    <motion.div variants={item} className={`h-full ${className}`.trim()}>
      {children}
    </motion.div>
  );
}
