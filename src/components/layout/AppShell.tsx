import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { FunnelChrome } from "@/components/journey/FunnelChrome";

interface AppShellProps {
  children: ReactNode;
  showBrand?: boolean;
  /** Show sticky journey strip (Challenge → Dashboard) */
  funnel?: boolean;
  funnelSubtitle?: string;
  /** Wider content on detail pages */
  maxWidthClass?: string;
}

export function AppShell({
  children,
  showBrand = true,
  funnel = false,
  funnelSubtitle,
  maxWidthClass = "max-w-3xl",
}: AppShellProps) {
  return (
    <div className="min-h-screen bg-deck-black bg-gradient-hero bg-gradient-mesh">
      {funnel ? (
        <FunnelChrome subtitle={funnelSubtitle} />
      ) : (
        showBrand && (
          <header className="border-b border-white/5 bg-deck-black/80 backdrop-blur-xl">
            <div
              className={`mx-auto flex ${maxWidthClass} items-center justify-between px-4 py-4`}
            >
              <Link to="/" className="flex items-baseline gap-2">
                <span className="font-display text-2xl tracking-wide text-white">
                  DECAF<span className="text-gradient-fire">it</span>
                </span>
                <span className="hidden text-xs uppercase tracking-widest text-deck-muted sm:inline">
                  Decafit
                </span>
              </Link>
            </div>
          </header>
        )
      )}
      <main className={`mx-auto ${maxWidthClass} px-4 py-8 sm:px-6`}>
        {children}
      </main>
    </div>
  );
}
