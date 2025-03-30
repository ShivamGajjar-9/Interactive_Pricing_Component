import { PricingSliderField } from "@/components/interactive-pricing/PricingSliderField";
import { BillingToggleField } from "@/components/interactive-pricing/BillingToggleField";
import { PricingFeatures } from "@/components/interactive-pricing/PricingFeatures";
import { Button } from "@/components/ui/button";
import { PRICING_TIERS } from "./types";

export const FormFields = [
  {
    name: "pricingTier",
    label: "PAGEVIEWS",
    max: PRICING_TIERS.length - 1,
    defaultValue: 4,
    rules: {
      required: "Please select a pricing tier",
    },
  },
  {
    name: "isYearly",
    label: "Billing Period",
    defaultValue: false,
  },
  {
    component: PricingFeatures,
    name: "features",
    isStatic: true,
  },
  {
    component: Button,
    name: "submit",
    isStatic: true,
    props: {
      className: "rounded-full bg-[#293356] hover:bg-[#293356]/90 text-white px-12",
      type: "submit",
      children: "Start my trial",
    },
  },
];