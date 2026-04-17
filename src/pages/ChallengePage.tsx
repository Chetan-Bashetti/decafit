import { Link } from "react-router-dom";
import {
  Clock,
  Droplets,
  Flame,
  HeartPulse,
  Timer,
} from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CHALLENGE_OF_DAY } from "@/data/challengeOfDay";

export function ChallengePage() {
  const c = CHALLENGE_OF_DAY;

  return (
    <AppShell funnel funnelSubtitle="Challenge of the day" maxWidthClass="max-w-5xl">
      <div className="space-y-8">
        <div className="relative overflow-hidden rounded-3xl border border-deck-orange/35 bg-gradient-to-br from-deck-card via-deck-black to-purple-950/40 p-8 shadow-glow">
          <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-deck-orange/30 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-deck-cyan/20 blur-3xl" />
          <div className="relative">
            <p className="inline-flex items-center gap-2 rounded-full border border-deck-amber/40 bg-black/30 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-deck-amber">
              <Flame className="h-4 w-4 text-deck-orange" />
              {c.programName}
            </p>
            <h1 className="mt-4 font-display text-5xl leading-none text-white sm:text-6xl">
              Day {c.day}{" "}
              <span className="text-gradient-fire">· {c.focus}</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-zinc-300">{c.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-deck-elevated/80 px-4 py-2 text-deck-muted">
                <Timer className="h-4 w-4 text-deck-cyan" />
                ~{c.estimatedMinutes} min
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-deck-elevated/80 px-4 py-2 text-deck-muted">
                <HeartPulse className="h-4 w-4 text-deck-rose" />
                {c.intensity} · {c.calories}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-deck-elevated/80 px-4 py-2 text-deck-muted">
                <Clock className="h-4 w-4 text-deck-amber" />
                Main: {c.main.rounds} rounds
              </span>
            </div>
            <p className="mt-6 max-w-2xl border-l-2 border-deck-cyan/50 pl-4 text-sm text-zinc-400">
              {c.openProNote}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/tiers">
                <Button className="px-8 py-4 text-base">Choose a plan to log this</Button>
              </Link>
              <Link to="/">
                <Button variant="secondary" className="px-8 py-4 text-base">
                  Back to home
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card glow className="border-deck-orange/20">
            <h2 className="font-display text-2xl text-deck-amber">
              {c.warmup.title} · {c.warmup.durationMin} min
            </h2>
            <ol className="mt-4 space-y-2 text-sm text-zinc-300">
              {c.warmup.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-deck-orange">▸</span>
                  {item}
                </li>
              ))}
            </ol>
          </Card>

          <Card glow className="border-deck-cyan/25">
            <h2 className="flex items-center gap-2 font-display text-2xl text-white">
              Main set
              <span className="rounded-full bg-deck-orange/20 px-3 py-0.5 text-sm font-sans text-deck-amber">
                {c.main.rounds} rounds
              </span>
            </h2>
            <p className="mt-2 text-sm text-deck-muted">{c.main.subtitle}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-sky-300">
                  Open lane
                </p>
                <ul className="mt-3 space-y-3 text-sm text-zinc-200">
                  {c.main.open.map((row, i) => (
                    <li key={`open-${i}-${row.label}`}>
                      <span className="font-semibold text-white">{row.label}</span>
                      {row.detail && (
                        <span className="block text-xs text-sky-200/90">
                          {row.detail}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-rose-500/35 bg-rose-500/5 p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-rose-300">
                  Pro lane
                </p>
                <ul className="mt-3 space-y-3 text-sm text-zinc-200">
                  {c.main.pro.map((row, i) => (
                    <li key={`pro-${i}-${row.label}`}>
                      <span className="font-semibold text-white">{row.label}</span>
                      {"detail" in row && row.detail ? (
                        <span className="block text-xs text-rose-200/90">
                          {row.detail}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="font-display text-2xl text-zinc-100">
              {c.cooldown.title} · {c.cooldown.durationMin} min
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {c.cooldown.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-deck-lime">✓</span> {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="border-deck-cyan/30 bg-gradient-to-br from-cyan-500/5 to-transparent">
            <h2 className="flex items-center gap-2 font-display text-2xl text-deck-cyan">
              <Droplets className="h-6 w-6" />
              Hydration
            </h2>
            <dl className="mt-4 space-y-3 text-sm text-zinc-300">
              <div>
                <dt className="font-semibold text-white">Pre</dt>
                <dd>{c.hydration.pre}</dd>
              </div>
              <div>
                <dt className="font-semibold text-white">During</dt>
                <dd>{c.hydration.during}</dd>
              </div>
              <div>
                <dt className="font-semibold text-white">Post</dt>
                <dd>{c.hydration.post}</dd>
              </div>
            </dl>
          </Card>
        </div>

        <Card className="border-deck-violet/30 bg-gradient-to-r from-deck-violet/10 to-transparent">
          <p className="text-sm font-medium text-deck-violet">
            Coach note
          </p>
          <p className="mt-2 text-zinc-200">{c.coachNote}</p>
        </Card>
      </div>
    </AppShell>
  );
}
