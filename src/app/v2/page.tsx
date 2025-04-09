"use client";

import V2_BusinessModel from "@/sections/business-model/V2_BusinessModel";
import V2_HeroSection from "@/sections/hero/V2_HeroSection";
import V2_Opportunity from "@/sections/opportunity/V2_Opportunity";
import V2_Team from "@/sections/team/V2_Team";
import V2_Technology from "@/sections/technology/V2_Technology";
import V2_Funds from "@/sections/funds/V2_Funds";
import RollingLogo from "@/components/RollingLogo";
export default function V2Page() {
  return (
    <div>
      <V2_HeroSection />
      <RollingLogo />
      <V2_Opportunity />
      <V2_Technology />
      <V2_BusinessModel />
      <V2_Team />
      <V2_Funds />
    </div>
  );
}
