import RollingLogo from "@/components/RollingLogo";
import { rethinkSans, urbanist } from "@/lib/fonts";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function V1_HeroSection() {
  return (
    <div
      className="flex flex-col gap-40 items-center shrink-0 w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg/v1_hero.png')" }}
    >
      <div className="flex flex-col justify-center items-center self-stretch gap-4 px-[120px] mt-40">
        <h1
          className={`text-white text-center ${rethinkSans.className} text-[44px] font-bold leading-[1.4]`}
        >
          DON'T JUST WITNESS THE REAL ESTATE REVOLUTION.
        </h1>
        <h1
          className={`text-white text-center ${rethinkSans.className} text-[44px] font-bold leading-[1.4]`}
        >
          OWN IT.
        </h1>
      </div>
      <div className="flex flex-col items-center gap-4 self-stretch w-full mt-100">
        <span className="text-white text-center font-[Rethink_Sans] text-[32px] font-semibold leading-[2]">
          The old ways are dying. Will you profit from what comes next?
        </span>
        <span className="text-white text-center font-[Urbanist] text-[24px] font-normal leading-[1.6]">
          Bestia has built an AI ecosystem that’s removing these inefficiencies
          <br />
          and already reshaping how real estate moves.
        </span>
      </div>

      <div className="flex flex-col w-[344px] self-center items-center gap-4 mt-20 ">
        <span
          className={`text-white text-center ${rethinkSans.className} text-[24px] font-semibold leading-[2] uppercase`}
        >
          Don’t wait for Permission
        </span>
        <button className="flex flex-row justify-center items-center gap-2.5 self-stretch flex-shrink-0 h-[66px] rounded-[15px] bg-[#E68A00]">
          <FontAwesomeIcon icon={faArrowRight} />
          <span className="text-black font-[Urbanist] text-[24px] font-bold leading-[1.6]">
            I’m Claiming My Stake
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
