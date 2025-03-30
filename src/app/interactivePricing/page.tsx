"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { ThemeToggle } from "@/app/interactivePricing/components/ThemeToggle";
import { PricingSliderField } from "@/components/interactive-pricing/PricingSliderField";
import { BillingToggleField } from "@/components/interactive-pricing/BillingToggleField";
import { PricingFeatures } from "@/components/interactive-pricing/PricingFeatures";
import { Button } from "@/components/ui/button";

export default function InteractivePricingPage() {
  const [mounted, setMounted] = useState(false);

  const form = useForm({
    defaultValues: {
      pricingTier: 4, // Start with 1M pageviews
      isYearly: false,
    },
  });

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col relative bg-[#F7FAFF]">
      <ThemeToggle />

      <div className="flex-grow flex items-center justify-center p-4 relative z-10">
        <div className="w-full max-w-xl">
          <div className="text-center mb-10">
            <h1 className="text-[#293356] text-3xl font-extrabold mb-2">
              Simple, traffic-based pricing
            </h1>
            <p className="text-[#848EAD] text-sm">
              Sign-up for our 30-day trial. No credit card required.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
            <Form {...form}>
              <div className="space-y-8">
                <PricingSliderField
                  value={form.watch("pricingTier")}
                  onChange={(value) => form.setValue("pricingTier", value)}
                  label="PAGEVIEWS"
                  isYearly={form.watch("isYearly")}
                />
                <BillingToggleField
                  value={form.watch("isYearly")}
                  onChange={(value) => form.setValue("isYearly", value)}
                />
                <hr className="border-[#ECF0FB]" />
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <PricingFeatures />
                  <Button className="rounded-full bg-[#293356] hover:bg-[#293356]/90 text-white px-12 mt-8 md:mt-0">
                    Start my trial
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}