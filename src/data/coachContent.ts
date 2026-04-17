/** Coach narrative — elaborated from podcast/guest notes + public Program branding. */

export const COACH_VIDEO = {
  /** Podcast / interview on YouTube */
  youtubeId: "Vmb04ZHogwk",
  title: "Conversation on triathlon, Deca racing & racing without a crew",
} as const;

export const COACH_PROFILE = {
  name: "Prashant Hipparagi",
  roles: [
    "Team Inspiration founder & coach",
    "Certified hybrid-fitness coach",
    "Ultra triathlete & endurance athlete",
  ],
  /** Dual lens: engineering + performance */
  profession:
    "Mechanical design engineer by training — he brings a systems mindset to training blocks, equipment choices, and how load is progressed over weeks, not just single sessions.",
  facebookUrl: "https://www.facebook.com/innovativepp/",
  instagramHandle: "@hippi_ironman",
  phoneWhatsapp: "9834159562",
} as const;

export const COACH_STORY_PARAGRAPHS = [
  `For many athletes, finishing a single Ironman is a life-defining milestone. The arithmetic alone is daunting: roughly 3.8 km of swimming, 180 km of cycling, and a full marathon of 42.2 km — all in one continuous day. Now imagine not chasing that distance once, but stacking it again and again under real-world fatigue, travel, and nutrition constraints.`,
  `Prashant Hipparagi competes at the sharp end of that conversation. He is an ultra triathlete who has taken on multi-day “Deca” style racing — including Brasil UltraTri, an event where athletes aim to complete the equivalent of ten Ironman-distance days back-to-back: on the order of 38 km swimming, 1,800 km of riding, and 422 km of running, completed across eleven demanding days. Completing a block like that without a full support crew shifts the problem from “how hard can I push?” to “how simple and repeatable can I keep fueling, recovery, and mindset when nothing is glamorous anymore?”`,
  `What stands out in interviews — including the conversation captured on video below — is the same clarity Prashant brings to Team Inspiration athletes today: homemade nutrition when that was what the environment allowed, disciplined hydration strategy carried from home, and a refusal to over-complicate the job when the course is already complex enough. That practicality maps cleanly to busy professionals who need training that survives work travel, family load, and imperfect gyms.`,
] as const;

export const COACH_HIGHLIGHTS = [
  {
    title: "Deca / ultra-distance mindset",
    body: "Race-week planning for events where pacing, nutrition, and emotional regulation matter more than any single interval session.",
  },
  {
    title: "No-nonsense execution",
    body: "Less gimmicks, more repeatable habits — the same ethos you'll see in Deckfit programming and feedback loops.",
  },
  {
    title: "Engineer + coach",
    body: "Structures training like a system: inputs (sleep, stress), throughput (sessions), and outputs (times, HR, subjective readiness) — adjusted weekly.",
  },
] as const;

/**
 * Curated “activity” highlights. Facebook does not allow reliable
 * server-side scraping of Page posts; replace these with your latest
 * captions or wire the Meta Graph API / embedded Page plugin.
 */
export const COACH_SOCIAL_HIGHLIGHTS: {
  id: string;
  label: string;
  teaser: string;
}[] = [
  {
    id: "1",
    label: "Training & racing",
    teaser:
      "Race recaps, floor updates, and what actually moved the needle in build weeks.",
  },
  {
    id: "2",
    label: "Community & camps",
    teaser:
      "Announcements from Team Inspiration — sessions, venues, and athlete stories.",
  },
  {
    id: "3",
    label: "Mindset & nutrition",
    teaser:
      "Short, practical takes on fueling when travel or kitchens aren’t perfect.",
  },
];
