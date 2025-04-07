"use client";

import V2_BusinessModel from "@/sections/business-model/V2_BusinessModel";
import V1_HeroSection from "@/sections/hero/V1_HeroSection";
import V2_Opportunity from "@/sections/opportunity/V2_Opportunity";
import V2_Team from "@/sections/team/V2_Team";
import V2_Technology from "@/sections/technology/V2_Technology";
import V1_Value from "@/sections/value/V1_Value";

export default function V1Page() {
  return (
    <div>
      <V1_HeroSection />
      <V2_Opportunity />
      <V2_Technology />
      <V2_BusinessModel />
      <V2_Team />
      <V1_Value />
    </div>
  );
}
