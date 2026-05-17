import {
  BulletList,
  PageBody,
  PageIntro,
  Paragraph,
  Subsection,
} from "@/components/sections/helpers/PortfolioContent";
import {
  ExperienceTimeline,
  type TimelineItem,
} from "@/components/sections/helpers/ExperienceTimeline";

const SKILL_GROUPS = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive UI",
      "Frontend architecture",
    ],
  },
  {
    title: "Backend",
    items: [
      "Python",
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "SQL",
      "CSV/data workflows",
      "Backend debugging",
    ],
  },
  {
    title: "AI / ML",
    items: [
      "Computer vision workflows",
      "LLM applications",
      "Model integration",
      "Evaluation pipelines",
      "Image similarity concepts",
      "Recommendation system concepts",
      "AI product prototyping",
    ],
  },
  {
    title: "Creative Tech",
    items: [
      "Three.js",
      "React Three Fiber",
      "GSAP",
      "Framer Motion",
      "2D/3D animation",
      "Interactive web design",
      "Motion-based UI",
    ],
  },
  {
    title: "Tools / Infrastructure",
    items: [
      "Docker",
      "Linux",
      "GitLab CI/CD",
      "Vercel",
      "Nginx",
      "Systemd",
      "Production logging/debugging",
    ],
  },
  {
    title: "Communication",
    items: [
      "Native-level English",
      "Native-level Japanese",
      "Client-facing technical communication",
      "Bilingual documentation",
      "International team collaboration",
    ],
  },
];

const CAREER_TIMELINE: TimelineItem[] = [
  {
    id: "corpy",
    period: "Aug 2023 — Present",
    title: "Corpy & Co., Inc. (株式会社コーピー)",
    subtitle: "Project Leader / Full-Stack Developer",
    description: (
      <p>
        International AI startup focused on production systems involving
        full-stack development, backend services, computer vision workflows,
        deployment support, debugging, and client-facing technical
        communication across English and Japanese.
      </p>
    ),
    details: (
      <div>
        <p className="mb-2 text-sm font-bold text-white">Key Responsibilities</p>
        <BulletList
          items={[
            "Full-stack web application development",
            "Backend API development",
            "Computer vision workflow support",
            "Production debugging and log investigation",
            "Database and data workflow support",
            "Deployment support",
            "Requirement clarification",
            "Project/task organization",
            "Client-facing technical communication",
            "Bilingual English/Japanese communication",
          ]}
        />
      </div>
    ),
  },
  {
    id: "freelance",
    period: "Until Jul 2023",
    title: "Freelance 2D/3D Animation & Creative Production",
    subtitle: "Independent creative work",
    description: (
      <p>
        Worked on 2D/3D animation and visual production, building a foundation
        in motion, composition, visual storytelling, and creative direction.
        This background now informs interactive web design, 3D websites,
        motion-based interfaces, and visual software experiences.
      </p>
    ),
  },
];

const EDUCATION_TIMELINE: TimelineItem[] = [
  {
    id: "gt-omscs",
    period: "Aug 2025 — Present",
    title: "Georgia Institute of Technology (Online)",
    subtitle:
      "Online Master of Science in Computer Science (OMSCS)",
    status: "In progress",
    description: (
      <p>
        Pursuing AI and machine learning systematically while working full-time.
        Studying evenings and weekends with a focus on applying coursework to
        real-world engineering work.
      </p>
    ),
  },
  {
    id: "wgu-bs",
    period: "Sep 2021 — Apr 2022",
    title: "Western Governors University (Online)",
    subtitle: "B.S. Software Development",
    status: "Graduated",
    description: (
      <p>
        Competency-based online program: advance to the next subject after
        passing assignments and exams. Leveraged prior knowledge and practical
        experience to complete the bachelor&apos;s degree ahead of schedule.
      </p>
    ),
  },
];

const CREDENTIALS_TIMELINE: TimelineItem[] = [
  {
    id: "project-plus",
    period: "Jun 2022",
    title: "CompTIA Project+",
  },
  {
    id: "itil",
    period: "Jan 2022",
    title: "ITIL Foundation",
  },
  {
    id: "a-plus",
    period: "Jun 2021",
    title: "CompTIA A+",
  },
];

export default function Experience() {
  return (
    <div className="pb-2">
      <PageIntro>
        <Paragraph>
          Career, education, and credentials in chronological order — from
          current roles and studies back through earlier milestones.
        </Paragraph>
      </PageIntro>

      <PageBody>
      <Subsection title="Career">
        <ExperienceTimeline items={CAREER_TIMELINE} />
      </Subsection>

      <Subsection title="Education">
        <ExperienceTimeline items={EDUCATION_TIMELINE} />
      </Subsection>

      <Subsection title="Credentials">
        <ExperienceTimeline items={CREDENTIALS_TIMELINE} />
      </Subsection>

      <Subsection title="Technical Skills">
        <div className="space-y-4">
          {SKILL_GROUPS.map((group) => (
            <div key={group.title}>
              <p className="mb-2 text-sm font-bold text-white">{group.title}</p>
              <BulletList items={group.items} />
            </div>
          ))}
        </div>
      </Subsection>
      </PageBody>
    </div>
  );
}
