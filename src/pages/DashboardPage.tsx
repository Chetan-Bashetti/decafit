import { Link } from "react-router-dom";
import {
  CalendarDays,
  Flame,
  MessageCircle,
  Trophy,
} from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CHALLENGE_OF_DAY } from "@/data/challengeOfDay";
import { useJourney } from "@/context/JourneyContext";
import { MEMBERSHIP_TIERS } from "@/data/tiers";

export function DashboardPage() {
  const {
    tier,
    paymentSubmitted,
    onboardingComplete,
    resetJourney,
  } = useJourney();

  if (!paymentSubmitted || !onboardingComplete) {
    return (
      <AppShell funnel funnelSubtitle="Dashboard" maxWidthClass="max-w-3xl">
        <Card className="border-deck-rose/30 bg-gradient-to-br from-deck-rose/5 to-transparent">
          <p className="text-zinc-200">
            Your personalized dashboard unlocks after{" "}
            <strong className="text-white">payment</strong> and the{" "}
            <strong className="text-white">30-question onboarding</strong>.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/tiers">
              <Button>Pick a plan</Button>
            </Link>
            <Link to="/onboarding/1">
              <Button variant="secondary">Continue onboarding</Button>
            </Link>
          </div>
        </Card>
      </AppShell>
    );
  }

  const tierMeta = tier ? MEMBERSHIP_TIERS.find((t) => t.id === tier) : null;
  const c = CHALLENGE_OF_DAY;

  return (
    <AppShell funnel funnelSubtitle="Performance hub" maxWidthClass="max-w-5xl">
      <div className="space-y-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-deck-cyan">
              Welcome back · Deckfit dashboard
            </p>
            <h1 className="mt-2 font-display text-5xl text-white sm:text-6xl">
              Let&apos;s execute today.
            </h1>
            {tierMeta && (
              <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-deck-amber/30 bg-deck-amber/10 px-4 py-1.5 text-sm font-medium text-deck-amber">
                <Trophy className="h-4 w-4" />
                Active plan · {tierMeta.name}
              </p>
            )}
          </div>
          <Button variant="secondary" className="text-xs" onClick={resetJourney}>
            Reset demo journey
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card
            className="border-deck-orange/35 lg:col-span-2 bg-gradient-to-br from-deck-orange/10 via-deck-card to-deck-black"
            glow
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-deck-orange">
                  <Flame className="h-4 w-4" />
                  Today&apos;s prescription
                </p>
                <h2 className="mt-3 font-display text-4xl text-white">
                  {c.title} · Day {c.day}
                </h2>
                <p className="mt-2 text-lg text-deck-muted">{c.focus}</p>
              </div>
              <Link to="/challenge">
                <Button variant="accent">Open full workout</Button>
              </Link>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/5 bg-black/30 p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-deck-muted">
                  Calendar
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-200">
                  Sync race phases, deloads, and travel weeks — Google Calendar or ICS feed
                  integration placeholder.
                </p>
                <span className="mt-3 inline-flex items-center gap-2 text-xs text-deck-cyan">
                  <CalendarDays className="h-4 w-4" />
                  Personalized schedule strip
                </span>
              </div>
              <div className="rounded-2xl border border-white/5 bg-black/30 p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-deck-muted">
                  Feedback loop
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-200">
                  Log RPE, soreness maps, hydration, and sleep — coach sees trends, not one-off gut calls.
                </p>
                <span className="mt-3 inline-flex items-center gap-2 text-xs text-deck-magenta">
                  Post-session form · daily streak
                </span>
              </div>
            </div>
          </Card>

          <Card className="border-deck-lime/25 bg-gradient-to-b from-deck-lime/5 to-deck-card">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-deck-muted">
              Quick actions
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  className="flex items-center gap-2 font-medium text-white hover:text-deck-cyan"
                  href="https://wa.me/919834159562"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="h-4 w-4 text-deck-lime" />
                  WhatsApp coach
                </a>
              </li>
              <li className="text-zinc-400">Weekly schedule PDF (coming soon)</li>
              <li className="text-zinc-400">Team Inspiration rankings</li>
              <li className="text-zinc-400">Upload extra blood work (Gold+)</li>
            </ul>
          </Card>
        </div>

        <Card>
          <h3 className="font-display text-2xl text-white">
            Today&apos;s focus mantra
          </h3>
          <p className="mt-2 max-w-3xl text-deck-muted">
            {CHALLENGE_OF_DAY.tagline}
          </p>
        </Card>
      </div>
    </AppShell>
  );
}
