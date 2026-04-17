import { Link } from "react-router-dom";
import {
  ClipboardList,
  CreditCard,
  Droplets,
  LayoutDashboard,
  Rocket,
  Trophy,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Landing & plans",
    body: "Explore the challenge preview and compare Silver, Gold, Diamond.",
    to: "/tiers",
    color: "from-deck-orange to-deck-amber",
  },
  {
    step: "02",
    title: "Tier + payment",
    body: "Lock your tier. Pay via QR / gateway and upload proof if needed.",
    to: "/tiers",
    color: "from-deck-cyan to-teal-400",
  },
  {
    step: "03",
    title: "30-question onboarding",
    body: "Vitals, race benchmarks, lifestyle, nutrition, goals — in bites.",
    to: "/onboarding/1",
    color: "from-deck-violet to-deck-magenta",
  },
  {
    step: "04",
    title: "Blood work (Gold+)",
    body: "Upload reports for deeper analysis and fueling strategy.",
    to: "/blood-test",
    color: "from-deck-rose to-orange-400",
  },
  {
    step: "05",
    title: "Dashboard",
    body: "Calendar, daily challenge, feedback loop, coach touchpoints.",
    to: "/dashboard",
    color: "from-amber-300 to-deck-orange",
  },
];

const icons = [Rocket, CreditCard, ClipboardList, Droplets, LayoutDashboard];

export function JourneyMapSection() {
  return (
    <section className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-deck-amber">
              Linear journey
            </p>
            <h2 className="font-display text-4xl tracking-wide text-white sm:text-5xl">
              One path — clear steps from plan to dashboard
            </h2>
            <p className="mt-2 max-w-xl text-sm text-zinc-500">
              Assessment → plan → pay → profile → (labs if needed) → dashboard. Every step is its
              own URL so nothing feels cramped.
            </p>
          </div>
          <Link
            to="/tiers"
            className="inline-flex items-center gap-2 text-sm font-semibold text-deck-cyan hover:text-deck-cyan/90"
          >
            Jump to membership
            <Trophy className="h-4 w-4" />
          </Link>
        </div>

        <ol className="mt-12 space-y-4">
          {steps.map((item, i) => {
            const Icon = icons[i] ?? Rocket;
            return (
              <li key={item.step}>
                <Link
                  to={item.to}
                  className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-deck-card/40 p-5 shadow-inner-light transition hover:border-deck-orange/25 sm:flex-row sm:items-center sm:gap-8"
                >
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-black shadow-lg`}
                  >
                    <Icon className="h-7 w-7" strokeWidth={2.2} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-deck-muted">
                      Step {item.step}
                    </p>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-deck-muted">{item.body}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-deck-muted">
                    Tap to explore
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
