import { AppShell } from "@/components/layout/AppShell";
import { TierComparisonGrid } from "@/components/tiers/TierComparisonGrid";

export function TiersPage() {
  return (
    <AppShell funnel funnelSubtitle="Membership" maxWidthClass="max-w-5xl">
      <TierComparisonGrid />
    </AppShell>
  );
}
