import { motion, type Variants } from "framer-motion";

interface AnimatedTitleProps {
  text: string;
  className?: string;
  as?: "h1" | "h2";
  onAnimationComplete?: () => void;
}

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09 },
  },
};

const word: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function AnimatedTitle({
  text,
  className = "",
  as = "h2",
  onAnimationComplete,
}: AnimatedTitleProps) {
  const MotionTag = as === "h1" ? motion.h1 : motion.h2;
  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      onAnimationComplete={onAnimationComplete}
    >
      {text.split(" ").map((w, i) => (
        <motion.span key={i} variants={word} className="mr-[0.28em] inline-block last:mr-0">
          {w}
        </motion.span>
      ))}
    </MotionTag>
  );
}
