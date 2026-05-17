"use client";

import { PageBody, Paragraph } from "@/components/sections/helpers/PortfolioContent";
import { useTranslations } from "next-intl";

export default function Introduction() {
  const t = useTranslations("introduction");

  return (
    <div className="pb-2">
      <PageBody>
        <div className="space-y-3">
          {t.raw("background.paragraphs").map((paragraph: string) => (
            <Paragraph key={paragraph}>{paragraph}</Paragraph>
          ))}
        </div>
      </PageBody>
    </div>
  );
}
