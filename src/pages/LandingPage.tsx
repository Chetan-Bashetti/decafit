import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { HeroBanner } from "@/components/landing/HeroBanner";
import { MeetTheAppSection } from "@/components/landing/MeetTheAppSection";
import { ReadinessQuizTeaser } from "@/components/landing/ReadinessQuizTeaser";
import { TrainingPlanStrip } from "@/components/landing/TrainingPlanStrip";
import { StationsEightSection } from "@/components/landing/StationsEightSection";
import { SampleWorkoutsSection } from "@/components/landing/SampleWorkoutsSection";
import { ServicesGrid } from "@/components/landing/ServicesGrid";
import { NutritionTeaserSection } from "@/components/landing/NutritionTeaserSection";
import { CoachSection } from "@/components/landing/CoachSection";
import { JourneyMapSection } from "@/components/landing/JourneyMapSection";

/** Landing: hero → app pillars → readiness → stations → workouts → services → nutrition → coach → journey. */
export function LandingPage() {
  return (
    <MarketingLayout>
      <HeroBanner />
      <MeetTheAppSection />
      <ReadinessQuizTeaser />
      <TrainingPlanStrip />
      <StationsEightSection />
      <SampleWorkoutsSection />
      <ServicesGrid />
      <NutritionTeaserSection />
      <CoachSection />
      <JourneyMapSection />
    </MarketingLayout>
  );
}
