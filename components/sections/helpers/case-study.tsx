"use client";

import {
  BulletList,
  MutedNote,
  Subsection,
} from "@/components/sections/helpers/PortfolioContent";
import { useTranslations } from "next-intl";

export type CaseStudyContent = {
  overview: string;
  role: string;
  workedOn: string[];
  technicalScope: string[];
  challenges: string[];
  outcome: string;
  confidentiality: string;
};

export function CaseStudyBody({ study }: { study: CaseStudyContent }) {
  const t = useTranslations("caseStudy");

  return (
    <>
      <Subsection title={t("overview")}>
        <p>{study.overview}</p>
      </Subsection>
      <Subsection title={t("myRole")}>
        <p>{study.role}</p>
      </Subsection>
      <Subsection title={t("workedOn")}>
        <BulletList items={study.workedOn} />
      </Subsection>
      <Subsection title={t("technicalScope")}>
        <BulletList items={study.technicalScope} />
      </Subsection>
      <Subsection title={t("challenges")}>
        <BulletList items={study.challenges} />
      </Subsection>
      <Subsection title={t("outcome")}>
        <p>{study.outcome}</p>
      </Subsection>
      <MutedNote>{study.confidentiality}</MutedNote>
    </>
  );
}
