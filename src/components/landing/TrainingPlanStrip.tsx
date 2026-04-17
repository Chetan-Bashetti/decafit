import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function TrainingPlanStrip() {
  return (
    <section className="border-y border-deck-hype/20 bg-deck-hype/5 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-deck-hype">
            Ready for the full arc?
          </p>
          <h2 className="mt-2 font-display text-3xl text-white sm:text-4xl">
            Unlimited structure · Nutrition depth · Performance tracking
          </h2>
          <p className="mt-2 max-w-xl text-sm text-zinc-400">
            Silver builds rhythm. Gold adds labs + fueling. Diamond adds 1:1 strategy — we sell{" "}
            <span className="text-zinc-200">verified coaching + your real life calendar</span>.
          </p>
        </div>
        <Link
          to="/tiers"
          className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-deck-hype bg-deck-hype px-6 py-3 text-sm font-bold text-black shadow-[0_0_30px_rgba(255,230,0,0.35)] transition hover:brightness-105"
        >
          Compare tiers
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
