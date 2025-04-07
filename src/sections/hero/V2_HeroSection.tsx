"use client";
import RollingLogo from "@/components/RollingLogo";
import { rethinkSans, urbanist } from "@/lib/fonts";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function V2_HeroSection() {
  return (
    <div
      id="home"
      className={`overflow-hidden bg-white ${rethinkSans.className}`}
    >
      <div className="min-w-[1440px] w-full max-md:max-w-full">
        <div className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="flex flex-col items-center self-center max-w-full w-[1080px]">
              <div className="z-10 px-2 w-full text-6xl font-bold leading-snug text-center text-slate-950 max-md:max-w-full max-md:text-4xl">
                <span
                  className={`text-center ${rethinkSans.className} text-[32px] font-semibold leading-[2]`}
                >
                  Share in Bestia&apos;s global terraformation
                </span>
              </div>
              <div className="px-px max-w-full w-[979px]">
                <div className="flex gap-5 max-md:flex-col max-md:">
                  <div className="relative w-full max-md:ml-0 max-md:w-full">
                    <div className="gap-3 self-stretch mr-0 text-6xl font-bold leading-snug text-center text-slate-950 max-md:max-w-full max-md:text-4xl">
                      of real estate as an early investor
                    </div>
                    <div className="absolute right-0 top-0 z-10 w-[45%] max-md:ml-0 max-md:w-full">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b20b9f027b47cc71f7eda4bb569770180f0c779e?placeholderIfAbsent=true"
                        className="object-contain grow mt-14 aspect-[9.01] w-[422px] max-md:mt-10 max-md:max-w-full"
                        alt="Decoration"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20 m-auto w-[690px] text-2xl font-medium leading-10 text-center text-black min-h-[146px] max-md:mt-10 max-md:max-w-full">
              Our slate of AI-driven real estate applications are transforming
              the way buyers and sellers connect, communicate, and transact—and
              helping to solve a $47 billion/year problem.
            </div>
          </div>
          <div className="mt-28 w-full max-md:mt-10 max-md:max-w-full">
            <div className="px-52 w-full text-white max-md:px-5 max-md:max-w-full">
              <div className="flex relative flex-col justify-center items-start px-16 py-20 w-full min-h-[622px] rounded-[30px] max-md:px-5 max-md:max-w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/172c246bcc1080aa7dd63ca098bafd21d5b4e9c1?placeholderIfAbsent=true"
                  className="object-cover absolute inset-0 size-full rounded-[30px]"
                  alt="Background"
                />
                <div className="relative max-w-full w-[757px]">
                  <div className="text-5xl font-bold leading-[77px] max-md:max-w-full max-md:text-4xl max-md:leading-[72px]">
                    Join Our Team of Investors and Be <br />a Part of This
                    Exciting growth
                  </div>
                  <div className="flex flex-col mt-48 max-w-full min-h-[126px] w-[344px] max-md:mt-10">
                    <div className="flex flex-col justify-center items-center w-full text-2xl font-bold leading-relaxed rounded-2xl bg-amber-600 bg-opacity-80 min-h-[66px]">
                      <div className="flex gap-4 justify-center items-center">
                        <FontAwesomeIcon icon={faArrowRight} />
                        <div className="self-stretch my-auto">
                          <span
                            className={`text-white ${urbanist.className} text-[24px] font-bold leading-[1.6]`}
                          >
                            I&apos;m Ready to Invest
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="self-center mt-4 text-base text-center">
                      $33,333.00 USD Minimum Investment
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <RollingLogo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default V2_HeroSection;
