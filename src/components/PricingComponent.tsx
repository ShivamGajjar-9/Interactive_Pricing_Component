"use client";

import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { CustomSlider } from "@/components/ui/custom-slider";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

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

const SliderThumb = ({ isDragging }: { isDragging: boolean }) => (
  <div
    className={`flex items-center justify-center w-10 h-10 rounded-full bg-primary hover:bg-accent transition-all duration-300 ${
      isDragging ? 'shadow-[0_0_20px_rgba(16,213,194,0.6)]' : 'shadow-lg shadow-primary/30'
    }`}
  >
    <svg width="22" height="13" xmlns="http://www.w3.org/2000/svg">
      <g fill="#FFF" fillRule="evenodd">
        <path d="M16 2.558v7.884a1 1 0 001.735.679l3.639-3.943a1 1 0 000-1.356l-3.64-3.943A1 1 0 0016 2.558zM6 2.558v7.884a1 1 0 01-1.735.679L.626 7.178a1 1 0 010-1.356l3.64-3.943A1 1 0 016 2.558z"/>
      </g>
    </svg>
  </div>
);

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

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        variant="outline"
        size="icon"
        className="w-10 h-10 rounded-full bg-background hover:bg-muted"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
};


export default function PricingComponent() {
  const [currentTierIndex, setCurrentTierIndex] = useState<number>(2);
  const [isYearly, setIsYearly] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTier = PRICING_TIERS[currentTierIndex];
  const price = isYearly
    ? (currentTier.monthlyPrice * 12 * 0.75) / 12
    : currentTier.monthlyPrice;

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen flex flex-col relative transition-colors duration-300">
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-muted z-0"></div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-secondary rounded-full opacity-50 blur-3xl z-0"></div>
      <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-secondary rounded-full opacity-50 blur-3xl z-0"></div>
      
      <div className="flex-grow flex items-center justify-center p-4 relative z-10">
        <div className="w-full max-w-xl">
          <div className="text-center mb-10">
            <h1 className="text-foreground text-3xl font-extrabold mb-2">
              Simple, traffic-based pricing
            </h1>
            <p className="text-muted-foreground text-sm">
              Sign-up for our 30-day trial. No credit card required.
            </p>
          </div>

          <div className="bg-card rounded-lg shadow-lg p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <p className="text-muted-foreground uppercase tracking-wider text-sm font-bold">
                {currentTier.pageviews} Pageviews
              </p>
              <div className="flex items-center mt-4 md:mt-0">
                <span className="text-4xl font-extrabold text-foreground">
                  ${price.toFixed(2)}
                </span>
                <span className="text-muted-foreground ml-2">/ month</span>
              </div>
            </div>

            <div className="mb-10">
              <CustomSlider
                defaultValue={[currentTierIndex]}
                max={PRICING_TIERS.length - 1}
                step={1}
                onValueChange={(value) => setCurrentTierIndex(value[0])}
                ThumbComponent={SliderThumb}
              />
            </div>

            <div className="flex items-center justify-center gap-4 mb-10">
              <span className="text-muted-foreground text-sm">Monthly Billing</span>
              <Switch
                checked={isYearly}
                onCheckedChange={setIsYearly}
                className="bg-secondary data-[state=checked]:bg-primary"
              />
              <div className="flex items-center">
                <span className="text-muted-foreground text-sm">Yearly Billing</span>
                <span className="ml-2 text-[#FF8C66] bg-[#FEEDE8] text-xs font-bold px-2 py-1 rounded-full">
                  -25%
                </span>
              </div>
            </div>

            <hr className="border-border mb-8" />

            <div className="flex flex-col md:flex-row items-center justify-between">
              <ul className="space-y-3 mb-8 md:mb-0">
                <li className="flex items-center text-muted-foreground text-sm">
                  <CheckIcon className="w-4 h-4 text-primary mr-2" />
                  Unlimited websites
                </li>
                <li className="flex items-center text-muted-foreground text-sm">
                  <CheckIcon className="w-4 h-4 text-primary mr-2" />
                  100% data ownership
                </li>
                <li className="flex items-center text-muted-foreground text-sm">
                  <CheckIcon className="w-4 h-4 text-primary mr-2" />
                  Email reports
                </li>
              </ul>

              <Button className="rounded-full bg-slate-700 hover:bg-slate-600 text-white px-12">
                Start my trial
              </Button>
            </div>
          </div>

          <div className="mt-8 text-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}

export { CustomSlider, PricingComponent };