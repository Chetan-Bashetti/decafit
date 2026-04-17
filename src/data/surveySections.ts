import type { SurveySectionId } from "@/types";

export type SurveyFieldType =
  | "text"
  | "date"
  | "number"
  | "textarea"
  | "select"
  | "radio"
  | "checkbox-group";

export interface SurveyFieldOption {
  value: string;
  label: string;
}

export interface SurveyField {
  id: string;
  label: string;
  type: SurveyFieldType;
  placeholder?: string;
  options?: SurveyFieldOption[];
  /** For number inputs */
  min?: number;
  max?: number;
  step?: number;
  helper?: string;
}

export interface SurveySection {
  id: SurveySectionId;
  title: string;
  description: string;
  fields: SurveyField[];
}

/** 30-question onboarding grouped to reduce survey fatigue. */
export const SURVEY_SECTIONS: SurveySection[] = [
  {
    id: "fundamentals",
    title: "I. Fundamentals & vitals",
    description: "Basics we use to tailor volume and intensity.",
    fields: [
      {
        id: "fullName",
        label: "Full name",
        type: "text",
        placeholder: "As on ID / medical records",
      },
      {
        id: "dateOfBirth",
        label: "Date of birth",
        type: "date",
      },
      {
        id: "weightKg",
        label: "Current body weight (kg)",
        type: "number",
        min: 30,
        max: 250,
        step: 0.1,
      },
      {
        id: "heightCm",
        label: "Height (cm)",
        type: "number",
        min: 120,
        max: 230,
        step: 0.5,
      },
      {
        id: "restingHr",
        label: "Resting heart rate (BPM)",
        type: "number",
        min: 35,
        max: 120,
        helper: "Used for aerobic threshold planning.",
      },
      {
        id: "medicalHistory",
        label: "Any known medical conditions or cardiovascular history?",
        type: "textarea",
        placeholder: "Include medications if relevant",
      },
      {
        id: "injuries",
        label: "Current injuries or recurring pains (knees, lower back, shoulders)?",
        type: "textarea",
      },
    ],
  },
  {
    id: "raceBenchmarks",
    title: "II. Hybrid race & running benchmarks",
    description: "Pacing and equipment baselines.",
    fields: [
      {
        id: "pb5k",
        label: "Current 5km PB (time or “none yet”)",
        type: "text",
      },
      {
        id: "pb10k",
        label: "Current 10km PB",
        type: "text",
      },
      {
        id: "wallBallsUnbroken",
        label: "Max wall balls (6kg/9kg) unbroken",
        type: "text",
      },
      {
        id: "sledPush125",
        label: "Can you perform a 125kg sled push for 20m?",
        type: "radio",
        options: [
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
          { value: "unsure", label: "Not sure" },
        ],
      },
      {
        id: "preferredCardio",
        label: "Preferred cardio machine",
        type: "select",
        options: [
          { value: "row", label: "Row" },
          { value: "ski", label: "Ski" },
          { value: "bike", label: "Bike" },
          { value: "mixed", label: "Mixed / no preference" },
        ],
      },
      {
        id: "indoorRaceHistory",
        label: "Have you competed in an indoor fitness / hybrid race before? (category / rough time)",
        type: "textarea",
        placeholder: "e.g. Open, 1:15 — or “first timer”",
      },
      {
        id: "weeklyRunKm",
        label: "Current weekly running volume (km per week)",
        type: "number",
        min: 0,
        max: 300,
        step: 1,
      },
    ],
  },
  {
    id: "lifestyle",
    title: "III. Lifestyle & recovery",
    description: "Sleep, work stress, and training availability.",
    fields: [
      {
        id: "sleepHours",
        label: "Average hours of sleep per night",
        type: "number",
        min: 0,
        max: 16,
        step: 0.25,
      },
      {
        id: "occupationActivity",
        label: "Occupation & daily activity level",
        type: "select",
        options: [
          { value: "sedentary", label: "Mostly sedentary" },
          { value: "active", label: "Active (on feet part of day)" },
          { value: "physical", label: "Physical labor" },
        ],
      },
      {
        id: "waterLiters",
        label: "Typical daily water intake (liters)",
        type: "number",
        min: 0,
        max: 10,
        step: 0.1,
      },
      {
        id: "smokeAlcohol",
        label: "Do you smoke or consume alcohol regularly?",
        type: "textarea",
        placeholder: "Frequency / amount — or “no”",
      },
      {
        id: "days90Min",
        label: "How many days per week can you commit to 90+ min sessions?",
        type: "number",
        min: 0,
        max: 7,
        step: 1,
      },
      {
        id: "functionalGymAccess",
        label: "Access to a functional-racing gym (sleds, SkiErg, wall balls)?",
        type: "radio",
        options: [
          { value: "yes", label: "Yes" },
          { value: "partial", label: "Partial / travel often" },
          { value: "no", label: "No" },
        ],
      },
    ],
  },
  {
    id: "nutrition",
    title: "IV. Nutrition & biology",
    description: "Diet, allergies, and optional blood work.",
    fields: [
      {
        id: "dietPreference",
        label: "Dietary preference",
        type: "select",
        options: [
          { value: "veg", label: "Vegetarian" },
          { value: "nonveg", label: "Non-vegetarian" },
          { value: "eggitarian", label: "Eggetarian" },
        ],
      },
      {
        id: "foodAllergies",
        label: "Any food allergies or intolerances?",
        type: "textarea",
      },
      {
        id: "supplements",
        label: "Current supplements (whey, creatine, multivitamins, etc.)",
        type: "textarea",
        placeholder: "List or “none”",
      },
      {
        id: "bloodConsent",
        label: "Blood test consent — ready to share/upload a recent report?",
        type: "radio",
        options: [
          { value: "yes", label: "Yes" },
          { value: "later", label: "Later" },
          { value: "no", label: "Prefer not to" },
        ],
      },
      {
        id: "primaryGoal",
        label: "Primary goal",
        type: "select",
        options: [
          { value: "fat_loss", label: "Fat loss" },
          { value: "muscle", label: "Muscle gain" },
          { value: "performance", label: "Performance / pacing" },
        ],
      },
    ],
  },
  {
    id: "mental",
    title: "V. Mental & goal setting",
    description: "Motivation, race targets, and emergency contact.",
    fields: [
      {
        id: "whyThisProgram",
        label: "Why this style of racing / training?",
        type: "select",
        options: [
          { value: "bucket", label: "Bucket list" },
          { value: "competitive", label: "Competitive" },
          { value: "transform", label: "Fitness transformation" },
        ],
      },
      {
        id: "targetRace",
        label: "Target finish time or specific race date",
        type: "textarea",
        placeholder: "e.g. April 11 — sub 1:10",
      },
      {
        id: "biggestStruggle",
        label: "Biggest struggle right now",
        type: "select",
        options: [
          { value: "running", label: "Running" },
          { value: "strength", label: "Strength" },
          { value: "nutrition", label: "Nutrition" },
          { value: "consistency", label: "Consistency" },
        ],
      },
      {
        id: "fitnessLevel",
        label: "Rate your current fitness level (1–10)",
        type: "number",
        min: 1,
        max: 10,
        step: 1,
      },
      {
        id: "darkPlaceTraining",
        label: "How do you handle high-intensity “dark place” training?",
        type: "textarea",
      },
      {
        id: "emergencyContactName",
        label: "Emergency contact — name",
        type: "text",
      },
      {
        id: "emergencyContactPhone",
        label: "Emergency contact — phone",
        type: "text",
        placeholder: "+91 …",
      },
      {
        id: "tshirtSize",
        label: "T-shirt size (Team Inspiration / Deckfit)",
        type: "select",
        options: [
          { value: "xs", label: "XS" },
          { value: "s", label: "S" },
          { value: "m", label: "M" },
          { value: "l", label: "L" },
          { value: "xl", label: "XL" },
          { value: "xxl", label: "XXL" },
        ],
      },
    ],
  },
];
