import {
  BulletList,
  MutedNote,
  Subsection,
} from "@/components/sections/helpers/PortfolioContent";

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
  return (
    <>
      <Subsection title="Overview">
        <p>{study.overview}</p>
      </Subsection>
      <Subsection title="My Role">
        <p>{study.role}</p>
      </Subsection>
      <Subsection title="What I Worked On">
        <BulletList items={study.workedOn} />
      </Subsection>
      <Subsection title="Technical Scope">
        <BulletList items={study.technicalScope} />
      </Subsection>
      <Subsection title="Challenges">
        <BulletList items={study.challenges} />
      </Subsection>
      <Subsection title="Outcome">
        <p>{study.outcome}</p>
      </Subsection>
      <MutedNote>{study.confidentiality}</MutedNote>
    </>
  );
}
