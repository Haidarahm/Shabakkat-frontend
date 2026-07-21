import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface StaggerGridProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  amount?: number;
  /**
   * When true, animates in on mount instead of waiting for a scroll-triggered
   * viewport check. Use this for grids that render directly below a hero and
   * are therefore already on-screen at load — `whileInView`'s IntersectionObserver
   * can miss that initial in-view state (it only recovers on the next scroll/layout
   * change), leaving the content invisible until the user scrolls.
   */
  animateOnMount?: boolean;
  /** Each child animates when it enters the viewport (no grid-level stagger). */
  perItemInView?: boolean;
}

export default function StaggerGrid({
  children,
  className = "",
  stagger = 0.09,
  amount = 0.2,
  animateOnMount = false,
  perItemInView = false,
}: StaggerGridProps) {
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger } },
  };

  if (perItemInView) {
    return <div className={className}>{children}</div>;
  }

  if (animateOnMount) {
    return (
      <motion.div className={className} variants={container} initial="hidden" animate="visible">
        {children}
      </motion.div>
    );
  }

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
