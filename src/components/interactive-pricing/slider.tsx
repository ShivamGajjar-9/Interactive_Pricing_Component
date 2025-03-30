"use client";

import * as React from "react";
import { Slider } from "@/components/ui/slider";

interface PricingSliderProps {
  value: number;
  onChange: (value: number) => void;
  max: number;
  className?: string;
}

export function PricingSlider({ value, onChange, max, className }: PricingSliderProps) {
  return (
    <Slider
      defaultValue={[value]}
      max={max}
      step={1}
      onValueChange={(value) => onChange(value[0])}
      className={`bg-[#A4F3EB] [&>div]:bg-[#10D5C2] ${className}`}
    />
  );
}