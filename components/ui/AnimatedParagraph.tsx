import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedParagraphProps {
  children: ReactNode;
  active: boolean;
  className?: string;
  as?: "p" | "div";
  delay?: number;
}

const makeVariants = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay } },
});

export default function AnimatedParagraph({
  children,
  active,
  className = "",
  as = "p",
  delay = 0,
}: AnimatedParagraphProps) {
  const MotionTag = as === "div" ? motion.div : motion.p;
  return (
    <MotionTag
      className={className}
      variants={makeVariants(delay)}
      initial="hidden"
      animate={active ? "visible" : "hidden"}
    >
      {children}
    </MotionTag>
  );
}
