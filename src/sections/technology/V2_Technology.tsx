import Image from "next/image";
import { cn } from "@/lib/utils";
import { rethinkSans, urbanist } from "@/lib/fonts";
import { usePathname } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

function V2_Technology() {
  const pathname = usePathname();
  const isV1 = pathname === "/v1";

  return (
    <div
      id="technology"
      className="flex min-w-[1440px] w-full py-[120px] flex-col items-center shrink-0"
    >
      <span
        className={`text-[#E68A00] uppercase text-center text-[24px] font-bold leading-[160%] ${rethinkSans.className}`}
      >
        The Technology
      </span>
      <div className="mt-[20px] flex flex-col items-center gap-4">
        <div className="mx-auto">
          <span
            className={`text-black text-center text-[32px] font-bold leading-[160%] ${urbanist.className}`}
          >
            Bestia is a breakthrough solution.
          </span>
        </div>
        <div className="text-center mb-[60px]">
          {isV1 ? (
            <span
              className={`text-center text-[24px] leading-[160%] ${urbanist.className}`}
            >
              Our AI fleet isn&apos;t waiting for permission to transform this
              industry.
              <br /> We&apos;re doing it now, creating wealth for those brave
              enough to see what&apos;s happening.
            </span>
          ) : (
            <span
              className={`text-center text-[24px] leading-[160%] ${urbanist.className}`}
            >
              An AI-first, infrastructure-driven system that eliminates
              intermediaries, <br />
              reduces friction, and optimizes every stage of the real estate
              cycle.
            </span>
          )}
        </div>
        <div className="relative">
          <div className="absolute -bottom-30 left-1/2 -translate-x-1/2 w-[1180px] h-[40px] rounded-[1216px] opacity-40 bg-gradient-to-r from-[#959595] via-[#939393] to-[#959595] blur-[15px]" />
          <div className="relative h-[416px] w-full">
            <div
              className="flex flex-row gap-[20px] mt-10 relative justify-center w-full"
              style={{ height: "416px" }}
            >
              {technologyCards.map((card, index) => (
                <TechnologyCard
                  key={index}
                  title={card.title}
                  image={card.image}
                  logo={card.logo}
                  index={index}
                  totalCards={technologyCards.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default V2_Technology;

interface TechnologyCardProps {
  title: string;
  description?: string;
  image: string;
  logo: string;
  className?: string;
  index: number;
  totalCards: number;
}

function TechnologyCard({
  title,
  //   description,
  image,
  //   logo,
  className,
  index,
  totalCards,
}: TechnologyCardProps) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, {
    once: true,
    margin: "-100px",
  });

  const calculateX = (index: number, total: number) => {
    const middleIndex = (total - 1) / 2;
    const offset = index - middleIndex;
    return offset * 300;
  };

  const calculateInitialRotation = (index: number) => {
    const rotations = [0, 8, 15, 22];
    const rotation = rotations[index];
    return index % 2 === 0 ? -rotation : rotation;
  };

  const calculateInitialY = (index: number) => {
    return index * 2;
  };

  const cardVariants = {
    hidden: {
      opacity: 1,
      scale: 0.85,
      x: 0,
      y: calculateInitialY(index),
      rotate: calculateInitialRotation(index),
      transition: {
        duration: 0,
      },
    },
    spreading: {
      opacity: 1,
      scale: 0.85,
      x: 0,
      y: calculateInitialY(index),
      rotate: calculateInitialRotation(index),
      transition: {
        duration: 0.2,
      },
    },
    show: {
      opacity: 1,
      scale: 1,
      x: calculateX(index, totalCards),
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 80,
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? ["spreading", "show"] : "hidden"}
      style={{
        position: "absolute",
        transformOrigin: "center center",
        left: "50%",
        marginLeft: "-140px",
        zIndex: totalCards - index,
      }}
      className={cn(
        "group flex w-[280px] h-[416px] flex-col justify-end items-start gap-[10px] shrink-0 overflow-hidden rounded-[8px]",
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
        <button
          className="flex h-[40px] px-6 py-2 justify-center items-center gap-2 bg-white border rounded-[4px] text-[16px] font-semibold transition-colors hover:bg-[#060052] hover:text-white"
          onClick={() => {
            window.open(
              "https://calendly.com/marco-dykim/30min?month=2025-04",
              "_blank"
            );
          }}
        >
          Schedule a meeting
        </button>
      </div>
    </motion.div>
  );
}
