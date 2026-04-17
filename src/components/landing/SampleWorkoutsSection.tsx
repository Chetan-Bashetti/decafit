import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SAMPLE_WORKOUT_CARDS } from "@/data/sampleWorkoutsMarketing";

export function SampleWorkoutsSection() {
  return (
    <section className="border-t border-white/5 bg-deck-surface/40 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-display text-4xl text-white sm:text-6xl">
            Popular workout{" "}
            <span className="text-gradient-fire">starting points</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-400 sm:text-base">
            Pre-built session templates are a great start — here are six entry patterns; your real plan is
            personalized after onboarding.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SAMPLE_WORKOUT_CARDS.map((w) => (
            <Link
              key={w.title}
              to={w.to}
              className="group flex flex-col rounded-2xl border border-white/5 bg-deck-card/60 p-5 transition hover:border-deck-cyan/30 hover:shadow-glow-cyan"
            >
              <span className="text-3xl">{w.emoji}</span>
              <h3 className="mt-3 font-display text-2xl text-white group-hover:text-deck-cyan">
                {w.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-zinc-400">{w.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
                <span className="rounded-full bg-white/5 px-3 py-1 text-deck-amber">
                  {w.level}
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-zinc-400">
                  {w.duration}
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-zinc-500">
                  {w.place}
                </span>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-deck-hype opacity-0 transition group-hover:opacity-100">
                Open in app <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/challenge"
            className="inline-flex items-center gap-2 text-sm font-bold text-white underline decoration-deck-hype decoration-2 underline-offset-4 hover:text-deck-hype"
          >
            Browse today&apos;s session →
          </Link>
        </div>
      </div>
    </section>
  );
}
