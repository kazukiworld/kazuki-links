import type { CaseStudyContent } from "@/components/sections/helpers/case-study";

export type TimelineEntry = {
  id: string;
  period: string;
  title: string;
  subtitle?: string;
  status?: string;
  description?: string;
  responsibilities?: string[];
};

export type WorkEntry = {
  id: string;
  title: string;
  subtitle: string;
  study: CaseStudyContent;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type AppMessages = {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    tagline: string;
    description: string;
    badges: string[];
  };
  nav: {
    introduction: string;
    experience: string;
    works: string;
    contact: string;
  };
  loading: string;
  caseStudy: {
    overview: string;
    myRole: string;
    workedOn: string;
    technicalScope: string;
    challenges: string;
    outcome: string;
  };
  introduction: {
    background: {
      paragraphs: string[];
    };
  };
  experience: {
    intro: string;
    career: { title: string; items: TimelineEntry[] };
    education: { title: string; items: TimelineEntry[] };
    credentials: { title: string; items: TimelineEntry[] };
    skills: { title: string; keyResponsibilities: string; groups: SkillGroup[] };
  };
  works: {
    intro: string;
    items: WorkEntry[];
  };
  contact: {
    intro: string;
    form: {
      name: string;
      email: string;
      company: string;
      reason: string;
      reasonPlaceholder: string;
      message: string;
      send: string;
      sending: string;
      success: string;
      error: string;
      reasons: string[];
    };
  };
};
