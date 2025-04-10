"use client";
import { rethinkSans, urbanist } from "@/lib/fonts";

export default function Footer() {
  return (
    <footer
      className={`min-w-[1440px] pt-25 shrink-0 bg-[#03002A] bg-[url('/bg/bestia_bg.svg')] bg-cover bg-center ${rethinkSans.className}`}
    >
      <div className="flex px-0 pt-[172px] pb-8 flex-col items-start gap-[116px] shrink-0">
        <div className="flex px-[200px] justify-center items-center gap-[60px]">
          {/* 좌측 영역 */}
          <div className=" flex min-w-[244px] pb-2 items-center flex-col gap-6 flex-1">
            <h2 className="text-white text-center text-[32px] font-bold leading-[160%] self-stretch">
              Connect With Us
            </h2>
            <div className="flex flex-col items-center gap-5">
              <div className="flex w-[244px] h-[46px] px-[17px] py-[18px] justify-center items-center gap-[10px] self-stretch rounded-[15px] bg-white">
                <a
                  href="https://calendly.com/marco-dykim/30min?month=2025-03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-[#03002A] text-center text-base font-semibold leading-[160%] ${urbanist.className}`}
                >
                  Schedule a meeting
                </a>
              </div>
              <div className="flex w-[244px] h-[46px] px-[17px] py-[18px] justify-center items-center gap-[10px] self-stretch rounded-[15px] border-[1.5px] border-white">
                <a
                  href="#"
                  className={`text-white text-center text-base font-semibold leading-[160%] ${urbanist.className}`}
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
          <div className="h-[160px] w-[1px] bg-[#2E2B5D] stroke-2"></div>
          {/* 우측 영역 */}
          <div className="flex h-[195px] flex-col justify-center items-start gap-[36px]">
            <p
              className={`text-white text-[40px] font-bold leading-[160%] ${rethinkSans.className}`}
            >
              Share in Bestia&apos;s global terraformation <br /> as an early
              investor.
            </p>
            <div
              className={`flex w-[468px] h-8 flex-row gap-3 justify-center text-white text-center text-[17px] font-normal leading-[160%] ${urbanist.className}`}
            >
              <a href="#">Legal</a>
              <span>|</span>
              <a href="#">Terms of Service</a>
              <span>|</span>
              <a href="#">Privacy</a>
              <span>|</span>
              <a href="#">Copyright</a>
              <span>|</span>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </div>

      <div className="px-50 pt-29 pb-9 text-center text-white/40 text-xs">
        © 2025 Bestia Inc.
      </div>
    </footer>
  );
}
