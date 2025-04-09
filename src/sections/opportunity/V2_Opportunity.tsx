import FeatureCard from "@/components/blocks/FeatureCard";
import CostComparison from "@/components/CostComparison";
import { rethinkSans, urbanist } from "@/lib/fonts";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function V2_Opportunity() {
  const traditionalRef = useRef(null);
  const bestiaRef = useRef(null);
  const isTraditionalInView = useInView(traditionalRef, { once: true });
  const isBestiaInView = useInView(bestiaRef, { once: true });

  return (
    <div
      id="opportunity"
      className="flex min-w-[1440px] w-full pt-[120px] pb-[44px] justify-center items-center bg-white"
    >
      <div className="flex flex-col items-center gap-[64px] self-stretch">
        <div className="flex w-[1440px] px-[196px] flex-col items-center gap-[20px]">
          <span
            className={`self-stretch uppercase text-[#E68A00] text-center ${rethinkSans.className} text-[24px] font-bold leading-[160%]`}
          >
            The Opportunity
          </span>
          <div className="flex h-[114px] flex-col justify-center self-stretch">
            <span
              className={` text-black text-center ${urbanist.className} text-[20px] font-normal leading-[160%]`}
            >
              The real estate industry is burdened by inefficiencies of $47
              billion per year,{" "}
              <span className="font-bold">
                And no one is doing anything to change it.
              </span>{" "}
              Companies who have dominated the online real estate landscape for
              decades are feigning integration of AI technology; however, they
              have no agentic systems or data under the hood to simplify the
              lead-generating or transacting process.
            </span>
          </div>
        </div>
        <div>
          <div className="flex w-full flex-col items-center">
            <div className="flex h-[441px] px-[233px] pr-[234px] pt-[39px] pb-[7px] flex-col items-center gap-[10px] self-stretch">
              <motion.div
                ref={traditionalRef}
                initial={{ y: -50, opacity: 0 }}
                animate={
                  isTraditionalInView
                    ? { y: 0, opacity: 1 }
                    : { y: -50, opacity: 0 }
                }
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex justify-center w-full h-[76px] items-center shrink-0"
              >
                <div className="flex w-[940px] justify-center items-center">
                  <div className="flex w-full items-center justify-center gap-[5px] shrink-0">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={
                        isTraditionalInView ? { width: "295px" } : { width: 0 }
                      }
                      transition={{ duration: 0.7, delay: 0.5 }}
                      className="h-px bg-[#B2B2B2]"
                    />
                    <div className="flex w-[340px] h-[57px] px-[60px] py-[12px] justify-center items-center gap-[10px] shrink-0 rounded-[15px] border-2 border-[#404040]">
                      <span
                        className={`text-black text-center ${urbanist.className} text-[24px] font-medium`}
                      >
                        Traditional Model
                      </span>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={
                        isTraditionalInView ? { width: "295px" } : { width: 0 }
                      }
                      transition={{ duration: 0.7, delay: 0.5 }}
                      className="h-px bg-[#B2B2B2]"
                    />
                  </div>
                </div>
              </motion.div>
              <div className="w-full flex flex-row justify-center gap-[20px]">
                {featureCards.map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 50, opacity: 0 }}
                    animate={
                      isTraditionalInView
                        ? { y: 0, opacity: 1 }
                        : { y: 50, opacity: 0 }
                    }
                    transition={{ duration: 0.7, delay: 1 + index * 0.7 }}
                  >
                    <FeatureCard
                      title={card.title}
                      price={card.price}
                      priceUnit={card.priceUnit}
                      features={card.features}
                      variant={card.variant}
                      description={card.description}
                      icon={card.icon}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center">
            <div className="flex h-[441px] px-[233px] pr-[234px] pt-[39px] pb-[7px] flex-col justify-end items-center gap-[10px] self-stretch">
              <motion.div
                ref={bestiaRef}
                initial={{ y: -50, opacity: 0 }}
                animate={
                  isBestiaInView && isTraditionalInView
                    ? { y: 0, opacity: 1 }
                    : { y: -50, opacity: 0 }
                }
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex justify-center w-full h-[76px] items-center shrink-0"
              >
                <div className="flex w-[940px] justify-center items-center">
                  <div className="flex w-full items-center justify-center gap-[5px] shrink-0">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={
                        isBestiaInView && isTraditionalInView
                          ? { width: "295px" }
                          : { width: 0 }
                      }
                      transition={{ duration: 0.7, delay: 0.5 }}
                      className="h-px bg-[#B2B2B2]"
                    />
                    <div className="flex w-[340px] h-[57px] px-[60px] py-[12px] justify-center items-center gap-[10px] shrink-0 rounded-[15px] border-2 border-[#E68A00]">
                      <span
                        className={`text-black text-center ${urbanist.className} text-[24px] font-medium`}
                      >
                        Bestia&apos;s Model
                      </span>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={
                        isBestiaInView && isTraditionalInView
                          ? { width: "295px" }
                          : { width: 0 }
                      }
                      transition={{ duration: 0.7, delay: 0.5 }}
                      className="h-px bg-[#B2B2B2]"
                    />
                  </div>
                </div>
              </motion.div>
              <div className="w-full flex flex-row justify-center gap-[20px]">
                {bestiaFeatureCards.map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 50, opacity: 0 }}
                    animate={
                      isBestiaInView && isTraditionalInView
                        ? { y: 0, opacity: 1 }
                        : { y: 50, opacity: 0 }
                    }
                    transition={{ duration: 0.7, delay: 1 + index * 0.7 }}
                  >
                    <FeatureCard
                      title={card.title}
                      price={card.price}
                      priceUnit={card.priceUnit}
                      features={card.features}
                      variant={card.variant}
                      description={card.description}
                      icon={card.icon}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full px-[188px] pr-[156px] items-center gap-[80px] self-stretch">
          <div className="flex w-[492px] h-[210px] flex-col items-start gap-[6px] shrink-0">
            <span
              className={`text-black ${rethinkSans.className} text-[58px] font-medium leading-[160%]`}
            >
              Bestia has the key
            </span>
            <span
              className={`text-black ${urbanist.className} text-[20px] font-normal leading-[160%]`}
            >
              to the future of real estate deal-making: a data-packed,
              hyper-delineated, all-encompassing deal-making infrastructure that
              we have spent years developing and fine-tuning.
            </span>
          </div>
          <CostComparison />
        </div>
      </div>
    </div>
  );
}

