import { ReactNode } from "react";
import styles from './BounceAnimation.module.css';

interface BounceAnimationProps {
  children: ReactNode;
  className?: string;
}

export const BounceAnimation = ({
  children,
  className = "",
}: BounceAnimationProps) => {
  return (
    <div className={`${styles.bounce} ${className}`}>
      {children}
    </div>
  );
};
