import { Link, useLocation } from "react-router-dom";
import { FUNNEL_STEPS } from "@/components/journey/funnelConfig";
import { useJourney } from "@/context/JourneyContext";

interface FunnelChromeProps {
  /** Current stage label under the logo */
  subtitle?: string;
}

export function FunnelChrome({ subtitle }: FunnelChromeProps) {
  const { pathname } = useLocation();
  const { tier } = useJourney();

  function isActive(step: (typeof FUNNEL_STEPS)[number]) {
    if (step.matchPrefix) return pathname.startsWith(step.matchPrefix);
    if (step.id === "payment") return pathname.startsWith("/payment");
    return pathname === step.path;
  }

  function hrefFor(step: (typeof FUNNEL_STEPS)[number]) {
    if (step.id === "payment") {
      return tier ? `/payment/${tier}` : "/tiers";
    }
    return step.path;
  }

  return (
    <div className="border-b border-white/5 bg-deck-black/80 backdrop-blur-xl">
      <div className="mx-auto max-w-5xl px-4 py-3 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-xl text-white">
              DECAF<span className="text-gradient-fire">it</span>
            </span>
            {subtitle && (
              <span className="hidden text-xs text-deck-muted sm:inline">
                · {subtitle}
              </span>
            )}
          </Link>
        </div>

        <nav
          className="mt-3 flex gap-1 overflow-x-auto pb-1 text-xs"
          aria-label="Journey"
        >
          {FUNNEL_STEPS.filter((s) => s.id !== "home").map((step) => {
            const active = isActive(step);
            return (
              <Link
                key={step.id}
                to={hrefFor(step)}
                className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 font-medium transition ${
                  active
                    ? "bg-gradient-cta text-black shadow-glow"
                    : "bg-deck-elevated/60 text-deck-muted hover:text-white"
                }`}
              >
                <step.icon className="h-3.5 w-3.5" />
                {step.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
