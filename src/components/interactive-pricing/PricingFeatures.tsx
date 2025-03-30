"use client";

export const PricingFeatures = () => {
  return (
    <ul className="space-y-3">
      <li className="flex items-center text-[#848EAD] text-sm">
        <svg className="w-4 h-4 text-[#10D5C2] mr-4" viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
        Unlimited websites
      </li>
      <li className="flex items-center text-[#848EAD] text-sm">
        <svg className="w-4 h-4 text-[#10D5C2] mr-4" viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
        100% data ownership
      </li>
      <li className="flex items-center text-[#848EAD] text-sm">
        <svg className="w-4 h-4 text-[#10D5C2] mr-4" viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
        Email reports
      </li>
    </ul>
  );
};