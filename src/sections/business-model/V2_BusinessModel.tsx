import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { urbanist, rethinkSans } from "@/lib/fonts";

function V2_BusinessModel() {
  const businessModelCards = [
    {
      title: "User Subscriptions",
      description: "Recurring Payment",
      features: ["OpenAPN", "PropVerified", "Parcelity"],
    },
    {
      title: "Transaction Fees",
      description: "One-time Payment",
      features: ["TheHomeOffer"],
    },
    {
      title: "Premium Services",
      description: "Additional Features",
      features: ["OpenAPN", "PropVerified", "Parcelity", "TheHomeOffer"],
    },
  ];

  return (
    <div
      id="business"
      className="flex w-[1440px] pt-[120px] px-[132px] pb-[120px] flex-row gap-[94px] shrink-0"
    >
      <Image
        src="/technology/OpenAPN.png"
        alt="Bestia Business Model"
        width={432}
        height={720}
        style={{
          borderRadius: "1000px 1000px 10px 10px",
        }}
      />
      <div className="flex h-[727px] pt-[80px] pb-[42px] items-start flex-col gap-[40px]">
        <div className="flex w-[648px] flex-col items-start gap-[32px] pb-[40px]">
          <div className="flex flex-col items-start gap-[20px] self-stretch">
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
}: {
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <>
      <div className="flex w-[212px] h-[294px] px-[20px] py-[56px] flex-col items-start gap-[10px] shrink-0 bg-[#F1F3F7] border rounded-[8px]">
        <div className="w-[84px] h-[84px] mt-[-20px] ml-[-20px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="84"
            height="84"
            viewBox="0 0 84 84"
            fill="none"
            className="mt-[-80px]"
          >
            <circle cx="42" cy="42" r="32" fill="#060052" />
            <path
              d="M45.6598 38.0517C45.4556 37.486 45.0789 36.9962 44.5813 36.6495C44.0837 36.3028 43.4895 36.116 42.88 36.1148H40.5981C39.9471 36.1115 39.3179 36.346 38.8323 36.7732C38.3467 37.2004 38.0391 37.7897 37.969 38.4274C37.8989 39.065 38.0713 39.7056 38.4528 40.2253C38.8343 40.745 39.3979 41.1069 40.0346 41.2409L43.5093 41.9878C44.2197 42.141 44.8477 42.5475 45.2725 43.1291C45.6972 43.7108 45.8888 44.4265 45.8105 45.1389C45.7321 45.8513 45.3893 46.51 44.8479 46.9885C44.3066 47.467 43.6048 47.7315 42.8775 47.7312H40.914C39.6303 47.7312 38.5386 46.9246 38.1342 45.7968M41.897 36.1148V33.2095M41.897 50.6366V47.7337M29.6055 58.444V52.22H35.9231"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M58.1662 39.2384C58.8288 42.7691 58.2998 46.4197 56.6622 49.6173C55.0246 52.815 52.3711 55.3786 49.1181 56.9058C45.8652 58.433 42.197 58.8374 38.6893 58.0555C35.1816 57.2736 32.0329 55.3496 29.7375 52.5855M26.2781 45.2059C25.6155 41.6753 26.1446 38.0246 27.7822 34.827C29.4198 31.6294 32.0733 29.0658 35.3262 27.5385C38.5791 26.0113 42.2473 25.6069 45.755 26.3888C49.2627 27.1708 52.4114 29.0948 54.7068 31.8588"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M55.1998 26V32.4889H48.7109"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-col items-start gap-[20px] min-h-[210px] self-stretch">
          <div className="flex flex-col items-start gap-[12px] self-stretch">
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
          <div className="flex flex-col items-start gap-[12px] self-stretch pl-2">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-row items-center gap-[4px]">
                <FontAwesomeIcon icon={faCheck} width={24} height={24} />
                <span
                  className={`text-[#727272] ${urbanist.className} text-[14px] font-medium leading-[160%]`}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default V2_BusinessModel;
