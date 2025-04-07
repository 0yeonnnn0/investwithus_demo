import Image from "next/image";
import { cn } from "@/lib/utils";

interface TechnologyCardProps {
  title: string;
  description?: string;
  image: string;
  className?: string;
}

function TechnologyCard({
  title,
  description,
  image,
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
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent backdrop-blur-sm rounded-b-[8px] transition-opacity duration-500 group-hover:opacity-0">
        <h3 className="text-white font-[Urbanist] text-[20px] font-semibold leading-[160%]">
          {title}
        </h3>
        {description && (
          <p className="text-white/90 font-[Urbanist] text-[14px] font-medium leading-[160%] mt-2">
            {description}
          </p>
        )}
      </div>

      {/* hover 상태의 컨텐츠 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-[8px]">
        <h3 className="text-white font-[Urbanist] text-[20px] font-semibold leading-[160%] text-center">
          {title}
        </h3>
        <p className="text-white/90 font-[Urbanist] text-[16px] font-medium underline">
          want to know more?
        </p>
        <button className="flex h-[40px] px-6 py-2 justify-center items-center gap-2 bg-white border rounded-[4px] font-[Urbanist] text-[16px] font-semibold transition-colors hover:bg-[#FFA500]">
          Schedule a meeting
        </button>
      </div>
    </div>
  );
}

function V2_Technology() {
  const technologyCards = [
    {
      title: "AI-Powered Deal Analysis",
      image: "/technology/OpenAPN.png",
    },
    {
      title: "Smart Contract Integration",
      image: "/technology/OpenAPN.png",
    },
    {
      title: "Market Intelligence",
      image: "/technology/OpenAPN.png",
    },
    {
      title: "Document Automation",
      image: "/technology/OpenAPN.png",
    },
  ];

  return (
    <div
      id="technology"
      className="flex w-[1440px] pt-[120px] flex-col items-center shrink-0"
    >
      <span className="text-[#E68A00] text-center font-[Rethink Sans] text-[24px] font-bold leading-[160%]">
        The Technology
      </span>
      <div className="w-[1440px] h-[860px] flex flex-col items-center gap-10">
        <div className="mx-auto">
          <span className="text-black text-center font-[Urbanist] text-[34px] font-bold leading-[160%]">
            Bestia is a breakthrough solution.
          </span>
        </div>
        <div className="w-[920px]">
          <span className="text-white text-center font-[Rethink_Sans] text-[32px] font-semibold leading-[2]">
            Our AI fleet isn&apos;t waiting for permission to transform this
            <br /> We&apos;re doing it now, creating wealth for those brave enough to
            see what&apos;s happening.
          </span>
        </div>
        <div className="flex flex-row gap-[20px] mt-10">
          {technologyCards.map((card, index) => (
            <TechnologyCard key={index} title={card.title} image={card.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default V2_Technology;
