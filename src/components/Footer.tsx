"use client";

import { rethinkSans } from "@/lib/fonts";

export default function Footer() {
  return (
    <footer
      className={`min-w-[1440px] w-full shrink-0 bg-[#03002A] pt-[120px] pb-10 bg-[url('/bg/bestia_bg.svg')] bg-cover bg-center ${rethinkSans.className}`}
    >
      <div className="flex w-[1440px] px-[200px]  pb-8 flex-col items-start gap-[116px] shrink-0">
        <div className="flex  justify-center items-center gap-[60px] self-stretch">
          {/* 좌측 영역 */}
          <div className=" flex min-w-[244px] pb-2 items-center flex-col gap-6 flex-1">
            <h2 className="text-white text-center text-[32px] font-bold leading-[160%] self-stretch">
              Connect With Us
            </h2>
            <div className="flex flex-col items-start gap-5 self-stretch">
              <div className="flex h-[46px] px-[17px] py-[18px] justify-center items-center gap-[10px] self-stretch rounded-[15px] bg-white">
                <a
                  href="https://calendly.com/marco-dykim/30min?month=2025-03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#03002A] text-center font-[Urbanist] text-base font-semibold leading-[160%]"
                >
                  Schedule a meeting
                </a>
              </div>
              <div className="flex h-[46px] px-[17px] py-[18px] justify-center items-center gap-[10px] self-stretch rounded-[15px] border-[1.5px] border-white">
                <a
                  href="#"
                  className="text-white text-center font-[Urbanist] text-base font-semibold leading-[160%]"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
          <div className="h-[160px] w-[1px] bg-[#2E2B5D] stroke-2"></div>
          {/* 우측 영역 */}
          <div className="flex h-[195px] flex-col justify-center items-start gap-[36px]">
            <p className="text-white text-[40px] font-bold leading-[140%]">
              Share in Bestia&apos;s global terraformation <br /> as an early
              investor.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-end items-center px-[200px] gap-8">
        <div className="flex w-[468px] h-8 flex-row gap-3 justify-center text-white text-center font-[Urbanist] text-[17px] font-normal leading-[160%]">
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
        <span className="text-white">© 2025 Bestia Inc.</span>
      </div>
    </footer>
  );
}
