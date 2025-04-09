import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { urbanist, rethinkSans } from "@/lib/fonts";
import { motion } from "framer-motion";

function V2_BusinessModel() {
  const businessModelCards = [
    {
      title: "User Subscriptions",
      description: "Recurring Payment",
      features: ["OpenAPN", "PropVerified", "Parcelity"],
      icon: "/business/money_circle.svg",
    },
    {
      title: "Transaction Fees",
      description: "One-time Payment",
      features: ["TheHomeOffer"],
      icon: "/business/money_hand.svg",
    },
    {
      title: "Premium Services",
      description: "Additional Features",
      features: ["OpenAPN", "PropVerified", "Parcelity", "TheHomeOffer"],
      icon: "/business/data.svg",
    },
  ];

  return (
    <div
      id="business"
      className="flex min-w-[1440px] pt-[120px] justify-center px-[132px] pb-[60px] flex-row gap-[100px] shrink-0"
    >
      <Image
        src="/business/business_pic.png"
        alt="Bestia Business Model"
        width={432}
        height={720}
        style={{
          borderRadius: "1000px 1000px 10px 10px",
          minWidth: "432px",
        }}
      />
      <div className="flex h-[727px] pl-10 pt-[80px] pb-[42px] items-start flex-col gap-[40px]">
        <div className="flex w-[648px] flex-col items-start gap-[28px] pb-[48px]">
          <div className="flex flex-col items-start gap-[16px] self-stretch">
            <span
              className={`text-[#E68A00] ${rethinkSans.className} text-[24px] font-bold leading-[160%]`}
            >
              BUSINESS MODEL
            </span>
            <span
              className={`text-black ${rethinkSans.className} text-[54px] font-bold leading-[160%]`}
            >
              How We Make Money
            </span>
          </div>
          <span
            className={`text-black ${urbanist.className} text-[20px] font-normal leading-[160%]`}
          >
            Bestia generates revenue through a combination of recurring software
            subscriptions and transaction fees for deals listed
            <br /> and completed within our system.
          </span>
        </div>
        <div className="flex flex-row gap-[20px]">
          {businessModelCards.map((card, index) => (
            <BusinessModelCard
              key={index}
              title={card.title}
              description={card.description}
              features={card.features}
              icon={card.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function BusinessModelCard({
  title,
  description,
  features,
  icon,
  index,
}: {
  title: string;
  description: string;
  features: string[];
  icon: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        delay: index * 0.6,
        type: "spring",
        bounce: 0.2,
        damping: 20,
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex w-[212px] h-[294px] px-[20px] py-[56px] flex-col items-start gap-[10px] shrink-0 bg-[#F1F3F7] border rounded-[8px]"
    >
      <div className="w-[84px] h-[84px] mt-[-20px] ml-[-20px]">
        <Image
          src={icon}
          alt="Bestia Business Model"
          width={84}
          height={84}
          className="mt-[-72px]"
        />
      </div>
      <div className="flex flex-col items-start gap-[16px] min-h-[210px] self-stretch">
        <div className="flex flex-col items-start gap-[2px] self-stretch">
          <span
            className={`text-black ${urbanist.className} text-[20px] font-bold leading-[160%]`}
          >
            {title}
          </span>
          <span
            className={`text-[#727272] ${urbanist.className} text-[16px] font-medium leading-[160%]`}
          >
            {description}
          </span>
        </div>
        <div className="h-[1px] w-[100%] bg-white"></div>
        <div className="flex flex-col items-start gap-1.5 self-stretch pl-2">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-row items-center gap-1">
              <FontAwesomeIcon icon={faCheck} width={24} height={24} />
              <span
                className={`text-[#727272] ${urbanist.className} text-[14px] font-semibold leading-[160%]`}
              >
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default V2_BusinessModel;
