"use client";

import type { TimelineEntry } from "@/lib/i18n/types";
import { useTranslations } from "next-intl";

export type TimelineItem = TimelineEntry;

type ExperienceTimelineProps = {
  items: TimelineEntry[];
  responsibilitiesLabel?: string;
  /** Use "body" for credential descriptions (subtitle-only entries). */
  subtitleVariant?: "role" | "body";
};

export function ExperienceTimeline({
  items,
  responsibilitiesLabel,
  subtitleVariant = "role",
}: ExperienceTimelineProps) {
  const t = useTranslations("experience.skills");
  const label = responsibilitiesLabel ?? t("keyResponsibilities");

  return (
    <ol className="relative ml-1.5 space-y-8 border-l border-white/20">
      {items.map((item) => (
        <li key={item.id} className="relative pl-6">
          <span
            aria-hidden
            className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-white ring-4 ring-black"
          />
          <p className="text-xs font-medium tracking-wide text-white/45">
            {item.period}
          </p>
          <div className="mt-2 space-y-1">
            <p className="text-base font-bold leading-snug text-white">
              {item.title}
            </p>
            {item.subtitle ? (
              <p
                className={
                  subtitleVariant === "body"
                    ? "text-sm leading-relaxed text-white/80"
                    : "text-sm font-medium leading-relaxed text-white/90"
                }
              >
                {item.subtitle}
              </p>
            ) : null}
            {item.status ? (
              <p className="text-xs text-white/50">{item.status}</p>
            ) : null}
          </div>
          {item.description ? (
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              {item.description}
            </p>
          ) : null}
          {item.responsibilities && item.responsibilities.length > 0 ? (
            <div className="mt-4 border-t border-white/10 pt-3">
              <p className="mb-2 text-sm font-bold uppercase tracking-wide text-white/80">
                {label}
              </p>
              <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-white/80">
                {item.responsibilities.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
