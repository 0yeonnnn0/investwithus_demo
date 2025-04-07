import Image from "next/image";
import { cn } from "@/lib/utils";
import { rethinkSans, urbanist } from "@/lib/fonts";

interface TechnologyCardProps {
  title: string;
  description?: string;
  image: string;
  logo: string;
  className?: string;
}

function TechnologyCard({
  title,
  description,
  image,
  logo,
  className,
}: TechnologyCardProps) {
  return (
    <div
      className={cn(
        "group flex w-[280px] h-[416px] flex-col justify-end items-start gap-[10px] shrink-0 relative overflow-hidden rounded-[8px]",
        className
      )}
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="rounded-[8px] object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/60 group-hover:backdrop-blur-sm rounded-[8px]" />
      </div>

      {/* 기본 상태의 텍스트 */}
      {/* <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent backdrop-blur-sm rounded-b-[8px] transition-opacity duration-500 group-hover:opacity-0">
        <h3 className="text-white font-[Urbanist] text-[20px] font-semibold leading-[160%]">
          <Image
            src={logo}
            alt={title}
            fill
            className="rounded-[8px] object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </h3>
        {description && (
          <p className="text-white/90 font-[Urbanist] text-[14px] font-medium leading-[160%] mt-2">
            {description}
          </p>
        )}
      </div> */}

      {/* hover 상태의 컨텐츠 */}
      <div
        className={`absolute inset-0 flex flex-col ${urbanist.className} items-center justify-center gap-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-[8px]`}
      >
        <h3 className="text-white text-[20px] font-semibold leading-[160%] text-center">
          {title}
        </h3>
        <p className="text-white/90 text-[16px] font-medium underline">
          want to know more?
        </p>
        <button className="flex h-[40px] px-6 py-2 justify-center items-center gap-2 bg-white border rounded-[4px] text-[16px] font-semibold transition-colors hover:bg-[#FFA500]">
          Schedule a meeting
        </button>
      </div>
    </div>
  );
}

function V2_Technology() {
  const technologyCards = [
    {
      title: "OpenAPN",
      logo: "/logo/OpenAPN.svg",
      image: "/bg/OpenAPN_bg.png",
    },
    {
      title: "Parcelity",
      logo: "/logo/Parcelity.svg",
      image: "/bg/Parcelity_bg.png",
    },
    {
      title: "PropVerified",
      logo: "/logo/PropVerified.svg",
      image: "/bg/PropVerified_bg.png",
    },
    {
      title: "TheHomeOffer",
      logo: "/logo/TheHomeOffer.svg",
      image: "/bg/THO_bg.png",
    },
  ];

  return (
    <div
      id="technology"
      className="flex min-w-[1440px] w-full pt-[120px] flex-col items-center shrink-0"
    >
      <span
        className={`text-[#E68A00] text-center text-[24px] font-semibold leading-[160%] ${rethinkSans.className}`}
      >
        The Technology
      </span>
      <div className="mt-[40px] flex flex-col items-center gap-4">
        <div className="mx-auto">
          <span
            className={`text-black text-center text-[32px] font-bold leading-[160%] ${urbanist.className}`}
          >
            Bestia is a breakthrough solution.
          </span>
        </div>
        <div className="text-center">
          <span
            className={`text-center text-[24px] leading-[2] ${rethinkSans.className}`}
          >
            Our AI fleet isn&apos;t waiting for permission to transform this
            industry.
            <br /> We&apos;re doing it now, creating wealth for those brave
            enough to see what&apos;s happening.
          </span>
        </div>
        <div className="flex flex-row gap-[20px] mt-10">
          {technologyCards.map((card, index) => (
            <TechnologyCard
              key={index}
              title={card.title}
              image={card.image}
              logo={card.logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default V2_Technology;
