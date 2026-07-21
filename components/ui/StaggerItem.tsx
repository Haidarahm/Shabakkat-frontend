import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  /** Animate when this item enters the viewport (use with StaggerGrid perItemInView). */
  inView?: boolean;
}

export default function StaggerItem({ children, className = "", inView = false }: StaggerItemProps) {
  if (inView) {
    return (
      <motion.div
        className={`h-full ${className}`.trim()}
        variants={item}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div variants={item} className={`h-full ${className}`.trim()}>
      {children}
    </motion.div>
  );
}
