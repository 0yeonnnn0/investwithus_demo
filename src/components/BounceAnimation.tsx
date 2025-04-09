import { ReactNode } from "react";
import { motion } from "framer-motion";

interface BounceAnimationProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  bounceHeight?: number;
}

export const BounceAnimation = ({
  children,
  className = "",
  duration = 2,
  bounceHeight = 8,
}: BounceAnimationProps) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -bounceHeight, 0],
      }}
      transition={{
        duration: duration,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  );
};
