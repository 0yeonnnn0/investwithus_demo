import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface FeatureCardProps {
  title: string;
  price: string;
  priceUnit: string;
  features: string[];
  className?: string;
  variant?: "default" | "traditional";
  description?: string;
}

const FeatureCard = ({
  title,
  price,
  priceUnit,
  features,
  className = "",
  variant = "default",
  description,
}: FeatureCardProps) => {
  return (
    <div
      className={`flex w-[300px] h-[290px] p-[36px] flex-col items-center justify-between gap-[10px] shrink-0 rounded-[8px] bg-[#F1F3F7] ${className}`}
    >
      <div className="flex flex-col items-start gap-[20px] self-stretch">
        <div>+</div>
        <div className="flex flex-col items-start gap-[12px] self-stretch">
          <span className="text-black font-[Urbanist] text-[20px] font-semibold leading-[160%]">
            {title}
          </span>
          <div className={variant === "traditional" ? "h-auto" : "h-10"}>
            <div
              className={`flex flex-row items-end ${
                variant === "traditional" ? "" : "h-[24px]"
              }`}
            >
              <span className="text-[#E68A00] font-[Urbanist] text-[16px] font-medium leading-[120%]">
                {price}
              </span>
              <span className="text-[#727272] font-[Urbanist] text-[12px] font-medium">
                {priceUnit}
              </span>
            </div>
            {variant === "traditional" && description && (
              <span className="text-[#727272] font-[Urbanist] text-[10px] font-medium">
                {description}
              </span>
            )}
          </div>
        </div>
        <div className="flex w-[253px] flex-col items-start">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-row items-center gap-[4px]">
              <FontAwesomeIcon icon={faCheck} width={24} height={24} />
              <span className="text-[#727272] font-[Urbanist] text-[14px] font-medium leading-[160%]">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
