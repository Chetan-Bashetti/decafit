import type { LucideIcon } from "lucide-react";
import {
  ClipboardList,
  CreditCard,
  Droplets,
  Home,
  LayoutDashboard,
  Sparkles,
  Trophy,
} from "lucide-react";

export interface FunnelStepMeta {
  id: string;
  label: string;
  path: string;
  /** Match path prefix e.g. /onboarding */
  matchPrefix?: string;
  icon: LucideIcon;
}

/** Ordered journey for chrome + progress UI — not all routes require prior steps in demo mode. */
export const FUNNEL_STEPS: FunnelStepMeta[] = [
  { id: "home", label: "Home", path: "/", icon: Home },
  { id: "challenge", label: "Challenge", path: "/challenge", icon: Sparkles },
  { id: "tiers", label: "Plans", path: "/tiers", icon: Trophy },
  { id: "payment", label: "Payment", path: "/payment", icon: CreditCard },
  {
    id: "onboarding",
    label: "Survey",
    path: "/onboarding/1",
    matchPrefix: "/onboarding",
    icon: ClipboardList,
  },
  { id: "blood", label: "Blood", path: "/blood-test", icon: Droplets },
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
];
