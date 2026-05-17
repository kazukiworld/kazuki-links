"use client";

import {
  PageBody,
  PageIntro,
  Paragraph,
  Subsection,
} from "@/components/sections/helpers/PortfolioContent";
import { ExperienceTimeline } from "@/components/sections/helpers/ExperienceTimeline";
import { useTranslations } from "next-intl";

export default function Experience() {
  const t = useTranslations("experience");

  return (
    <div className="pb-2">
      <PageIntro>
        <Paragraph>{t("intro")}</Paragraph>
      </PageIntro>

      <PageBody>
        <Subsection title={t("career.title")}>
          <ExperienceTimeline items={t.raw("career.items")} />
        </Subsection>

        <Subsection title={t("education.title")}>
          <ExperienceTimeline items={t.raw("education.items")} />
        </Subsection>

        <Subsection title={t("credentials.title")}>
          <ExperienceTimeline
            items={t.raw("credentials.items")}
            subtitleVariant="body"
          />
        </Subsection>

        <Subsection title={t("skills.title")}>
          <div className="space-y-4 border-l border-white/15 pl-4">
            {t.raw("skills.groups").map(
              (group: { title: string; items: string[] }) => (
                <div key={group.title}>
                  <p className="mb-2 text-base text-white">{group.title}</p>
                  <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-white/80">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ),
            )}
          </div>
        </Subsection>
      </PageBody>
    </div>
  );
}
