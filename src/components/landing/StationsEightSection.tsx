import { Link } from "react-router-dom";
import { RACE_STATIONS } from "@/data/raceStations";

export function StationsEightSection() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-block rounded-full bg-deck-orange/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-deck-orange">
              Race craft
            </span>
            <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-wide text-white sm:text-6xl">
              Master every{" "}
              <span className="text-gradient-hype">race station</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
              Technique, pacing, and mistakes to fix — mapped to how Deckfit prescribes sessions
              in your dashboard.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-deck-card/50 p-4 text-right lg:max-w-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Target finish (example)
            </p>
            <div className="mt-3 flex justify-end gap-4 text-sm">
              <div>
                <p className="text-deck-hype font-display text-2xl">60–75</p>
                <p className="text-xs text-zinc-500">Elite</p>
              </div>
              <div>
                <p className="text-deck-cyan font-display text-2xl">75–90</p>
                <p className="text-xs text-zinc-500">Intermediate</p>
              </div>
              <div>
                <p className="text-deck-amber font-display text-2xl">90–120</p>
                <p className="text-xs text-zinc-500">Beginner</p>
              </div>
            </div>
          </div>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {RACE_STATIONS.map((s, i) => (
            <li
              key={s.id}
              className="group flex flex-col rounded-2xl border border-white/5 bg-gradient-to-b from-deck-elevated/80 to-deck-black p-5 transition hover:border-deck-hype/25 hover:shadow-[0_0_32px_-12px_rgba(255,230,0,0.2)]"
            >
              <span className="font-mono text-[10px] font-bold text-zinc-600">
                STATION {(i + 1).toString().padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-2xl tracking-wide text-white">
                {s.title}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wide text-deck-cyan">
                {s.subtitle}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-500">
                {s.detail}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-sm text-zinc-500">
          Want the full interactive breakdown?{" "}
          <Link to="/challenge" className="font-semibold text-deck-hype hover:underline">
            Open today&apos;s workout
          </Link>{" "}
          after you join a tier.
        </p>
      </div>
    </section>
  );
}
