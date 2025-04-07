"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Opportunity", href: "#opportunity" },
  { label: "Technology", href: "#technology" },
  { label: "Business Model", href: "#business" },
  { label: "Team", href: "#team" },
  { label: "Use of Funds", href: "#funds" },
  { label: "Invest With Us", href: "#invest" },
];

export default function Header() {
  const router = useRouter();

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-sm">
      <div className="flex h-[85px] px-[122px] py-6 flex-col items-center gap-[10px] self-stretch bg-white/40 shadow-[0_5px_25px_0_rgba(0,0,0,0.15)] backdrop-blur-[40px]">
        <div className="flex w-[1196px] items-center gap-[304px] shrink-0">
          {/* 로고 */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("#home");
            }}
            className="flex w-[82px] h-[37px] pr-0 pt-[11px] pb-[15px] pl-[10px] justify-center items-center gap-[10px] shrink-0"
          >
            <Image
              src="/logo/Bestia_lg_black.svg"
              alt="Bestia Logo"
              width={72}
              height={19}
            />
          </a>

          {/* 내비게이션 */}
          <nav className="flex justify-end items-center gap-8">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <li
                  key={link.href}
                  className="text-black text-center font-[Urbanist] text-sm font-semibold"
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(link.href);
                    }}
                    className="hover:text-blue-700 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Schedule a meeting 버튼 */}
            <a
              href="https://calendly.com/marco-dykim/30min?month=2025-03"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[37px] px-3 py-[7px] justify-center items-center gap-[10px] rounded-[5px] bg-[#060052] text-white text-center font-[Urbanist] text-sm font-semibold"
            >
              Schedule a meeting
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
