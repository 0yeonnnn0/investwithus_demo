"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { urbanist } from "@/lib/fonts";

function ReadyToInvest() {
  const pathname = usePathname();
  const isV1 = pathname === "/v1";
  const isV2 = pathname === "/v2";

  return (
    <div
      id="invest"
      className={`flex min-w-[1440px] px-[122px] flex-col items-start ${
        isV1 ? "bg-black" : isV2 ? "bg-white" : ""
      }`}
    >
      <div className="flex h-[300px] items-center self-stretch">
        <div className="flex w-[1196px] h-[300px] px-[92px] py-[64px] items-center rounded-[8px] bg-[#E68A00]">
          <div className="flex w-[700px] flex-col items-start gap-8 shrink-0">
            <div className="flex h-[172px] flex-col justify-center items-start gap-8 shrink-0 self-stretch">
              <span className="text-white font-[Rethink Sans] text-[64px] font-bold leading-[160%]">
                I&apos;m Ready to Invest
              </span>
              <span className="text-[#212121] font-[Urbanist] text-[20px] font-semibold leading-[160%]">
                We are accepting minimum investments of $33,333.00 USD. <br />
                This money will be invested in the form of a Post-Money MFN Safe
                Agreement.
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-[327px] h-[300px] -ml-[289px] pt-[60px] pb-[164px] flex-col items-start">
          <button className="flex w-[327px] h-[75px] py-3 justify-center items-center shrink-0 rounded-[20px] bg-[#FFD9A1] shadow-[0_5px_25px_0_rgba(0,0,0,0.15)] transition-all duration-300 hover:bg-[#03002A] group overflow-hidden">
            <div className="flex items-center justify-center relative w-full px-10">
              {isV1 ? (
                <>
                  <span className="absolute left-10 text-white opacity-0 transform -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[28px]">
                    →
                  </span>
                  <span
                    className={`absolute text-[#03002A] ${urbanist.className} text-[20px] font-semibold leading-[160%] group-hover:text-white transform -translate-x-8 group-hover:translate-x-8 transition-all duration-300`}
                  >
                    I’m Claiming My Stake
                  </span>
                  <Image
                    src="/icons/money-hand.svg"
                    alt="Money bag icon"
                    width={28}
                    height={28}
                    className="absolute right-10 opacity-100 group-hover:opacity-0 group-hover:translate-x-full transition-all duration-300"
                  />
                </>
              ) : (
                <>
                  <span className="absolute left-15 text-white opacity-0 transform -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[28px]">
                    →
                  </span>
                  <span
                    className={`absolute text-[#03002A] ${urbanist.className} text-[28px] font-semibold leading-[160%] group-hover:text-white transform -translate-x-8 group-hover:translate-x-8 transition-all duration-300`}
                  >
                    Invest Now
                  </span>
                  <Image
                    src="/icons/money-bag.svg"
                    alt="Money bag icon"
                    width={28}
                    height={28}
                    className="absolute right-15 opacity-100 group-hover:opacity-0 group-hover:translate-x-full transition-all duration-300"
                  />
                </>
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReadyToInvest;
