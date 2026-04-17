import { Navigate, Route, Routes } from "react-router-dom";
import { JourneyProvider } from "@/context/JourneyContext";
import { LandingPage } from "@/pages/LandingPage";
import { ChallengePage } from "@/pages/ChallengePage";
import { TiersPage } from "@/pages/TiersPage";
import { PaymentPage } from "@/pages/PaymentPage";
import { OnboardingPage } from "@/pages/OnboardingPage";
import { BloodTestPage } from "@/pages/BloodTestPage";
import { DashboardPage } from "@/pages/DashboardPage";

export default function App() {
  return (
    <JourneyProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/challenge" element={<ChallengePage />} />
        <Route path="/tiers" element={<TiersPage />} />
        <Route path="/payment/:tierId" element={<PaymentPage />} />
        <Route path="/onboarding" element={<Navigate to="/onboarding/1" replace />} />
        <Route path="/onboarding/:step" element={<OnboardingPage />} />
        <Route path="/blood-test" element={<BloodTestPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </JourneyProvider>
  );
}
