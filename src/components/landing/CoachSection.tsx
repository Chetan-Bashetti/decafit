import {
  COACH_HIGHLIGHTS,
  COACH_PROFILE,
  COACH_SOCIAL_HIGHLIGHTS,
  COACH_STORY_PARAGRAPHS,
  COACH_VIDEO,
} from "@/data/coachContent";
import { ExternalLink, Mic2, Share2, Wrench } from "lucide-react";

export function CoachSection() {
  const embedSrc = `https://www.youtube.com/embed/${COACH_VIDEO.youtubeId}`;

  return (
    <section
      id="coach"
      className="border-t border-white/5 bg-gradient-to-b from-deck-black via-zinc-950/50 to-deck-black px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-deck-hype">
              Your coach
            </p>
            <h2 className="mt-2 max-w-3xl font-display text-4xl tracking-wide text-white sm:text-6xl">
              Prashant Hipparagi —{" "}
              <span className="text-gradient-fire">engineer & ultra racer</span>
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {COACH_PROFILE.roles.map((r) => (
                <li
                  key={r}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold text-zinc-300"
                >
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <a
            href={COACH_PROFILE.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#1877F2]/50 bg-[#1877F2]/10 px-5 py-2.5 text-sm font-bold text-[#1877F2] transition hover:bg-[#1877F2]/20"
          >
            <Share2 className="h-4 w-4" />
            Follow on Facebook
            <ExternalLink className="h-3.5 w-3.5 opacity-70" />
          </a>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-6 text-sm leading-relaxed text-zinc-400 sm:text-base">
            {COACH_STORY_PARAGRAPHS.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="rounded-2xl border border-deck-orange/25 bg-deck-orange/5 p-5">
              <div className="flex items-center gap-2 text-deck-amber">
                <Wrench className="h-5 w-5 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Profession
                </span>
              </div>
              <p className="mt-3 text-zinc-300">{COACH_PROFILE.profession}</p>
            </div>
          </div>

          <div className="space-y-6">
            {COACH_HIGHLIGHTS.map((h) => (
              <div
                key={h.title}
                className="rounded-2xl border border-white/5 bg-deck-card/40 p-5 shadow-inner-light"
              >
                <h3 className="font-display text-xl text-white">{h.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{h.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Video / podcast */}
        <div className="mt-16">
          <div className="flex flex-wrap items-center gap-3">
            <Mic2 className="h-6 w-6 text-deck-hype" />
            <h3 className="font-display text-3xl text-white sm:text-4xl">
              Watch the conversation
            </h3>
          </div>
          <p className="mt-2 max-w-3xl text-sm text-zinc-500">
            {COACH_VIDEO.title} — from ultra-distance racing and self-supported
            nutrition to the mindset required when the event refuses to shrink itself
            into a single hard weekend.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black shadow-glow ring-1 ring-white/5">
            <div className="aspect-video w-full">
              <iframe
                title="Coach Prashant Hipparagi — podcast interview"
                src={embedSrc}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-zinc-600">
            Video hosted on YouTube —{" "}
            <a
              className="text-deck-cyan underline-offset-2 hover:underline"
              href={`https://www.youtube.com/watch?v=${COACH_VIDEO.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              open on youtube.com
            </a>
          </p>
        </div>

        {/* Social activity — curated; live posts require visiting Facebook */}
        <div className="mt-20">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
                Activity & updates
              </p>
              <h3 className="font-display text-3xl text-white">From the coach&apos;s channels</h3>
              <p className="mt-2 max-w-2xl text-sm text-zinc-500">
                Facebook Pages don&apos;t expose a reliable public JSON feed for small sites without
                the Meta API. Below are rotating themes you&apos;ll typically see —{" "}
                <strong className="text-zinc-300">
                  visit the Page for real-time posts, reels, and event updates.
                </strong>
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {COACH_SOCIAL_HIGHLIGHTS.map((item) => (
              <a
                key={item.id}
                href={COACH_PROFILE.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-white/5 bg-gradient-to-b from-deck-elevated/60 to-deck-black p-5 transition hover:border-[#1877F2]/40"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-[#1877F2]">
                  Meta · Page
                </span>
                <span className="mt-2 font-semibold text-white group-hover:text-[#1877F2]">
                  {item.label}
                </span>
                <p className="mt-2 flex-1 text-sm text-zinc-500">{item.teaser}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-zinc-400">
                  View latest posts
                  <ExternalLink className="h-3 w-3" />
                </span>
              </a>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
            <a
              href={COACH_PROFILE.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-6 py-3 font-bold text-white shadow-lg transition hover:brightness-110"
            >
              <Share2 className="h-5 w-5" />
              innovativepp on Facebook
            </a>
            <a
              href={`https://wa.me/91${COACH_PROFILE.phoneWhatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 underline-offset-4 hover:text-deck-lime hover:underline"
            >
              WhatsApp {COACH_PROFILE.phoneWhatsapp}
            </a>
            <a
              href={`https://instagram.com/${COACH_PROFILE.instagramHandle.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 underline-offset-4 hover:text-deck-orange hover:underline"
            >
              Instagram {COACH_PROFILE.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
