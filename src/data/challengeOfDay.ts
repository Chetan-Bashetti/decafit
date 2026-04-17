/** Sample “Challenge of the Day” — swap with CMS/API later. */

export interface WorkoutBlock {
  label: string;
  detail?: string;
}

export const CHALLENGE_OF_DAY = {
  programName: "Deckfit Circuit",
  title: "Deckfit Circuit",
  day: 2,
  focus: "Sled Power & Interval Engine",
  tagline: "Intervals that build repeatability under load — the core of race-day legs.",
  estimatedMinutes: 45,
  intensity: "High",
  calories: "550–850 kcal",
  openProNote:
    "OPEN vs PRO loads auto-map after onboarding; you’ll see your lane in the app.",
  warmup: {
    title: "Warm-up",
    durationMin: 10,
    items: [
      "500m Ski or Row — easy → steady",
      "10 walking lunges each leg",
      "10 air squats",
      "8 push-ups",
      "5 burpees — smooth reps",
    ],
  },
  main: {
    title: "Main set",
    rounds: 5,
    subtitle: "Sled & run — hit consistent splits; walk only if prescribed.",
    open: [
      { label: "400m run", detail: "Steady — don’t sprint rep 1" },
      { label: "Sled push 20m", detail: "125–150 kg" },
      { label: "300m run", detail: "Same rhythm as first 400" },
      { label: "Sled pull 20m", detail: "75–100 kg" },
      { label: "Burpee broad jumps", detail: "×15 — full extension" },
    ],
    pro: [
      { label: "400m run", detail: "Strong tempo" },
      { label: "Sled push 20m", detail: "150–200 kg" },
      { label: "300m run" },
      { label: "Sled pull 20m", detail: "100–125 kg" },
      { label: "Burpee broad jumps", detail: "×15 — same standard" },
    ],
  },
  cooldown: {
    title: "Cool down",
    durationMin: 10,
    items: [
      "Easy walk 5–8 min",
      "Quad + hip flexor stretch",
      "Hamstring stretch",
      "Breathing reset: 4-6 breaths nasal",
    ],
  },
  hydration: {
    pre: "300–500 ml in the 10–15 min before go-time",
    during: "Small sips each round — don’t slam fluids",
    post: "500–700 ml + electrolytes within 45 min",
  },
  coachNote:
    "Quality over chaos: if push loads drift up but your run splits collapse, take one gear down and finish unbroken.",
} as const;
