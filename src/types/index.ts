export type MembershipTierId = "silver" | "gold" | "diamond";

export interface MembershipTier {
  id: MembershipTierId;
  name: string;
  shortLabel: string;
  priceInr: number;
  periodMonths: number;
  /** Tailwind gradient for text */
  accentClass: string;
  borderClass: string;
  cardBgClass: string;
  badgeClass: string;
  glowClass: string;
  tagline: string;
  features: string[];
  /** Highlights for comparison table */
  perks: string[];
}

export type SurveySectionId =
  | "fundamentals"
  | "raceBenchmarks"
  | "lifestyle"
  | "nutrition"
  | "mental";
