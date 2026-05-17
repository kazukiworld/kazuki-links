import {
  BulletList,
  MutedNote,
  StatusBadge,
  Subsection,
  TagList,
} from "@/components/sections/helpers/PortfolioContent";

export type ResearchProjectContent = {
  tagline: string;
  overview: string;
  problem?: string;
  exploring?: string[];
  possibleMvp?: string[];
  limitations?: string[];
  whyMatters?: string[];
  technicalScope: string[];
  status: string;
  extraSections?: { title: string; items: string[] }[];
};

export function ResearchProjectBody({
  project,
}: {
  project: ResearchProjectContent;
}) {
  return (
    <>
      <p className="text-sm text-white/70">{project.tagline}</p>
      <Subsection title="Overview">
        <p>{project.overview}</p>
      </Subsection>
      {project.problem && (
        <Subsection title="Problem">
          <p>{project.problem}</p>
        </Subsection>
      )}
      {project.whyMatters && (
        <Subsection title="Why This Matters">
          <BulletList items={project.whyMatters} />
        </Subsection>
      )}
      {project.exploring && (
        <Subsection title={project.possibleMvp ? "What I'm Exploring" : "What I'm Exploring"}>
          <BulletList items={project.exploring} />
        </Subsection>
      )}
      {project.possibleMvp && (
        <Subsection title="Possible MVP Scope">
          <BulletList items={project.possibleMvp} />
        </Subsection>
      )}
      {project.limitations && (
        <Subsection title="Known Limitations">
          <BulletList items={project.limitations} />
        </Subsection>
      )}
      {project.extraSections?.map((section) => (
        <Subsection key={section.title} title={section.title}>
          <BulletList items={section.items} />
        </Subsection>
      ))}
      <Subsection title="Technical Scope">
        <BulletList items={project.technicalScope} />
      </Subsection>
      <Subsection title="Current Status">
        <StatusBadge>{project.status}</StatusBadge>
      </Subsection>
    </>
  );
}

export function ThreeDProjectCard({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="mt-4 space-y-3 rounded border border-white/10 bg-white/5 p-3 first:mt-0">
      <h5 className="font-bold text-white">{name}</h5>
      <p className="text-sm text-white/80">{description}</p>
      <Subsection title="What I Built">
        <BulletList
          items={[
            "Interactive 3D scene",
            "Motion-based UI",
            "Responsive frontend implementation",
            "Visual effects / animation",
            "Performance-conscious web experience",
          ]}
        />
      </Subsection>
      <Subsection title="Tools">
        <TagList
          items={[
            "Next.js",
            "TypeScript",
            "Three.js",
            "React Three Fiber",
            "GSAP",
            "Framer Motion",
            "Tailwind CSS",
          ]}
        />
      </Subsection>
      <p className="text-xs text-white/50 italic">
        Live demo and repository links coming soon.
      </p>
    </div>
  );
}
