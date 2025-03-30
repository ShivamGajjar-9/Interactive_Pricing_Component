"use client";

import { CustomSlider } from "@/components/ui/custom-slider";
import { SliderThumb } from "@/app/interactivePricing/components/SliderThumb";
import { PRICING_TIERS } from "@/app/interactivePricing/types";
import { FormField } from "@/components/ui/form";

interface PricingSliderFieldProps {
  value: number;
  onChange: (value: number) => void;
  label: string;
  isYearly: boolean;
}

export const PricingSliderField = ({ value = 2, onChange, label, isYearly }: PricingSliderFieldProps) => {
  return (
    <FormField
      name="pricingTier"
      render={({ field }) => {
        const currentTier = PRICING_TIERS[field.value];
        
        if (!currentTier) {
          return <div>Loading...</div>;
        }

        const price = isYearly 
          ? currentTier.monthlyPrice * 0.65 
          : currentTier.monthlyPrice;

        return (
          <div>
            {/* Price and Pageviews */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <p className="text-[#848EAD] uppercase tracking-wider text-sm font-bold">
                {currentTier.pageviews} PAGEVIEWS
              </p>
              <div className="flex items-center mt-4 md:mt-0">
                <span className="text-4xl font-extrabold text-[#293356]">
                  ${price.toFixed(2)}
                </span>
                <span className="text-[#848EAD] ml-2">/ month</span>
              </div>
            </div>

            {/* Slider */}
            <div className="mb-8">
              <CustomSlider
                value={[field.value]}
                max={PRICING_TIERS.length - 1}
                step={1}
                onValueChange={(newValue) => field.onChange(newValue[0])}
                ThumbComponent={SliderThumb}
                className="bg-[#ECF0FB] h-2 rounded-full [&>div]:bg-[#10D5C2]"
              />
            </div>
          </div>
        );
      }}
    />
  );
};