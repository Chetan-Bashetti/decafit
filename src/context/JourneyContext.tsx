/* eslint-disable react-refresh/only-export-components -- context + hook pattern */
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { MembershipTierId } from "@/types";

const STORAGE_KEY = "decafit.journey.v1";

interface JourneyState {
  tier: MembershipTierId | null;
  paymentSubmitted: boolean;
  onboardingComplete: boolean;
  bloodTestComplete: boolean;
}

const defaultState: JourneyState = {
  tier: null,
  paymentSubmitted: false,
  onboardingComplete: false,
  bloodTestComplete: false,
};

function loadState(): JourneyState {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultState };
    return { ...defaultState, ...JSON.parse(raw) };
  } catch {
    return { ...defaultState };
  }
}

function saveState(s: JourneyState) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(s));
}

interface JourneyContextValue extends JourneyState {
  setTier: (tier: MembershipTierId) => void;
  markPaymentSubmitted: () => void;
  markOnboardingComplete: () => void;
  markBloodTestComplete: () => void;
  resetJourney: () => void;
}

const JourneyContext = createContext<JourneyContextValue | null>(null);

export function JourneyProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<JourneyState>(loadState);

  const setTier = useCallback((tier: MembershipTierId) => {
    setState((prev) => {
      const next = { ...prev, tier };
      saveState(next);
      return next;
    });
  }, []);

  const markPaymentSubmitted = useCallback(() => {
    setState((prev) => {
      const next = { ...prev, paymentSubmitted: true };
      saveState(next);
      return next;
    });
  }, []);

  const markOnboardingComplete = useCallback(() => {
    setState((prev) => {
      const next = { ...prev, onboardingComplete: true };
      saveState(next);
      return next;
    });
  }, []);

  const markBloodTestComplete = useCallback(() => {
    setState((prev) => {
      const next = { ...prev, bloodTestComplete: true };
      saveState(next);
      return next;
    });
  }, []);

  const resetJourney = useCallback(() => {
    setState(() => {
      saveState(defaultState);
      return { ...defaultState };
    });
  }, []);

  const value = useMemo(
    () => ({
      ...state,
      setTier,
      markPaymentSubmitted,
      markOnboardingComplete,
      markBloodTestComplete,
      resetJourney,
    }),
    [
      state,
      setTier,
      markPaymentSubmitted,
      markOnboardingComplete,
      markBloodTestComplete,
      resetJourney,
    ]
  );

  return (
    <JourneyContext.Provider value={value}>{children}</JourneyContext.Provider>
  );
}

export function useJourney() {
  const ctx = useContext(JourneyContext);
  if (!ctx) throw new Error("useJourney must be used within JourneyProvider");
  return ctx;
}
