import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Flame } from "lucide-react";

interface MarketingLayoutProps {
  children: ReactNode;
}

export function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="min-h-screen bg-deck-black bg-gradient-hero bg-gradient-mesh">
      <div className="border-b border-deck-hype/20 bg-gradient-to-r from-deck-hype/15 via-deck-black to-deck-orange/10 px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-deck-hype sm:text-xs">
        Hybrid fitness · Indoor race prep · Coach Prashant & Team Inspiration
      </div>
      <header className="sticky top-0 z-50 border-b border-white/5 bg-deck-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <Link to="/" className="group flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-cta shadow-glow ring-1 ring-white/20">
              <Flame className="h-5 w-5 text-black" strokeWidth={2.4} />
            </span>
            <span className="font-display text-2xl tracking-[0.02em] text-white">
              DECAF<span className="text-gradient-fire">it</span>
            </span>
          </Link>
          <nav className="flex flex-wrap items-center justify-end gap-2 text-xs font-semibold text-deck-muted sm:gap-6 sm:text-sm">
            <Link
              to="/challenge"
              className="rounded-full px-3 py-1.5 transition hover:bg-white/5 hover:text-deck-cyan"
            >
              Challenge
            </Link>
            <Link
              to="/#coach"
              className="rounded-full px-3 py-1.5 transition hover:bg-white/5 hover:text-zinc-200"
            >
              Coach
            </Link>
            <Link
              to="/tiers"
              className="rounded-full px-3 py-1.5 transition hover:bg-white/5 hover:text-deck-amber"
            >
              Plans
            </Link>
            <Link
              to="/tiers"
              className="rounded-full bg-gradient-cta px-4 py-2 text-black shadow-glow transition hover:brightness-110"
            >
              Join now
            </Link>
          </nav>
        </div>
      </header>
      {children}
      <footer className="border-t border-white/5 bg-deck-surface/50 py-12">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="font-display text-lg text-gradient-fire">Decafit</p>
          <p className="mt-2 text-xs text-deck-muted">
            Pune-based · Global impact · Team Inspiration · Certified hybrid-fitness coaching
          </p>
          <p className="mt-4 text-xs text-deck-muted/80">
            Instagram @hippi_ironman · WhatsApp 9834159562
          </p>
        </div>
      </footer>
    </div>
  );
}
