"use client";

import { useState } from 'react';
import { Space_Grotesk } from "next/font/google";
import { InteractivePricingForm } from "@/components/interactive-pricing/InteractivePricingForm";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const formSchema = z.object({
  isYearly: z.boolean().default(false),
});

type FormValues = z.infer<typeof formSchema>;

export default function InteractivePricingPage() {
  const [pricingDetails, setPricingDetails] = useState<FormValues>({
    isYearly: false,
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      isYearly: false,
    },
    mode: "onChange",
  });

  const handleFormSubmit = (values: FormValues) => {
    setPricingDetails(values);
    console.log("Form submitted with values:", values);
  };

  const handleConfirmClick = () => {
    console.log("Current pricing details:", pricingDetails);
  };

  return (
    <main className={`${spaceGrotesk.className} min-h-screen bg-white`}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Interactive Pricing</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <InteractivePricingForm 
              onSubmit={handleFormSubmit}
              form={form}
            />
            
            <Button
              className="w-full mt-6 bg-[#7AEADF] text-white hover:bg-opacity-90 transition-colors"
              onClick={handleConfirmClick}
            >
              Confirm Selection
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
} 
} 