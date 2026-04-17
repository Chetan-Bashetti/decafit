import { Link } from "react-router-dom";
import { Apple, Clock, Flame, UtensilsCrossed } from "lucide-react";

const blocks = [
  {
    title: "Custom macros",
    body: "Anchored to weight, training phase, and blood markers (Gold+).",
    icon: Flame,
  },
  {
    title: "Race week",
    body: "Carb timing + hydration without the spreadsheet anxiety.",
    icon: Clock,
  },
  {
    title: "Race fuel",
    body: "Hour-by-hour fueling prompts for mock races.",
    icon: Apple,
  },
  {
    title: "Meal patterns",
    body: "7-day templates you can actually cook — not fantasy Instagram meals.",
    icon: UtensilsCrossed,
  },
];

export function NutritionTeaserSection() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-950/30 via-deck-black to-deck-orange/10">
        <div className="grid gap-0 lg:grid-cols-2">
          <div className="p-8 sm:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-emerald-400">
              Nutrition
            </p>
            <h2 className="mt-3 font-display text-4xl text-white sm:text-5xl">
              Race-week fueling{" "}
              <span className="text-gradient-fire">without the fluff</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
              Quick nutrition questionnaires are common — Deckfit ties food to your{" "}
              <strong className="text-zinc-200">tier</strong>: Silver gets sensible defaults; Gold
              and Diamond unlock deeper analysis when you upload labs.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {blocks.map((b) => {
                const Icon = b.icon;
                return (
                <div
                  key={b.title}
                  className="rounded-2xl border border-white/5 bg-black/30 p-4"
                >
                  <Icon className="h-5 w-5 text-emerald-400" />
                  <h3 className="mt-2 text-sm font-bold text-white">{b.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-500">{b.body}</p>
                </div>
              );
              })}
            </div>
            <Link
              to="/tiers"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-gradient-cta px-8 py-4 text-sm font-bold text-black shadow-glow"
            >
              See which tier unlocks full nutrition
            </Link>
            <p className="mt-4 text-xs text-zinc-500">
              Takes a focused onboarding · Gold+ for blood-linked plans
            </p>
          </div>
          <div className="relative min-h-[280px] border-t border-white/5 bg-[radial-gradient(ellipse_at_center,_rgba(255,107,33,0.15),_transparent_70%)] lg:border-l lg:border-t-0">
            <div className="absolute inset-0 flex flex-col justify-center p-8 sm:p-12">
              <p className="font-display text-5xl text-deck-hype/90">Fuel = fitness</p>
              <p className="mt-4 max-w-sm text-sm text-zinc-400">
                Train hard. Eat like you respect the session. Recover like you want another one tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
