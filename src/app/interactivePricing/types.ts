export interface PricingTier {
  pageviews: string;
  monthlyPrice: number;
}

export const PRICING_TIERS: PricingTier[] = [
  { pageviews: "10K", monthlyPrice: 8 },
  { pageviews: "50K", monthlyPrice: 12 },
  { pageviews: "100K", monthlyPrice: 16 },
  { pageviews: "500K", monthlyPrice: 24 },
  { pageviews: "1M", monthlyPrice: 36 },
]; 