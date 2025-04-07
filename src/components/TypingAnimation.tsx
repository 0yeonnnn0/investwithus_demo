import { useEffect, useState } from "react";
import Cursor from "./Cursor";

export const useTypingAnimation = (
  text: string,
  delay: number = 50,
  startDelay: number = 0
) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsStarted(true);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [startDelay]);

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
  reset?: boolean;
  showCursor?: boolean;
  placeholder?: string;
}

export const TypingText = ({
  text,
  className,
  startDelay = 0,
  isPreviousComplete = true,
  onComplete,
  reset,
  showCursor = false,
  placeholder = "",
}: TypingTextProps) => {
  const { displayText, isComplete, isStarted } = useTypingAnimation(
    text,
    50,
    startDelay
  );
  const shouldShowCursor =
    showCursor && isStarted && (!isComplete || isPreviousComplete);

  useEffect(() => {
    if (isComplete && onComplete) {
      onComplete();
    }
  }, [isComplete, onComplete]);

  return (
    <h1 className={`${className} min-h-[1.4em] animate-bounce}`}>
      {displayText || placeholder}
      {shouldShowCursor && <Cursor />}
    </h1>
  );
};
