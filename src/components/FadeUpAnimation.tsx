import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeUpAnimationProps {
  children: ReactNode;
  delay?: number;
}

export const FadeUpAnimation = ({ children, delay = 0 }: FadeUpAnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}; 