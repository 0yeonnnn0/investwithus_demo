import Image from "next/image";

function V1_Value() {
  return (
    <div
      id="value"
      className="flex flex-col min-w-[1440px] items-start gap-[600px] shrink-0 px-0 pt-[160px] pb-[252px]"
      style={{ backgroundImage: "url('/bg/v1_value.png')" }}
    >
      <div className="flex flex-col items-center gap-[40px] self-stretch px-[344px]">
        <span className="text-[#E68A00] text-center font-[Rethink_Sans] text-[24px] font-bold leading-[1.6] uppercase">
          Value unlocked
        </span>
        <div className="flex flex-col gap-[16px]">
          <span className="text-white text-center font-[Rethink_Sans] text-[54px] font-bold leading-[1.6]">
            The Window Is Closing.
          </span>
          <span className="text-white text-center font-[Rethink_Sans] text-[24px] font-semibold leading-[1.6]">
            We are standing at a crossroads that won&apos;t exist tomorrow.
          </span>
        </div>
        <div className="flex flex-col gap-[20px]">
          <span className="text-white text-center font-[Urbanist] text-[20px] font-normal leading-[1.6]">
            We&apos;ve created the neural system for real estate&apos;s next era
            – a data-rich infrastructure that eliminates middlemen, slashes
            costs, and connects buyers and sellers with unprecedented
            efficiency. This is working technology creating real value today.
          </span>
          <span className="text-white text-center font-[Urbanist] text-[24px] font-semibold leading-[1.6]">
            Already generating revenues. And already changing the landscape.
          </span>
        </div>
        <div className="flex flex-row gap-12 mt-5">
          <Image
            src="/value/search_bar.svg"
            alt="search_bar"
            width={50}
            height={50}
            className="opacity-75 transition-opacity duration-300 hover:opacity-100"
          />
          <Image
            src="/value/graphbar.svg"
            alt="graphbar"
            width={50}
            height={50}
            className="opacity-55 transition-opacity duration-300 hover:opacity-100"
          />
          <Image
            src="/value/mouse.svg"
            alt="mouse"
            width={50}
            height={50}
            className="opacity-75 transition-opacity duration-300 hover:opacity-100"
          />
          <Image
            src="/value/handshake.svg"
            alt="handshake"
            width={50}
            height={50}
            className="opacity-75 transition-opacity duration-300 hover:opacity-100"
          />
          <Image
            src="/value/business_card.svg"
            alt="business_card"
            width={50}
            height={50}
            className="opacity-75 transition-opacity duration-300 hover:opacity-100"
          />
          <Image
            src="/value/task_list.svg"
            alt="task_list"
            width={50}
            height={50}
            className="opacity-75 transition-opacity duration-300 hover:opacity-100"
          />
          <Image
            src="/value/money.svg"
            alt="money"
            width={50}
            height={50}
            className="opacity-75 transition-opacity duration-300 hover:opacity-100"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-[32px] self-stretch">
        <span className="text-white text-center font-[Rethink_Sans] text-[60px] font-bold leading-[1.6]">
          The Brutal Truth About Opportunity
        </span>
        <span className="text-white text-center font-[Urbanist] text-[28px] font-medium leading-[1.6]">
          The question isn&apos;t whether this transformation happens.
          <br />
          The question is:{" "}
          <span className="font-bold">Will you own a piece of it?</span>
        </span>
      </div>
    </div>
  );
}

export default V1_Value;
