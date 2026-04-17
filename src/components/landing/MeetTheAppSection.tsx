import { Link } from "react-router-dom";
import { Brain, CalendarClock, Video } from "lucide-react";
import { Button } from "@/components/ui/Button";

const pillars = [
  {
    title: "Personalized programming",
    body: "Daily sessions that match your tier, schedule, and limiters — not random WODs.",
    icon: Brain,
    accent: "from-deck-hype/90 to-amber-400",
  },
  {
    title: "Weekly evolution",
    body: "Progressions that adapt as you absorb load — smart periodization with a human coach in the loop.",
    icon: CalendarClock,
    accent: "from-deck-cyan to-sky-400",
  },
  {
    title: "Coach + accountability",
    body: "Calls, feedback, and a dashboard loop so training stays honest when motivation dips.",
    icon: Video,
    accent: "from-deck-violet to-deck-magenta",
  },
];

export function MeetTheAppSection() {
  return (
    <section className="border-y border-white/5 bg-gradient-to-b from-deck-surface/80 to-deck-black px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-deck-hype">
            Meet the Deckfit hub
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-wide text-white sm:text-6xl">
            Coach-led hybrid race training —{" "}
            <span className="text-gradient-hype">without the guesswork.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Structured personalization built for real calendars — here it&apos;s{" "}
            <span className="font-semibold text-white">Prashant & Team Inspiration</span>{" "}
            designing your blocks, reviewing your data, and keeping you race-ready.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group rounded-3xl border border-white/5 bg-deck-card/60 p-6 shadow-inner-light transition hover:border-deck-hype/30 hover:shadow-[0_0_40px_-12px_rgba(255,230,0,0.25)]"
            >
              <div
                className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${p.accent} p-3 text-black shadow-lg`}
              >
                <p.icon className="h-7 w-7" strokeWidth={2.2} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link to="/tiers">
            <Button className="px-10 py-4 text-base">Explore membership tiers</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
