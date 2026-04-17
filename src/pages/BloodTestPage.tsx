import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FileUp, Microscope, Sparkles } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useJourney } from "@/context/JourneyContext";

export function BloodTestPage() {
  const navigate = useNavigate();
  const {
    tier,
    onboardingComplete,
    markBloodTestComplete,
  } = useJourney();

  useEffect(() => {
    if (!onboardingComplete) return;
    if (!tier) {
      navigate("/", { replace: true });
      return;
    }
    if (tier !== "gold" && tier !== "diamond") {
      navigate("/dashboard", { replace: true });
    }
  }, [tier, navigate, onboardingComplete]);

  if (!onboardingComplete) {
    return (
      <AppShell funnel funnelSubtitle="Blood work" maxWidthClass="max-w-3xl">
        <Card className="border-deck-amber/30">
          <p className="text-deck-muted">Finish onboarding first.</p>
          <Button className="mt-4" onClick={() => navigate("/onboarding/1")}>
            Go to onboarding
          </Button>
        </Card>
      </AppShell>
    );
  }

  if (!tier || (tier !== "gold" && tier !== "diamond")) {
    return null;
  }

  function done() {
    markBloodTestComplete();
    navigate("/dashboard");
  }

  return (
    <AppShell funnel funnelSubtitle="Labs & markers" maxWidthClass="max-w-4xl">
      <div className="space-y-8">
        <div className="relative overflow-hidden rounded-3xl border border-deck-magenta/30 bg-gradient-to-br from-deck-violet/20 via-deck-black to-deck-rose/10 p-8 shadow-glow-violet">
          <div className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-deck-magenta/30 blur-3xl" />
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-deck-magenta">
                <Microscope className="h-4 w-4" />
                Gold & Diamond roadmap
              </p>
              <h1 className="mt-2 font-display text-5xl text-white">
                Blood test <span className="text-gradient-ice">integration</span>
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-300">
                Upload a recent panel (CBC, lipids, fasting glucose, HbA1c, thyroid if
                available). Your coach uses markers to tune training density and fueling —
                not generic advice.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 self-start rounded-full border border-deck-lime/40 bg-deck-lime/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-deck-lime">
              <Sparkles className="h-4 w-4" />
              Included in your tier
            </span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="border-deck-cyan/25 lg:col-span-2" glow>
            <h2 className="flex items-center gap-2 font-display text-2xl text-white">
              <FileUp className="h-7 w-7 text-deck-cyan" />
              Upload reports
            </h2>
            <p className="mt-2 text-sm text-deck-muted">
              PDFs preferred. Multiple files OK — drag labs from email exports directly.
            </p>
            <input
              type="file"
              accept="application/pdf,image/*"
              multiple
              className="mt-6 w-full rounded-xl border border-deck-border bg-deck-black px-3 py-4 text-sm file:mr-4 file:rounded-lg file:bg-deck-cyan file:px-4 file:py-2 file:font-medium file:text-black"
            />
            <p className="mt-4 text-xs leading-relaxed text-deck-muted">
              Production: use signed URLs (S3 / GCS), virus scan, and notify coach on
              upload — never trust raw client storage for PHI.
            </p>
          </Card>
          <Card>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-deck-muted">
              What happens next
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              <li className="flex gap-2">
                <span className="text-deck-orange">①</span> Secure intake to coach inbox
              </li>
              <li className="flex gap-2">
                <span className="text-deck-orange">②</span> Highlights mapped to training zones
              </li>
              <li className="flex gap-2">
                <span className="text-deck-orange">③</span> Adjustments reflected in dashboard fueling
              </li>
            </ul>
          </Card>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button className="px-10 py-4 text-base" onClick={done}>
            Submit & open dashboard
          </Button>
          <Button variant="secondary" className="px-10 py-4 text-base" onClick={done}>
            I&apos;ll upload later
          </Button>
        </div>
      </div>
    </AppShell>
  );
}
