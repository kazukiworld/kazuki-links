import Accordion from "@/components/sections/helpers/Accordion";
import {
  BulletList,
  PageBody,
  PageIntro,
  Paragraph,
  Subsection,
  TagList,
} from "@/components/sections/helpers/PortfolioContent";
import {
  ResearchProjectBody,
  ThreeDProjectCard,
  type ResearchProjectContent,
} from "@/components/sections/helpers/research-project";

const PLACEHOLDER_3D_PROJECTS = [
  {
    name: "3D Portfolio Experiment",
    description:
      "Placeholder for an interactive portfolio scene combining 3D navigation, motion, and responsive layout.",
  },
  {
    name: "Motion Landing Concept",
    description:
      "Placeholder for a product-style landing page with scroll-driven motion and lightweight 3D accents.",
  },
  {
    name: "Creative Coding Study",
    description:
      "Placeholder for a visual experiment exploring shaders, animation timing, and interactive camera movement.",
  },
];

const RESEARCH_PROJECTS: {
  id: string;
  title: string;
  project: ResearchProjectContent;
}[] = [
  {
    id: "project-02",
    title: "Project 02: AI Fashion / Creative Tool Research",
    project: {
      tagline:
        "Research into AI-assisted fashion design, visual quality control, garment workflows, and creator tools.",
      overview:
        "I am exploring how AI can support fashion and creative production through practical tools for design, inspection, recommendation, and workflow automation. This is part of my broader interest in connecting AI engineering with creative industries and product development.",
      problem:
        "Fashion and creative production involve many visual and repetitive workflows: design ideation, pattern development, product visualization, quality control, merchandising, presentation, and product discovery. Many existing tools are expensive, fragmented, or difficult for independent creators and small teams to use.",
      exploring: [
        "AI-assisted fashion design workflows",
        "Image-to-garment concepts",
        "Structured garment representation",
        "AI-supported product visualization",
        "Visual quality control for garments",
        "Recommendation and similarity search",
        "Human-in-the-loop creative workflows",
      ],
      technicalScope: [
        "LLM workflows",
        "Computer vision concepts",
        "Image similarity",
        "Recommendation system concepts",
        "Full-stack product architecture",
        "3D visualization concepts",
        "Human-in-the-loop AI workflows",
      ],
      status: "Research and product exploration",
    },
  },
  {
    id: "project-03",
    title: "Project 03: Garment QC Computer Vision MVP",
    project: {
      tagline:
        "Exploring practical computer vision workflows for garment quality inspection.",
      overview:
        "I am researching an MVP for AI-assisted garment quality control using controlled image capture, structured inspection steps, and human review. The goal is not to fully replace human QC, but to assist reviewers by flagging visible issues and organizing inspection records.",
      problem:
        "Garment quality control often depends on manual inspection. Some defects are visible through standard photos, while others require close-up inspection, physical measurement, or human judgment. The challenge is designing a realistic MVP that solves a real customer need without overclaiming what AI can detect.",
      exploring: [
        "Controlled image capture workflow",
        "Front and back garment photos",
        "Reversed garment inspection workflow",
        "Smartphone camera setup",
        "Lighting and tripod requirements",
        "Measurement mat or reference object concepts",
        "Visual defect detection limits",
        "Human-in-the-loop review process",
      ],
      possibleMvp: [
        "Detect obvious visual defects",
        "Compare front/back garment appearance",
        "Flag visible asymmetry or unusualness",
        "Assist human reviewers with checklist-based QC",
        "Store inspection records and images",
        "Generate QC reports",
      ],
      limitations: [
        "Fine stitching defects may require close-up images",
        "Measurement verification may require a reference mat",
        "AI should assist human review, not fully replace it",
        "Fabric, lighting, wrinkles, and camera angle can affect results",
      ],
      technicalScope: [
        "Computer vision workflows",
        "VLM-based visual inspection concepts",
        "Image upload",
        "Structured QC checklist",
        "Human review interface",
        "Full-stack MVP architecture",
      ],
      status: "Research / MVP planning",
    },
  },
  {
    id: "project-04",
    title: "Project 04: Fashion Image Similarity / Recommendation System",
    project: {
      tagline:
        "Exploring visual similarity and metadata-based recommendation for fashion products and creative content.",
      overview:
        "I am exploring a recommendation system that combines image similarity with metadata and user behavior signals for fashion products or creative content.",
      problem:
        "Fashion discovery is highly visual. Users often look for items that feel similar in style, shape, color, texture, silhouette, or mood. A useful recommendation system should understand both visual similarity and contextual metadata.",
      whyMatters: [
        "A purely metadata-based recommender may miss visual style.",
        "A purely image-based recommender may miss user intent, category, price, availability, brand, or behavior patterns.",
      ],
      exploring: [
        "Image embedding-based similarity search",
        "Metadata-enhanced recommendation",
        "User behavior signals",
        "Product discovery workflows",
        "Visual search UI",
        "Fashion/product recommendation UX",
      ],
      technicalScope: [
        "Image embeddings",
        "Similarity search",
        "Metadata filtering",
        "Recommendation system concepts",
        "Full-stack product design",
        "Search and discovery UI",
      ],
      status: "Concept / prototype planning",
    },
  },
  {
    id: "project-05",
    title: "Project 05: Design-to-Garment Workflow Exploration",
    project: {
      tagline:
        "Researching how images, structured garment representations, and 3D visualization can connect in a creative tool.",
      overview:
        "I am researching how AI-assisted garment design workflows could connect image or text inputs with structured garment representations, pattern logic, and 3D visualization.",
      problem:
        "Many AI design tools can generate images, but turning those images into editable garment structures, patterns, or production-ready workflows is much harder. The challenge is connecting creative ideation with technical garment representation.",
      exploring: [
        "Image/text-to-garment workflows",
        "Structured garment representation",
        "Pattern and panel logic",
        "3D garment visualization",
        "Editable garment parameters",
        "Designer-facing UX",
        "Human-in-the-loop correction",
      ],
      technicalScope: [
        "LLM/VLM workflow concepts",
        "Garment representation research",
        "3D visualization concepts",
        "Full-stack tool architecture",
        "Interactive editing interface planning",
      ],
      status: "Research / product exploration",
    },
  },
];

