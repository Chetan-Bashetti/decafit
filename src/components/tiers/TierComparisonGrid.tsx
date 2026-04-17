import { useNavigate } from "react-router-dom";
import { Check, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MEMBERSHIP_TIERS } from "@/data/tiers";
import { useJourney } from "@/context/JourneyContext";
import type { MembershipTierId } from "@/types";

function formatInr(n: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
}

export function TierComparisonGrid() {
  const navigate = useNavigate();
  const { setTier } = useJourney();

  function join(tierId: MembershipTierId) {
    setTier(tierId);
    navigate(`/payment/${tierId}`);
  }

  return (
    <div className="mx-auto max-w-5xl">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-deck-amber">
          6-month hybrid race commitment
        </p>
        <h2 className="mt-2 font-display text-4xl tracking-wide text-white sm:text-6xl">
          Pick your{" "}
          <span className="text-gradient-fire">performance tier</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-deck-muted">
          Every tier includes your personalized dashboard. Gold and Diamond add
          labs, nutrition depth, and 1:1 strategy for race week and beyond.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {MEMBERSHIP_TIERS.map((tier) => (
          <div
            key={tier.id}
            className={`relative flex flex-col overflow-hidden rounded-3xl border-2 ${tier.borderClass} ${tier.cardBgClass} ${tier.glowClass} p-6 shadow-inner-light backdrop-blur-sm`}
          >
            {tier.id === "diamond" && (
              <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-black/40 px-3 py-1 text-xs font-bold text-deck-amber ring-1 ring-deck-orange/40">
                <Sparkle className="h-3.5 w-3.5" />
                Most complete
              </div>
            )}
            <div
              className={`inline-flex w-fit bg-gradient-to-r ${tier.accentClass} bg-clip-text font-display text-4xl tracking-wide text-transparent`}
            >
              {tier.name}
            </div>
            <p className={`mt-2 text-xs font-semibold uppercase ${tier.badgeClass} w-fit rounded-full px-2 py-1`}>
              {tier.shortLabel}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300">
              {tier.tagline}
            </p>
            <p className="mt-6 font-display text-4xl text-white">
              {formatInr(tier.priceInr)}
              <span className="text-base font-sans font-normal text-deck-muted">
                {" "}
                / {tier.periodMonths} mo
              </span>
            </p>
            <ul className="mt-6 flex-1 space-y-3 text-sm text-zinc-200">
              {tier.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-deck-lime" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-xl border border-white/5 bg-black/25 p-3 text-xs text-deck-muted">
              <span className="font-semibold text-deck-cyan">Highlights: </span>
              {tier.perks.join(" · ")}
            </div>
            <Button
              className="mt-6 w-full py-4 text-base uppercase tracking-wider"
              variant={tier.id === "gold" ? "accent" : "primary"}
              onClick={() => join(tier.id)}
            >
              Join {tier.name}
            </Button>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-deck-muted">
        Ready to join? You&apos;ll scan on the next screen, then unlock the 30-step
        onboarding survey.
      </p>
    </div>
  );
}
