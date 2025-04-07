import FeatureCard from "@/components/blocks/FeatureCard";

interface FeatureCardData {
  title: string;
  price: string;
  priceUnit: string;
  features: string[];
  variant?: "default" | "traditional";
  description?: string;
  icon: string;
}

function V2_Opportunity() {
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

  return (
    <div
      id="opportunity"
      className="flex w-full h-[1776px] pt-[216px] pb-[44px] flex-col justify-center items-center bg-white"
    >
      <div className="flex flex-col items-center gap-[64px] self-stretch">
        <div className="flex w-[1440px] px-[196px] flex-col items-center gap-[20px]">
          <span className="self-stretch text-[#E68A00] text-center font-[Rethink Sans] text-[24px] font-bold leading-[160%]">
            The Opportunity
          </span>
          <span className="flex h-[114px] flex-col justify-center self-stretch text-black text-center font-[Urbanist] text-[20px] font-normal leading-[160%]">
            The real estate industry is burdened by inefficiencies of $47
            billion per year. And no one is doing anything to change it.
            Companies who have dominated the online real estate landscape for
            decades are feigning integration of AI technology; however, they
            have no agentic systems or data under the hood to simplify the
            lead-generating or transacting process.
          </span>
        </div>
        <div className="flex w-full flex-col items-center">
          <div className="flex h-[441px] px-[233px] pr-[234px] pt-[39px] pb-[7px] flex-col justify-end items-center gap-[10px] self-stretch">
            <div className="flex justify-center w-full h-[76px] items-center shrink-0">
              <div className="flex w-[940px] justify-center items-center">
                <div className="flex w-full items-center justify-center gap-[5px] shrink-0">
                  <div className="w-[295px] h-px bg-[#B2B2B2]" />
                  <div className="flex w-[340px] h-[57px] px-[60px] py-[12px] justify-center items-center gap-[10px] shrink-0 rounded-[15px] border-2 border-[#404040]">
                    <span className="text-black text-center font-[Urbanist] text-[24px] font-medium">
                      Traditional Model
                    </span>
                  </div>
                  <div className="w-[295px] h-px bg-[#B2B2B2]" />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-row justify-center gap-[20px]">
              {featureCards.map((card, index) => (
                <FeatureCard
                  key={index}
                  title={card.title}
                  price={card.price}
                  priceUnit={card.priceUnit}
                  features={card.features}
                  variant={card.variant}
                  description={card.description}
                  icon={card.icon}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center">
          <div className="flex h-[441px] px-[233px] pr-[234px] pt-[39px] pb-[7px] flex-col justify-end items-center gap-[10px] self-stretch">
            <div className="flex justify-center w-full h-[76px] items-center shrink-0">
              <div className="flex w-[940px] justify-center items-center">
                <div className="flex w-full items-center justify-center gap-[5px] shrink-0">
                  <div className="w-[295px] h-px bg-[#B2B2B2]" />
                  <div className="flex w-[340px] h-[57px] px-[60px] py-[12px] justify-center items-center gap-[10px] shrink-0 rounded-[15px] border-2 border-[#E68A00]">
                    <span className="text-black text-center font-[Urbanist] text-[24px] font-medium">
                      Bestia&apos;s Model
                    </span>
                  </div>
                  <div className="w-[295px] h-px bg-[#B2B2B2]" />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-row justify-center gap-[20px]">
              {bestiaFeatureCards.map((card, index) => (
                <FeatureCard
                  key={index}
                  title={card.title}
                  price={card.price}
                  priceUnit={card.priceUnit}
                  features={card.features}
                  variant={card.variant}
                  description={card.description}
                  icon={card.icon}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex px-[188px] pr-[156px] items-center gap-[80px] self-stretch">
          <div className="flex w-[491px] h-[210px] flex-col items-start gap-[6px]">
            <span className="text-black font-[Rethink Sans] text-[58px] font-medium leading-[160%]">
              Bestia has the key
            </span>
            <span className="text-black font-[Urbanist] text-[20px] font-normal leading-[160%]">
              to the future of real estate deal-making: a data-packed,
              hyper-delineated, all-encompassing deal-making infrastructure that
              we have spent years developing and fine-tuning.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default V2_Opportunity;
