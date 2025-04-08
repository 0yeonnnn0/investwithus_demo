"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { urbanist } from "@/lib/fonts";

interface CostItem {
  title: string;
  amount: number;
  reducedAmount: number;
  reductionRate: number;
  subtitle: string;
}

const costs: CostItem[] = [
  {
    title: "Traditional Costs",
    amount: 28000,
    reducedAmount: 700,
    reductionRate: 97,
    subtitle: "Human Oversight",
  },
  {
    title: "Time-Based Costs",
    amount: 2000,
    reducedAmount: 300,
    reductionRate: 85,
    subtitle: "Processing",
  },
  {
    title: "Operational Costs",
    amount: 35000,
    reducedAmount: 150,
    reductionRate: 99,
    subtitle: "Technology Costs",
  },
];

function CostComparison() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRates, setCurrentRates] = useState<number[]>([0, 0, 0]);
  const maxAmount = Math.max(...costs.map((cost) => cost.amount));

  // 회색 바의 높이를 계산하는 함수
  const getVisualHeight = (amount: number) => {
    const ratio = amount / maxAmount;
    const minHeight = 80; // 최소 80px
    const maxHeight = 300; // 최대 300px
    return minHeight + ratio * (maxHeight - minHeight);
  };

  // 주황색 바의 높이를 계산하는 함수
  const getReducedVisualHeight = (amount: number) => {
    const ratio = 1 - Math.exp(-amount / 1000);
    return ratio * 60 + 30; // 0~60px 사이
  };

  useEffect(() => {
    setIsVisible(true);

    // 퍼센트 애니메이션
    const duration = 3000; // 3초
    const steps = 60; // 60프레임
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      if (step >= steps) {
        clearInterval(timer);
        setCurrentRates(costs.map((cost) => cost.reductionRate));
        return;
      }

      setCurrentRates(
        costs.map((cost) => {
          const progress = step / steps;
          return Math.round(cost.reductionRate * progress);
        })
      );

      step++;
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-between items-center h-[600px]">
      {costs.map((cost, index) => (
        <div key={cost.title} className="flex flex-col items-center w-[180px]">
          <span
            className={`text-black  text-[32px] font-semibold mb-4 ${urbanist.className}`}
          >
            ${cost.amount.toLocaleString()}
          </span>
          <div className="relative w-full flex flex-col items-center">
            <div className="relative w-full flex flex-col items-center">
              <div className="w-12 h-[300px] relative">
                {/* 회색 배경 바 (줄어든 부분) */}
                <div
                  className="absolute bg-[#F5F5F5] w-full"
                  style={{
                    height: `${getVisualHeight(cost.amount)}px`,
                    bottom: "1px",
                  }}
                />
                {/* 주황색 바 (남은 부분) */}
                <div
                  className="absolute w-12 bg-[#E68A00] border-[#E68A00] bottom-0 border-t rounded-t-lg transition-all duration-[3000ms] ease-out"
                  style={{
                    height: isVisible
                      ? `${getReducedVisualHeight(cost.reducedAmount)}px`
                      : `${getVisualHeight(cost.amount)}px`,
                  }}
                >
                  <span className="absolute top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[14px] font-bold whitespace-nowrap">
                    ${cost.reducedAmount}
                  </span>
                </div>
                {/* 절감률 */}
                <span className="absolute top-12 left-1/2 -translate-x-1/2 text-[#03002A] text-[48px] font-bold transition-all duration-[3000ms] ease-out">
                  {currentRates[index]}%
                </span>
              </div>
            </div>
            <div className="w-full h-[1px] bg-black mt-0" />
            <div className="flex flex-col items-center gap-4 mt-4">
              <span
                className={`text-[#666666] ${urbanist.className} text-[16px] font-medium text-center`}
              >
                {cost.title}
              </span>
              <Image
                src="/icons/arrow-down.svg"
                alt="arrow down"
                width={24}
                height={24}
              />
              <span
                className={`text-black ${urbanist.className} text-[20px] font-bold`}
              >
                {cost.subtitle}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CostComparison;
