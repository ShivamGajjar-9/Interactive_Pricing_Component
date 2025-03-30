"use client";

import { Switch } from "@/components/ui/switch";
import { FormField, FormItem, FormControl, FormLabel, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Control } from "react-hook-form";

interface FormValues {
  isYearly: boolean;
}

interface BillingToggleFieldProps {
  control: Control<FormValues>;
  name: keyof FormValues;
  label?: string;
  className?: string;
  onChange?: (value: boolean) => void;
}

export const BillingToggleField = ({
  control,
  name,
  label,
  className,
  onChange,
}: BillingToggleFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("space-y-3", className)}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="flex items-center justify-center gap-4">
              <span className="text-[#848EAD] text-sm">Monthly billing</span>
              <Switch
                checked={field.value}
                onCheckedChange={(value) => {
                  console.log('Toggle value changed:', value);
                  field.onChange(value);
                  onChange?.(value);
                }}
                className="bg-[#CFD8EF] data-[state=checked]:bg-[#7AEADF] w-12 h-6"
              />
              <div className="flex items-center">
                <span className="text-[#848EAD] text-sm">Yearly billing</span>
                <span className="ml-2 text-[#FF8D68] bg-[#FEEDE8] text-xs font-bold px-2 py-1 rounded-full">
                  35% discount
                </span>
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};