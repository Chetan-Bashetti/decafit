import { SERVICES_SHOWCASE } from "@/data/servicesShowcase";

export function ServicesGrid() {
  return (
    <section className="border-y border-white/5 bg-deck-surface/30 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-deck-cyan">
            Beyond the race floor
          </p>
          <h2 className="mt-2 font-display text-4xl tracking-wide text-white sm:text-5xl">
            Eight training lanes —{" "}
            <span className="text-deck-hype">one coach philosophy</span>
          </h2>
          <p className="mt-3 text-zinc-400">
            Many apps stop at random workouts — Deckfit pairs structured blocks with
            India-based coaching, travel-aware planning, and team culture.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES_SHOWCASE.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-deck-card/50 p-5 shadow-inner-light transition hover:border-deck-orange/30 hover:shadow-glow"
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.accent} p-2.5 text-black shadow-lg`}
                >
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mt-4 font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-deck-muted">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
