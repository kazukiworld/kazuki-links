"use client";

import Accordion from "@/components/sections/helpers/Accordion";
import {
  PageBody,
  PageIntro,
  Paragraph,
} from "@/components/sections/helpers/PortfolioContent";
import { CaseStudyBody } from "@/components/sections/helpers/case-study";
import type { WorkEntry } from "@/lib/i18n/types";
import { useTranslations } from "next-intl";

export default function Works() {
  const t = useTranslations("works");
  const works = t.raw("items") as WorkEntry[];

  return (
    <div className="pb-2">
      <PageIntro>
        <Paragraph>{t("intro")}</Paragraph>
      </PageIntro>

      <PageBody>
        <Accordion
          items={works.map((work) => ({
            id: work.id,
            title: work.title,
            content: (
              <div className="space-y-2 pb-1">
                <p className="text-sm text-white/70">{work.subtitle}</p>
                <CaseStudyBody study={work.study} />
              </div>
            ),
          }))}
        />
      </PageBody>
    </div>
  );
}
