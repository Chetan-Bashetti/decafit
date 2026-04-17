import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Building2,
  CheckCircle2,
  QrCode,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MEMBERSHIP_TIERS } from "@/data/tiers";
import { useJourney } from "@/context/JourneyContext";
import type { MembershipTierId } from "@/types";

const UPI_PLACEHOLDER = "UPI ID · Razorpay link · or bank details";

export function PaymentPage() {
  const { tierId } = useParams<{ tierId: string }>();
  const navigate = useNavigate();
  const { setTier, markPaymentSubmitted, tier: storedTier } = useJourney();

  const tier =
    tierId && ["silver", "gold", "diamond"].includes(tierId)
      ? (tierId as MembershipTierId)
      : storedTier;

  useEffect(() => {
    if (
      tierId &&
      ["silver", "gold", "diamond"].includes(tierId) &&
      storedTier !== tierId
    ) {
      setTier(tierId as MembershipTierId);
    }
  }, [tierId, storedTier, setTier]);

  if (!tier) {
    return (
      <AppShell funnel funnelSubtitle="Payment" maxWidthClass="max-w-3xl">
        <Card className="border-deck-amber/30">
          <p className="text-deck-muted">Pick a plan first so we can show the right amount.</p>
          <Button className="mt-4" onClick={() => navigate("/tiers")}>
            Compare tiers
          </Button>
        </Card>
      </AppShell>
    );
  }

  const meta = MEMBERSHIP_TIERS.find((t) => t.id === tier);

  function continueAfterPayment() {
    markPaymentSubmitted();
    navigate("/onboarding/1");
  }

  return (
    <AppShell funnel funnelSubtitle="Secure checkout" maxWidthClass="max-w-5xl">
      <div className="space-y-8">
        <div className="relative overflow-hidden rounded-3xl border border-deck-orange/30 bg-gradient-to-r from-deck-orange/15 via-deck-black to-deck-violet/20 p-8 shadow-glow">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-deck-cyan/10 to-transparent" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-deck-amber">
              Step 3 · Activate membership
            </p>
            <h1 className="mt-2 font-display text-5xl text-white">
              Pay for <span className="text-gradient-fire">{meta?.name}</span>
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-300">
              Complete UPI or card via Razorpay. For launch, you can drop a static QR and
              reconcile via screenshot — later, wire payment webhooks for instant unlock.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-deck-muted">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2">
                <ShieldCheck className="h-4 w-4 text-deck-lime" />
                SSL-secured checkout (when integrated)
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2">
                <Smartphone className="h-4 w-4 text-deck-cyan" />
                Screenshot upload for manual verify
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card glow className="border-deck-cyan/25">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-deck-cyan/15 text-deck-cyan">
                <QrCode className="h-7 w-7" />
              </div>
              <div>
                <h2 className="font-display text-2xl text-white">Scan & pay</h2>
                <p className="text-xs text-deck-muted">UPI QR — replace with live asset</p>
              </div>
            </div>
            <div className="mt-6 flex aspect-[4/5] max-h-72 items-center justify-center rounded-2xl border-2 border-dashed border-deck-cyan/40 bg-gradient-to-br from-deck-cyan/5 to-deck-black text-center shadow-inner-light">
              <div>
                <QrCode className="mx-auto h-16 w-16 text-deck-cyan/50" />
                <p className="mt-3 text-sm text-deck-muted">
                  Place exported QR (high contrast) here
                </p>
              </div>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-deck-muted">{UPI_PLACEHOLDER}</p>
          </Card>

          <div className="space-y-6">
            <Card>
              <h3 className="flex items-center gap-2 font-semibold text-white">
                <Building2 className="h-5 w-5 text-deck-amber" />
                Order summary
              </h3>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between text-deck-muted">
                  <dt>Plan</dt>
                  <dd className="font-medium text-white">{meta?.name}</dd>
                </div>
                <div className="flex justify-between text-deck-muted">
                  <dt>Duration</dt>
                  <dd className="text-white">{meta?.periodMonths} months commitment</dd>
                </div>
                <div className="flex justify-between border-t border-white/5 pt-3 text-base font-semibold">
                  <dt className="text-white">Due now</dt>
                  <dd className="text-gradient-fire">
                    {meta &&
                      new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                        maximumFractionDigits: 0,
                      }).format(meta.priceInr)}
                  </dd>
                </div>
              </dl>
            </Card>

            <Card className="border-deck-violet/25">
              <label className="block text-sm font-medium text-zinc-200">
                Payment proof (screenshot)
              </label>
              <p className="mt-1 text-xs text-deck-muted">
                Helps ops verify if the gateway webhook is not yet connected.
              </p>
              <input
                type="file"
                accept="image/*"
                className="mt-4 w-full cursor-pointer rounded-xl border border-deck-border bg-deck-black px-3 py-3 text-sm file:mr-4 file:rounded-lg file:border-0 file:bg-deck-orange file:px-4 file:py-2 file:text-black"
              />
              <ul className="mt-4 space-y-2 text-xs text-deck-muted">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-deck-lime" />
                  Razorpay: trigger Checkout button above the fold for mobile users.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-deck-lime" />
                  Auto-confirm via webhook → skip manual review.
                </li>
              </ul>
            </Card>

            <Button className="w-full py-4 text-base" onClick={continueAfterPayment}>
              I&apos;ve paid — start onboarding (30 questions)
            </Button>
            <Button
              variant="ghost"
              className="w-full text-sm"
              onClick={() => navigate("/tiers")}
            >
              Change plan
            </Button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
