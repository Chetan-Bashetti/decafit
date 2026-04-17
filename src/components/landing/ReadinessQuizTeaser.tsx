import { Link } from "react-router-dom";
import { ArrowRight, Gauge } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ReadinessQuizTeaser() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[2rem] border border-deck-hype/25 bg-gradient-to-br from-zinc-900/90 via-deck-black to-indigo-950/40 shadow-[0_0_80px_-30px_rgba(255,230,0,0.25)]">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="border-b border-white/10 p-8 sm:p-10 lg:border-b-0 lg:border-r">
              <div className="inline-flex items-center gap-2 rounded-full bg-deck-hype/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-deck-hype">
                <Gauge className="h-4 w-4" />
                Is your body race-ready?
              </div>
              <h2 className="mt-5 font-display text-4xl leading-none text-white sm:text-5xl">
                Build your{" "}
                <span className="text-gradient-hype">performance profile</span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
                Like a professional readiness assessment, we use vitals, benchmarks, and lifestyle
                signals — <strong className="text-zinc-200">30 structured questions</strong>{" "}
                so programming isn&apos;t generic.
              </p>
              <Link to="/tiers" className="mt-8 inline-block">
                <Button className="px-8 py-4">
                  Start with a tier & onboarding
                  <ArrowRight className="ml-2 inline h-4 w-4" />
                </Button>
              </Link>
              <p className="mt-4 text-xs text-zinc-500">
                Estimated 12–18 minutes · Saves progress in your browser (demo)
              </p>
            </div>

            <div className="relative p-8 sm:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,230,0,0.08),transparent_55%)]" />
              <div className="relative">
                <div className="flex items-center justify-between text-xs font-medium text-zinc-500">
                  <span>Section 1 of 5 · Fundamentals</span>
                  <span className="text-deck-hype">3% complete</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-zinc-800">
                  <div className="h-full w-[8%] rounded-full bg-gradient-to-r from-deck-hype to-amber-400 shadow-[0_0_20px_rgba(255,230,0,0.5)]" />
                </div>
                <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                    Sample question
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    What&apos;s your current 5K run time?
                  </p>
                  <p className="mt-2 text-sm text-zinc-500">
                    Aerobic engine data — foundation of race pacing (same idea as a formal
                    assessment).
                  </p>
                  <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {["22–24 min · Strong base", "28–30 min · Building engine"].map((x) => (
                      <button
                        key={x}
                        type="button"
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-zinc-300 transition hover:border-deck-hype/40 hover:bg-deck-hype/5"
                      >
                        {x}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
