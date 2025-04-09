import { TypingText } from "@/components/TypingAnimation";
import { rethinkSans, urbanist } from "@/lib/fonts";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function V1_HeroSection() {
  const [firstTextComplete, setFirstTextComplete] = useState(false);
  const [secondTextComplete, setSecondTextComplete] = useState(false);

  return (
    <div
      id="home"
      className="flex flex-col py-40 gap-10 items-center shrink-0 min-w-[1440px] w-full min-h-screen relative"
    >
      <div
        className="absolute top-0 left-0 right-0 w-full h-[900px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg/v1_hero.png')" }}
      />
      <div
        className="absolute top-[500px] inset-0 bg-gradient-to-b from-transparent via-black to-[#03002A]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 40%, #03002A 80%)",
        }}
      />
      <div className="relative z-20 flex flex-col justify-center items-center self-stretch gap-4 px-[120px]">
        <TypingText
          text="DON'T JUST WITNESS THE REAL ESTATE REVOLUTION."
          className={`text-white text-center ${rethinkSans.className} text-[44px] font-bold leading-[1.4]`}
          startDelay={0}
          showCursor={false}
          speed={75}
          onComplete={() => setFirstTextComplete(true)}
        />
        <TypingText
          text="OWN IT."
          className={`text-white text-center ${rethinkSans.className} text-[44px] font-bold leading-[1.4]`}
          startDelay={0}
          isPreviousComplete={firstTextComplete}
          showCursor={true}
          placeholder="&nbsp;"
          speed={75}
          onComplete={() => setSecondTextComplete(true)}
        />
      </div>
      <div className="relative z-20 flex flex-col items-center gap-4 self-stretch w-full mt-100">
        <span className="text-white text-center font-[Rethink_Sans] text-[32px] font-semibold leading-[2]">
          The old ways are dying. Will you profit from what comes next?
        </span>
        <span className="text-white text-center font-[Urbanist] text-[24px] font-normal leading-[1.6]">
          Bestia has built an AI ecosystem that&apos;s removing these
          inefficiencies
          <br />
          and already reshaping how real estate moves.
        </span>
      </div>

      <div className="flex flex-col w-[344px] self-center items-center gap-10 py-25 z-20">
        <span
          className={`text-white text-center ${rethinkSans.className} text-[24px] font-semibold leading-[2] uppercase`}
        >
          Don&apos;t wait for Permission
        </span>

        <button className="flex w-full flex-row justify-center items-center gap-2.5 self-stretch flex-shrink-0 h-[66px] rounded-[15px] bg-[#E68A00]">
          <FontAwesomeIcon icon={faArrowRight} width={32} height={32} />
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
    </div>
  );
}

export default V1_HeroSection;
