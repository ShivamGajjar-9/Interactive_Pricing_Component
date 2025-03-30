"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface BillingToggleProps {
  isYearly: boolean;
  setIsYearly: (value: boolean) => void;
  className?: string;
}

export function BillingToggle({ isYearly, setIsYearly, className }: BillingToggleProps) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <Label htmlFor="billing-mode" className="text-[#848EAD] text-sm cursor-pointer">
        Monthly billing
      </Label>
      <Switch
        id="billing-mode"
        checked={isYearly}
        onCheckedChange={setIsYearly}
        className="bg-[#CFD8EF] data-[state=checked]:bg-[#7AEADF]"
      />
      <div className="flex items-center">
        <Label htmlFor="billing-mode" className="text-[#848EAD] text-sm cursor-pointer">
          Yearly billing
        </Label>
        <span className="ml-2 text-[#FF8D68] bg-[#FEEDE8] text-xs font-bold px-2 py-1 rounded-full">
          35% discount
        </span>
      </div>
    </div>
  );
}