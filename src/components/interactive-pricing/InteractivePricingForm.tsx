"use client";

import { UseFormReturn } from "react-hook-form";
import { BillingToggleField } from "./BillingToggleField";

interface FormValues {
  isYearly: boolean;
}

interface InteractivePricingFormProps {
  onSubmit?: (data: FormValues) => void;
  form: UseFormReturn<FormValues>;
}

export const InteractivePricingForm = ({ onSubmit, form }: InteractivePricingFormProps) => {
  const handleSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    onSubmit?.(data);
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
      <BillingToggleField
        control={form.control}
        name="isYearly"
        label="Billing Period"
        onChange={(value) => {
          console.log("Billing period changed:", value);
        }}
      />
    </form>
  );
}; 