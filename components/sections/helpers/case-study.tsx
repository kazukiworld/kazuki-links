"use client";

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

function CaseStudySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-2">
      <h4 className="text-base text-white">{title}</h4>
      <div className="border-l border-white/15 pl-4">{children}</div>
    </section>
  );
}

function CaseStudyText({ children }: { children: React.ReactNode }) {
  return <p className="text-sm leading-relaxed text-white/80">{children}</p>;
}

function CaseStudyBulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-white/80">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function CaseStudyBody({ study }: { study: CaseStudyContent }) {
  const t = useTranslations("caseStudy");

  return (
    <div className="space-y-5">
      <CaseStudySection title={t("overview")}>
        <CaseStudyText>{study.overview}</CaseStudyText>
      </CaseStudySection>

      <CaseStudySection title={t("myRole")}>
        <p className="text-sm font-medium leading-relaxed text-white/90">
          {study.role}
        </p>
      </CaseStudySection>

      <CaseStudySection title={t("workedOn")}>
        <CaseStudyBulletList items={study.workedOn} />
      </CaseStudySection>

      <CaseStudySection title={t("technicalScope")}>
        <CaseStudyBulletList items={study.technicalScope} />
      </CaseStudySection>

      <CaseStudySection title={t("challenges")}>
        <CaseStudyBulletList items={study.challenges} />
      </CaseStudySection>

      <CaseStudySection title={t("outcome")}>
        <CaseStudyText>{study.outcome}</CaseStudyText>
      </CaseStudySection>

      <p className="border-t border-white/10 pt-4 text-sm leading-relaxed text-white/60 italic">
        {study.confidentiality}
      </p>
    </div>
  );
}
