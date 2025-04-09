import { useEffect, useState } from "react";
import Cursor from "./Cursor";

export const useTypingAnimation = (
  text: string,
  delay: number = 50,
  startDelay: number = 0,
  shouldStart: boolean = true
) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (!shouldStart) return;

    const startTimer = setTimeout(() => {
      setIsStarted(true);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [startDelay, shouldStart]);

  useEffect(() => {
    if (!isStarted) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay, isStarted]);

  return { displayText, isComplete: currentIndex === text.length, isStarted };
};

interface TypingTextProps {
  text: string;
  className: string;
  startDelay?: number;
  isPreviousComplete?: boolean;
  onComplete?: () => void;
  showCursor?: boolean;
  placeholder?: string;
  speed?: number;
}

export const TypingText = ({
  text,
  className,
  startDelay = 0,
  isPreviousComplete = true,
  onComplete,
  showCursor = false,
  placeholder = "",
  speed = 50,
}: TypingTextProps) => {
  const { displayText, isComplete, isStarted } = useTypingAnimation(
    text,
    speed,
    startDelay,
    isPreviousComplete
  );
  const shouldShowCursor =
    showCursor && isStarted && (!isComplete || isPreviousComplete);

  useEffect(() => {
    if (isComplete && onComplete) {
      onComplete();
    }
  }, [isComplete, onComplete]);

  return (
    <h1 className={`${className} min-h-[1.4em]`}>
      {displayText || placeholder}
      {shouldShowCursor && <Cursor />}
    </h1>
  );
};
