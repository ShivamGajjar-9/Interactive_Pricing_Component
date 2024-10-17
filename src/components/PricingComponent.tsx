"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface PricingTier {
  pageviews: string;
  monthlyPrice: number;
}

const PRICING_TIERS: PricingTier[] = [
  { pageviews: "10K", monthlyPrice: 8 },
  { pageviews: "50K", monthlyPrice: 12 },
  { pageviews: "100K", monthlyPrice: 16 },
  { pageviews: "500K", monthlyPrice: 24 },
  { pageviews: "1M", monthlyPrice: 36 },
];

export default function PricingComponent() {
  const [currentTierIndex, setCurrentTierIndex] = useState<number>(2);
  const [isYearly, setIsYearly] = useState<boolean>(false);

  const currentTier = PRICING_TIERS[currentTierIndex];
  const price = isYearly
    ? currentTier.monthlyPrice * 0.75
    : currentTier.monthlyPrice;

  return (
    <main className="min-h-screen bg-very-pale-blue flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        <div className="text-center mb-10">
          <h1 className="text-dark-blue text-3xl font-extrabold mb-2">
            Simple, traffic-based pricing
          </h1>
          <p className="text-grayish-blue text-sm">
            Sign-up for our 30-day trial. No credit card required.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <p className="text-grayish-blue uppercase tracking-wider text-sm font-bold">
              {currentTier.pageviews} Pageviews
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-4xl font-extrabold text-dark-blue">
                ${price.toFixed(2)}
              </span>
              <span className="text-grayish-blue ml-2">/ month</span>
            </div>
          </div>

          <div className="mb-10">
            <Slider
              defaultValue={[currentTierIndex]}
              max={4}
              min={0}
              step={1}
              onValueChange={(value) => setCurrentTierIndex(value[0])}
              className="[&_[role=slider]]:bg-strong-cyan [&_[role=slider]]:border-0 
                        [&_[role=slider]]:shadow-lg [&_[role=slider]]:h-10 [&_[role=slider]]:w-10
                        [&_[role=slider]]:hover:bg-[hsl(174,86%,40%)]
                        [&_[role=track]]:bg-soft-cyan [&_[role=track]]:h-2"
            />
          </div>

          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="text-grayish-blue text-sm">Monthly Billing</span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="bg-light-grayish-blue-dark data-[state=checked]:bg-strong-cyan"
            />
            <div className="flex items-center">
              <span className="text-grayish-blue text-sm">Yearly Billing</span>
              <span className="ml-2 text-light-red bg-light-red-light text-xs font-bold px-2 py-1 rounded-full">
                -25%
              </span>
            </div>
          </div>

          <hr className="border-light-grayish-blue mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-between">
            <ul className="space-y-3 mb-8 md:mb-0">
              <li className="flex items-center text-grayish-blue text-sm">
                <CheckIcon className="w-4 h-4 text-strong-cyan mr-2" />
                Unlimited websites
              </li>
              <li className="flex items-center text-grayish-blue text-sm">
                <CheckIcon className="w-4 h-4 text-strong-cyan mr-2" />
                100% data ownership
              </li>
              <li className="flex items-center text-grayish-blue text-sm">
                <CheckIcon className="w-4 h-4 text-strong-cyan mr-2" />
                Email reports
              </li>
            </ul>

            <Button className="bg-dark-blue hover:bg-opacity-80 text-pale-blue px-12">
              Start my trial
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
