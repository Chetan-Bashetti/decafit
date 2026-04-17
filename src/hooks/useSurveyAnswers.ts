import { useCallback, useState } from "react";

const STORAGE_KEY = "deckfit.survey.v2";

export type SurveyAnswers = Record<string, string>;

function loadAnswers(): SurveyAnswers {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as SurveyAnswers;
  } catch {
    return {};
  }
}

function saveAnswers(a: SurveyAnswers) {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(a));
}

export function useSurveyAnswers() {
  const [answers, setAnswers] = useState<SurveyAnswers>(loadAnswers);

  const setField = useCallback((id: string, value: string) => {
    setAnswers((prev) => {
      const next = { ...prev, [id]: value };
      saveAnswers(next);
      return next;
    });
  }, []);

  return { answers, setField };
}
