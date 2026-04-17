import type { MembershipTier } from "@/types";

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: "silver",
    name: "Silver",
    shortLabel: "Engine start",
    priceInr: 20_000,
    periodMonths: 6,
    accentClass: "from-slate-200 via-slate-300 to-slate-400",
    borderClass: "border-slate-400/50",
    cardBgClass: "bg-gradient-card-silver",
    badgeClass: "bg-slate-500/20 text-slate-200 ring-1 ring-slate-400/30",
    glowClass: "shadow-[0_0_40px_-10px_rgba(148,163,184,0.35)]",
    tagline:
      "Structured daily hybrid-race sessions, coach check-ins, and a clear weekly rhythm.",
    features: [
      "Daily hybrid-race workout details & progressions",
      "Weekly schedule you can actually stick to",
      "Phone call & written feedback from coach",
      "Performance dashboard access (all tiers)",
    ],
    perks: ["Workouts", "Schedule", "Calls", "Dashboard"],
  },
  {
    id: "gold",
    name: "Gold",
    shortLabel: "Full stack",
    priceInr: 25_000,
    periodMonths: 6,
    accentClass: "from-amber-300 via-yellow-400 to-amber-500",
    borderClass: "border-amber-400/60",
    cardBgClass: "bg-gradient-card-gold",
    badgeClass:
      "bg-amber-500/15 text-amber-200 ring-1 ring-amber-400/40",
    glowClass: "shadow-[0_0_50px_-8px_rgba(251,191,36,0.4)]",
    tagline:
      "Everything in Silver plus blood markers, nutrition strategy, and calorie awareness.",
    features: [
      "Everything in Silver",
      "Blood test analysis & actionable insights",
      "Diet & nutrition plan aligned to training",
      "Calories in / out tracking templates",
    ],
    perks: ["+ Blood", "+ Nutrition", "+ Calories", "All Silver"],
  },
  {
    id: "diamond",
    name: "Diamond",
    shortLabel: "Race-ready",
    priceInr: 30_000,
    periodMonths: 6,
    accentClass: "from-orange-400 via-deck-orange to-fuchsia-400",
    borderClass: "border-orange-400/80",
    cardBgClass: "bg-gradient-card-diamond",
    badgeClass:
      "bg-orange-500/20 text-orange-100 ring-1 ring-orange-400/50",
    glowClass: "shadow-glow",
    tagline:
      "White-glove prep: 1:1 calls, race-week strategy, and advanced fueling for peak day.",
    features: [
      "Everything in Gold",
      "1-to-1 video conference sessions",
      "Travel & race-day strategy plan",
      "Advanced diet periodization around peaking",
    ],
    perks: ["+ 1:1 Video", "+ Travel plan", "+ Advanced diet", "All Gold"],
  },
];
