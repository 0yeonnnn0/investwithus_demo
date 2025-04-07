import RollingLogo from "@/components/RollingLogo";
import Cursor from "@/components/Cursor";
import { rethinkSans, urbanist } from "@/lib/fonts";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const useTypingAnimation = (
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

const TypingText = ({
  text,
  className,
  startDelay = 0,
  isPreviousComplete = true,
  onComplete,
  reset,
  showCursor = false,
}: {
  text: string;
  className: string;
  startDelay?: number;
  isPreviousComplete?: boolean;
  onComplete?: () => void;
  reset?: boolean;
  showCursor?: boolean;
}) => {
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
    <h1 className={className}>
      {displayText}
      {shouldShowCursor && <Cursor />}
    </h1>
  );
};

function V1_HeroSection() {
  const [firstTextComplete, setFirstTextComplete] = useState(false);
  const [secondTextComplete, setSecondTextComplete] = useState(false);
  const [reset, setReset] = useState(false);
  const [canStartSecond, setCanStartSecond] = useState(false);

  useEffect(() => {
    if (firstTextComplete) {
      const timer = setTimeout(() => {
        setCanStartSecond(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [firstTextComplete]);

  useEffect(() => {
    if (firstTextComplete && secondTextComplete) {
      const timer = setTimeout(() => {
        setFirstTextComplete(false);
        setSecondTextComplete(false);
        setCanStartSecond(false);
        setReset((prev) => !prev);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [firstTextComplete, secondTextComplete]);

  return (
    <div
      className="flex flex-col gap-40 items-center shrink-0 w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg/v1_hero.png')" }}
    >
      <div className="flex flex-col justify-center items-center self-stretch gap-4 px-[120px] mt-40">
        <TypingText
          key={`first-${reset}`}
          text="DON&apos;T JUST WITNESS THE REAL ESTATE REVOLUTION."
          className={`text-white text-center ${rethinkSans.className} text-[44px] font-bold leading-[1.4]`}
          startDelay={0}
          onComplete={() => setFirstTextComplete(true)}
          showCursor={false}
        />
        <TypingText
          key={`second-${reset}`}
          text="OWN IT."
          className={`text-white text-center ${rethinkSans.className} text-[44px] font-bold leading-[1.4]`}
          startDelay={canStartSecond ? 0 : 10000}
          isPreviousComplete={firstTextComplete}
          onComplete={() => setSecondTextComplete(true)}
          showCursor={true}
        />
      </div>
      <div className="flex flex-col items-center gap-4 self-stretch w-full mt-100">
        <span className="text-white text-center font-[Rethink_Sans] text-[32px] font-semibold leading-[2]">
          The old ways are dying. Will you profit from what comes next?
        </span>
        <span className="text-white text-center font-[Urbanist] text-[24px] font-normal leading-[1.6]">
          Bestia has built an AI ecosystem that&apos;s removing these inefficiencies
          <br />
          and already reshaping how real estate moves.
        </span>
      </div>

      <div className="flex flex-col w-[344px] self-center items-center gap-4 mt-20 ">
        <span
          className={`text-white text-center ${rethinkSans.className} text-[24px] font-semibold leading-[2] uppercase`}
        >
          Don&apos;t wait for Permission
        </span>
        <button className="flex flex-row justify-center items-center gap-2.5 self-stretch flex-shrink-0 h-[66px] rounded-[15px] bg-[#E68A00]">
          <FontAwesomeIcon icon={faArrowRight} />
          <span className="text-black font-[Urbanist] text-[24px] font-bold leading-[1.6]">
            I&apos;m Claiming My Stake
          </span>
        </button>
        <span
          className={`text-white text-center ${urbanist.className} text-[16px] font-normal leading-[1.6]`}
        >
          $33,333.00 USD Minimum Investment
        </span>
      </div>
      <div className="mt-auto w-full">
        <RollingLogo className="bg-[#F1F3F7] py-8" />
      </div>
    </div>
  );
}

export default V1_HeroSection;
