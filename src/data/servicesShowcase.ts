import {
  Dumbbell,
  Flame,
  HeartPulse,
  PersonStanding,
  Scale,
  Soup,
  Timer,
  Triangle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
}

/** Eight pillars aligned with hybrid coaching offerings (Team Inspiration). */
export const SERVICES_SHOWCASE: ServiceItem[] = [
  {
    title: "Marathon training",
    description: "Periodized mileage, threshold work, and race-week tapering.",
    icon: Timer,
    accent: "from-deck-cyan/80 to-deck-violet/80",
  },
  {
    title: "Ironman / tri prep",
    description: "Swim–bike–run volume planning with recovery guardrails.",
    icon: HeartPulse,
    accent: "from-deck-rose/80 to-deck-orange/80",
  },
  {
    title: "Hybrid race performance",
    description: "Race simulations, pacing, and station-specific strength.",
    icon: Flame,
    accent: "from-deck-orange to-deck-amber",
  },
  {
    title: "Strength & conditioning",
    description: "Power for the floor — hinges, squats, carries, and grit.",
    icon: Dumbbell,
    accent: "from-amber-400 to-orange-500",
  },
  {
    title: "Hybrid fitness",
    description: "Blend endurance + functional fitness without burning out.",
    icon: Triangle,
    accent: "from-deck-violet to-deck-magenta",
  },
  {
    title: "Personal 1:1 coaching",
    description: "Deep personalization for schedule, travel, and limiters.",
    icon: PersonStanding,
    accent: "from-deck-cyan to-teal-400",
  },
  {
    title: "Fat loss & body comp",
    description: "Training + habits that keep muscle while dropping fluff.",
    icon: Scale,
    accent: "from-emerald-400/90 to-cyan-400/90",
  },
  {
    title: "Diet & nutrition",
    description: "Meals that match your training phase — not generic templates.",
    icon: Soup,
    accent: "from-deck-amber to-yellow-200",
  },
];
