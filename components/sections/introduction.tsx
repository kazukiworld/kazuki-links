"use client";

import {
  BulletList,
  PageBody,
  PageIntro,
  Paragraph,
  Subsection,
} from "@/components/sections/helpers/PortfolioContent";
import { useTranslations } from "next-intl";

export default function Introduction() {
  const t = useTranslations("introduction");

  return (
    <div className="pb-2">
      <PageIntro>
        <Paragraph>{t("intro")}</Paragraph>
      </PageIntro>

      <PageBody>
        <Subsection title={t("background.title")}>
          <div className="space-y-3">
            {t.raw("background.paragraphs").map((paragraph: string) => (
              <Paragraph key={paragraph}>{paragraph}</Paragraph>
            ))}
          </div>
        </Subsection>

        <Subsection title={t("interests.title")}>
          <BulletList items={t.raw("interests.items")} />
        </Subsection>
      </PageBody>
    </div>
  );
}
