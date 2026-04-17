import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-8 sm:px-6 sm:pb-28 sm:pt-12 lg:pt-16">
      {/* Angled highlight streak */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgba(255,230,0,0.07)_50%,transparent_60%)]" />
      <div className="pointer-events-none absolute -left-24 top-32 h-80 w-80 rounded-full bg-deck-hype/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-deck-orange/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-48 w-[140%] -translate-x-1/2 bg-gradient-to-t from-deck-black via-deck-black/20 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-deck-hype/30 bg-deck-hype/10 px-4 py-1.5 text-xs font-semibold text-deck-hype shadow-inner-light backdrop-blur">
          <Sparkles className="h-3.5 w-3.5" />
          Free assessment-style onboarding · Coach-led hybrid race prep
        </div>

        <p className="mt-8 font-display text-3xl tracking-[0.02em] text-zinc-300 sm:text-4xl md:text-5xl">
          Train smarter with
        </p>
        <h1 className="mt-1 font-display text-6xl leading-[0.9] tracking-[0.02em] text-deck-hype sm:text-8xl md:text-9xl [text-shadow:0_0_60px_rgba(255,230,0,0.25)]">
          DECKFIT
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          Get personalized hybrid workouts, structured race strategy, and feedback from a
          certified coach — whether you&apos;re stepping into your first race or chasing a
          personal best. From complete beginners to{" "}
          <span className="font-semibold text-zinc-200">elite ambitions</span>.
        </p>

        {/* Dual CTAs: profile + workout preview */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Link to="/tiers" className="w-full sm:w-auto">
            <Button className="w-full px-8 py-4 text-base shadow-[0_0_40px_-8px_rgba(255,230,0,0.4)] sm:min-w-[240px]">
              Get your training profile
              <ArrowRight className="ml-2 inline h-4 w-4" />
            </Button>
          </Link>
          <Link to="/challenge" className="w-full sm:w-auto">
            <Button
              variant="secondary"
              className="w-full border-deck-hype/30 px-8 py-4 text-base text-white hover:border-deck-hype/60 sm:min-w-[240px]"
            >
              <Zap className="mr-2 inline h-4 w-4 text-deck-hype" />
              Get today&apos;s workout preview
            </Button>
          </Link>
        </div>

        <div className="mt-16 grid gap-4 border-t border-white/5 pt-10 sm:grid-cols-3">
          {[
            {
              k: "30",
              l: "Profiling questions",
              s: "Vitals · benchmarks · lifestyle",
            },
            { k: "8", l: "Race stations", s: "Mapped to your weak links" },
            { k: "3", l: "Membership tiers", s: "Silver · Gold · Diamond" },
          ].map((item) => (
            <div
              key={item.l}
              className="rounded-2xl border border-white/5 bg-deck-card/30 p-5 transition hover:border-deck-hype/20"
            >
              <p className="font-display text-5xl text-gradient-hype">{item.k}</p>
              <p className="mt-1 font-semibold text-white">{item.l}</p>
              <p className="mt-1 text-sm text-zinc-500">{item.s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
