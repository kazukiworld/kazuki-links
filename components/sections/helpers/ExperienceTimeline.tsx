"use client";

import type { TimelineEntry } from "@/lib/i18n/types";
import { useTranslations } from "next-intl";

export type TimelineItem = TimelineEntry;

type ExperienceTimelineProps = {
  items: TimelineEntry[];
  responsibilitiesLabel?: string;
};

export function ExperienceTimeline({
  items,
  responsibilitiesLabel,
}: ExperienceTimelineProps) {
  const t = useTranslations("experience.skills");
  const label = responsibilitiesLabel ?? t("keyResponsibilities");

  return (
    <ol className="relative ml-1.5 space-y-6 border-l border-white/25">
      {items.map((item) => (
        <li key={item.id} className="relative pl-6">
          <span
            aria-hidden
            className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-white ring-4 ring-black"
          />
          <p className="text-xs font-medium tracking-wide text-white/50">
            {item.period}
          </p>
          <div className="mt-1 space-y-1">
            <p className="font-bold text-white">{item.title}</p>
            {item.subtitle ? (
              <p className="text-white/85">{item.subtitle}</p>
            ) : null}
            {item.status ? (
              <p className="text-xs text-white/55 sm:text-sm">{item.status}</p>
            ) : null}
          </div>
          {item.description ? (
            <p className="mt-2 text-white/85">{item.description}</p>
          ) : null}
          {item.responsibilities && item.responsibilities.length > 0 ? (
            <div className="mt-3">
              <p className="mb-2 text-sm font-bold text-white">{label}</p>
              <ul className="list-inside list-disc space-y-1 text-white/85">
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
