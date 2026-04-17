import { useEffect, useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SurveyFieldControl } from "@/components/onboarding/SurveyFieldControl";
import { useJourney } from "@/context/JourneyContext";
import { useSurveyAnswers } from "@/hooks/useSurveyAnswers";
import { SURVEY_SECTIONS } from "@/data/surveySections";

function clamp(n: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, n));
}

export function OnboardingPage() {
  const { step: stepParam } = useParams<{ step: string }>();
  const navigate = useNavigate();
  const { tier, paymentSubmitted, markOnboardingComplete } = useJourney();
  const { answers, setField } = useSurveyAnswers();

  const totalSteps = SURVEY_SECTIONS.length;

  const stepNumber = useMemo(() => {
    const parsed = parseInt(stepParam ?? "1", 10);
    if (Number.isNaN(parsed)) return 1;
    return clamp(parsed, 1, totalSteps);
  }, [stepParam, totalSteps]);

  const stepIndex = stepNumber - 1;
  const section = SURVEY_SECTIONS[stepIndex];
  const isFirst = stepIndex === 0;
  const isLast = stepIndex === totalSteps - 1;
  const progress = Math.round(((stepIndex + 1) / totalSteps) * 100);

  useEffect(() => {
    if (stepParam !== undefined && String(stepNumber) !== stepParam) {
      navigate(`/onboarding/${stepNumber}`, { replace: true });
    }
  }, [stepParam, stepNumber, navigate]);

  if (!paymentSubmitted) {
    return (
      <AppShell funnel funnelSubtitle="Onboarding" maxWidthClass="max-w-3xl">
        <Card className="border-deck-rose/30">
          <p className="text-deck-muted">
            Complete payment on the previous step to unlock your 30-question profile.
          </p>
          <Button className="mt-4" onClick={() => navigate("/tiers")}>
            View plans
          </Button>
        </Card>
      </AppShell>
    );
  }

  function goNext() {
    if (isLast) return;
    navigate(`/onboarding/${stepNumber + 1}`);
  }

  function goBack() {
    if (isFirst) {
      navigate(-1);
      return;
    }
    navigate(`/onboarding/${stepNumber - 1}`);
  }

  function finish() {
    markOnboardingComplete();
    if (tier === "gold" || tier === "diamond") {
      navigate("/blood-test");
    } else {
      navigate("/dashboard");
    }
  }

  if (!section) {
    return <Navigate to="/onboarding/1" replace />;
  }

  return (
    <AppShell funnel funnelSubtitle="Onboarding" maxWidthClass="max-w-3xl">
      <div className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-deck-cyan">
            Onboarding · Section {stepNumber} of {totalSteps}
          </p>
          <h1 className="mt-2 font-display text-4xl tracking-wide text-white sm:text-5xl">
            {section.title}
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-deck-muted">
            {section.description}
          </p>
          <div className="mt-5 h-2 overflow-hidden rounded-full bg-deck-elevated ring-1 ring-white/5">
            <div
              className="h-full bg-gradient-to-r from-deck-orange via-deck-amber to-deck-cyan transition-[width] duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {SURVEY_SECTIONS.map((s, i) => (
              <button
                key={s.id}
                type="button"
                title={s.title}
                onClick={() => navigate(`/onboarding/${i + 1}`)}
                className={`h-9 w-9 rounded-full text-xs font-bold transition ${
                  i === stepIndex
                    ? "bg-gradient-cta text-black shadow-glow ring-2 ring-white/20"
                    : "bg-deck-elevated/80 text-deck-muted hover:text-white"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        <Card glow className="border-white/10">
          <div className="space-y-5">
            {section.fields.map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="text-sm font-medium text-zinc-200"
                >
                  {field.label}
                </label>
                {field.helper && (
                  <p className="mt-0.5 text-xs text-deck-muted">{field.helper}</p>
                )}
                <SurveyFieldControl
                  field={field}
                  value={answers[field.id] ?? ""}
                  onChange={(v) => setField(field.id, v)}
                />
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-between gap-3 border-t border-white/5 pt-6">
            <Button variant="secondary" onClick={goBack}>
              {isFirst ? "Back" : "Previous section"}
            </Button>
            {isLast ? (
              <Button className="px-8" onClick={finish}>
                Finish & continue
              </Button>
            ) : (
              <Button className="px-8" onClick={goNext}>
                Next section
              </Button>
            )}
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