export default V2_Opportunity;

interface FeatureCardData {
  title: string;
  price: string;
  priceUnit: string;
  features: string[];
  variant?: "default" | "traditional";
  description?: string;
  icon: string;
}
const featureCards: FeatureCardData[] = [
  {
    title: "Traditional Costs",
    price: "$28,000",
    priceUnit: "/transaction",
    features: [
      "Commissions",
      "Title, Escrow & Loan origination",
      "Processing costs",
    ],
    variant: "traditional",
    description: "(based on $360,000 average home price)",
    icon: "/opportunity/moneybag.svg",
  },
  {
    title: "Time-Based Costs",
    price: "$2,000",
    priceUnit: "/transaction",
    features: [
      "97-day average cycle time",
      "Labor costs",
      "Coordination costs",
    ],
    icon: "/opportunity/moneycircle.svg",
  },
  {
    title: "Operational Costs",
    price: "$35,000",
    priceUnit: "/transaction",
    features: [
      "Manual documentation",
      "Multiple system access",
      "Compliance verification",
    ],
    icon: "/opportunity/document.svg",
  },
];
const bestiaFeatureCards: FeatureCardData[] = [
  {
    title: "Human Oversight",
    price: "$700",
    priceUnit: "/transaction",
    features: ["Quality assurance", "Deal review", "Final verification"],
    variant: "traditional",
    description: "(based on $360,000 average home price)",
    icon: "/opportunity/humanfind.svg",
  },
  {
    title: "Processing",
    price: "$300",
    priceUnit: "/transaction",
    features: [
      "One-day average cycle time",
      "Compliance checks",
      "Deal structuring",
      "Document automation",
    ],
    icon: "/opportunity/onecircle.svg",
  },
  {
    title: "Technology Costs",
    price: "$150",
    priceUnit: "/transaction",
    features: ["AI processing", "Data validation", "API calls"],
    icon: "/opportunity/ai.svg",
  },
];