function ThreeDWebContent() {
  return (
    <>
      <p className="text-sm text-white/70">
        Interactive web projects using 3D, motion, animation, and creative
        coding.
      </p>
      <Subsection title="Overview">
        <p>
          I build creative web experiments that combine frontend engineering, 3D
          graphics, motion design, and animation-informed interaction. These
          projects are public and can be shared through GitHub, live demos,
          screenshots, or videos.
        </p>
      </Subsection>
      <Subsection title="Focus Areas">
        <BulletList
          items={[
            "Interactive portfolio websites",
            "3D landing pages",
            "Motion-driven interfaces",
            "Product visualization concepts",
            "Creative coding experiments",
            "Animation-informed web experiences",
            "Responsive visual interfaces",
          ]}
        />
      </Subsection>
      <Subsection title="Tools">
        <TagList
          items={[
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Three.js",
            "React Three Fiber",
            "GSAP",
            "Framer Motion",
          ]}
        />
      </Subsection>
      <Subsection title="What This Shows">
        <BulletList
          items={[
            "Creative frontend development",
            "3D interaction design",
            "Motion-based UI thinking",
            "Visual storytelling",
            "Performance-conscious web implementation",
            "Ability to build public, demo-ready projects",
          ]}
        />
      </Subsection>
      <Subsection title="Projects">
        {PLACEHOLDER_3D_PROJECTS.map((p) => (
          <ThreeDProjectCard key={p.name} name={p.name} description={p.description} />
        ))}
      </Subsection>
    </>
  );
}

export default function Projects() {
  return (
    <div className="pb-2">
      <PageIntro>
        <Paragraph>
          Public and in-progress projects exploring AI, creative technology,
          fashion-tech, 3D web, and product ideas.
        </Paragraph>
        <Paragraph>
          This section is separate from my professional work. It shows what I am
          personally building, researching, and developing outside private
          company projects.
        </Paragraph>
      </PageIntro>

      <PageBody>
      <Accordion
        items={[
          {
            id: "project-01",
            title: "Project 01: 3D Web Experiments",
            content: <ThreeDWebContent />,
          },
          ...RESEARCH_PROJECTS.map((item) => ({
            id: item.id,
            title: item.title,
            content: <ResearchProjectBody project={item.project} />,
          })),
        ]}
      />
      </PageBody>
    </div>
  );
}
