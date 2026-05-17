import type { AppMessages } from "@/lib/i18n/types";

const messages: AppMessages = {
  metadata: {
    title: "Kazuki's Profile",
    description: "Links to Kazuki's Projects and Socials",
  },
  hero: {
    tagline: "Full-Stack Software Engineer Specializing in AI/ML",
    description:
      "I build practical AI applications, production-ready web systems, and interactive 3D websites that connect engineering, automation, and visual experience.",
    badges: [
      "Former AI Startup Project Lead",
      "5+ Years of Development Experience",
      "Native-level English & Japanese",
      "M.S. Computer Science Candidate @ Georgia Tech",
    ],
  },
  nav: {
    introduction: "Introduction",
    experience: "Experience",
    works: "Works",
    contact: "Contact",
  },
  loading: "Loading...",
  caseStudy: {
    overview: "Overview",
    myRole: "My Role",
    workedOn: "What I Worked On",
    technicalScope: "Technical Scope",
    challenges: "Challenges",
    outcome: "Outcome",
  },
  introduction: {
    background: {
      paragraphs: [
        "I'm Kazuki Mori, an AI Product Engineer and Creative Full-Stack Developer based in Japan and the U.S.",
        "My background combines production-focused engineering, creative technology, and bilingual communication.",
        "At my previous AI startup, I worked as a Project Leader and Full-Stack Developer, contributing to production systems that involved full-stack development, computer vision workflows, deployment support, debugging, and client-facing technical communication.",
        "I work at a native level in both English and Japanese, helping bridge engineering teams, clients, and business stakeholders across languages.",
        "Before engineering, I worked with 2D/3D animation as a freelance creator. That background shapes how I think about motion, visual systems, interaction, and user experience.",
        "I'm currently pursuing a Master of Science in Computer Science at Georgia Tech, where I'm strengthening my foundation in machine learning, AI, and computer science.",
        "Today, I'm focused on building practical AI applications, production web systems, and interactive digital experiences.",
      ],
    },
  },
  experience: {
    intro:
      "Career, education, and credentials in chronological order — from current roles and studies back through earlier milestones.",
    career: {
      title: "Career",
      items: [
        {
          id: "corpy",
          period: "Aug 2023 — Present",
          title: "Corpy & Co., Inc. (株式会社コーピー)",
          subtitle: "Project Leader / Full-Stack Developer",
          description:
            "International AI startup focused on production systems involving full-stack development, backend services, computer vision workflows, deployment support, debugging, and client-facing technical communication across English and Japanese.",
          responsibilities: [
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
          ],
        },
        {
          id: "freelance",
          period: "Aug 2020 — Jul 2023",
          title: "Freelance — Web Development, 2D/3D Animation & IT Support",
          subtitle: "Solo developer (team of 1)",
          description:
            "Operated as a solo developer across full-stack product work, contract web development and IT support for SMBs, and 2D/3D animation. Handled discovery, design, implementation, and operations end to end, with direct client communication in Japanese and English.",
          responsibilities: [
            "End-to-end ownership from user interviews and requirements through design, implementation, and operations",
            "Requirements definition, screen design, and UI/UX design",
            "Technology selection, architecture, and full-stack implementation",
            "Infrastructure, security, and data management",
            "Contract web development and IT support for small and mid-sized businesses",
            "Business requirements interviews, workflow mapping, and improvement proposals",
            "Landing page and business-application development",
            "AI proof-of-concept prototyping and technical experimentation",
            "Operational documentation and ongoing client support",
            "2D/3D animation and visual production",
            "Direct bilingual client communication (Japanese and English)",
          ],
        },
      ],
    },
    education: {
      title: "Education",
      items: [
        {
          id: "gt-omscs",
          period: "Aug 2025 — Present",
          title: "Georgia Institute of Technology",
          subtitle: "M.S. Computer Science (Online)",
          status: "In progress",
          description:
            "Pursuing AI and machine learning systematically while working full-time. Studying evenings and weekends with a focus on applying coursework to real-world engineering work.",
        },
        {
          id: "wgu-bs",
          period: "Apr 2022",
          title: "Western Governors University",
          subtitle: "B.S. Software Development (Online)",
          status: "Graduated",
          description:
            "Competency-based online program: advance to the next subject after passing assignments and exams. Leveraged prior knowledge and practical experience to complete the bachelor's degree ahead of schedule.",
        },
      ],
    },
    credentials: {
      title: "Credentials",
      items: [
        {
          id: "project-plus",
          period: "Jun 2022",
          title: "CompTIA Project+",
          subtitle:
            "Validates IT and business project management skills, including planning, execution, communication, and lifecycle coordination.",
        },
        {
          id: "itil",
          period: "Jan 2022",
          title: "ITIL Foundation",
          subtitle:
            "Validates foundational knowledge of IT service management best practices for delivering and supporting business-aligned IT services.",
        },
        {
          id: "a-plus",
          period: "Jun 2021",
          title: "CompTIA A+",
          subtitle:
            "Validates foundational IT support skills across hardware, software, networking, security, and troubleshooting.",
        },
      ],
    },
    skills: {
      title: "Technical Skills",
      keyResponsibilities: "Key Responsibilities",
      groups: [
        {
          title: "Languages",
          items: ["TypeScript", "Python", "and more..."],
        },
        {
          title: "Frontend",
          items: ["React", "Next.js", "Tailwind CSS", "and more..."],
        },
        {
          title: "Backend",
          items: ["FastAPI", "and more..."],
        },
        {
          title: "Database",
          items: ["MySQL", "PostgreSQL", "MongoDB", "GraphQL", "and more..."],
        },
        {
          title: "AI / ML",
          items: ["PyTorch", "Streamlit", "and more..."],
        },
        {
          title: "Creative Tech",
          items: ["Three.js", "React Three Fiber", "GSAP", "Framer Motion", "and more..."],
        },
        {
          title: "Tools / Infrastructure",
          items: ["Docker", "Linux", "Windows", "Git", "Vercel", "and more..."],
        },
      ],
    },
  },
  works: {
    intro:
      "Case studies from my work at an AI startup and as a freelancer across AI, manufacturing, and autonomous-driving projects. Confidential client work limits what can be shared; each entry covers my role, scope, and outcomes.",
    items: [
      {
        id: "work-01",
        title: "Work 01: AI Image Analysis System for a Major Railway Company",
        subtitle: "AI-based anomaly detection for rolling-stock inspection images",
        study: {
          overview:
            "Developed an AI system that detects anomalies in railway vehicle components from images captured while trains are in operation. Combined multiple in-house trained models for part detection, anomaly judgment, and result verification, and built a web application to review and manage AI inference outputs. Deployed to on-site Linux servers in a client environment with strict security requirements. (Jan 2026 – present; parallel with other projects.)",
          role: "Engineer",
          workedOn: [
            "Web application development to display and manage AI inference results",
            "Frontend and backend implementation",
            "Display features for AI detection and anomaly judgment results",
            "CSV export for evaluation logs and detection results",
            "Data management with PostgreSQL",
            "Application setup and verification in Docker / Linux environments",
            "Deployment to the client's on-site Linux servers",
            "Post-release log investigation, defect investigation, and fixes",
          ],
          technicalScope: [
            "Python (FastAPI, Streamlit)",
            "PostgreSQL",
            "Docker",
            "Linux (Ubuntu 24.04)",
            "PyTorch",
          ],
          challenges: [
            "Integrating inference outputs from multiple AI models into a workflow operators can verify in production",
            "Meeting security and deployment constraints for on-site Linux environments",
            "Stabilizing the system after release through log-based investigation and fixes",
          ],
          outcome:
            "Delivered a web application that lets operators review and manage inference from multiple models end to end. Contributed to putting the anomaly-detection system into real production use, including on-site Linux deployment and post-release operational stabilization.",
          confidentiality:
            "Source code, client details, and screenshots cannot be shared publicly due to confidentiality.",
        },
      },
      {
        id: "work-02",
        title: "Work 02: Production Management System for a Parts Manufacturing Plant",
        subtitle: "Production management system for 200+ floor users",
        study: {
          overview:
            "Led new development of a production management system for a parts manufacturing plant used by more than 200 managers and workers on tablets and PCs. Key capabilities include recording and managing production part information, dashboards for operational status and analysis, and automated report / CSV import and export. Waterfall development. (Aug 2023 – present; parallel with other projects.)",
          role: "Project Leader",
          workedOn: [
            "Requirements definition, basic and detailed design, implementation, unit through integration testing, and operations / maintenance",
            "Specification and test-document creation, defect investigation and countermeasures",
            "Database design, tuning, version upgrades, and migration (primarily MySQL)",
            "Build and deployment environment setup with Docker and Linux",
            "User interviews and rollout-support documentation",
            "Member management (progress and quality) and project management (progress, quality, budget, risk)",
            "Technical documentation and translation in Japanese and English",
          ],
          technicalScope: [
            "TypeScript (Vue.js)",
            "Python (FastAPI)",
            "CSS",
            "MySQL",
            "Docker",
            "Linux",
          ],
          challenges: [
            "Delivering 20+ features end to end from requirements through testing while leading a five-person team",
            "Making production-status dashboards useful for real floor operations",
            "Migrating Windows-only automated report and CSV processing to Linux to reduce Docker operational issues",
          ],
          outcome:
            "Personally delivered more than 20 features (new APIs, screens, etc.) from requirements through testing; the team added and operated more than 30 features in total. Led the production-status dashboard from requirements through UI design, implementation, and operations. Linux-enabled report and CSV processing substantially reduced Docker-related operational trouble.",
          confidentiality:
            "Specific client details, source code, and internal materials are not publicly shared.",
        },
      },
      {
        id: "work-03",
        title: "Work 03: Autonomous Driving Systems & AI Model Development",
        subtitle:
          "Vehicle control integration, AI model R&D liaison, and bilingual client delivery",
        study: {
          overview:
            "Worked across autonomous-driving initiatives at an AI startup: (1) a vehicle control system integrating AI-based object recognition, self-localization, and path planning (agile; Jan 2025 – present), and (2) client liaison for R&D and improvement of image-similarity, object-recognition, and auto-annotation models (waterfall; Oct 2024 – Oct 2025). Served as engineer, client liaison, or both depending on the project.",
          role: "Engineer / Client liaison",
          workedOn: [
            "Detailed design, implementation, and testing of autonomous-driving software",
            "Technical verification, defect investigation, impact analysis, and countermeasure planning",
            "Build and deployment environment setup",
            "Implementation of the self-localization module (VehicleStateEstimator / IMU integration)",
            "Team progress and quality management (up to 12 members)",
            "GitLab / GitHub delivery workflow setup",
            "Client communication, requirements interviews, and schedule / priority alignment",
            "Facilitation of weekly and regular client meetings",
            "Progress, issue, and task management including task assignment",
            "Client documentation, technical reports, and bilingual (Japanese / English) translation and review",
          ],
          technicalScope: [
            "C++",
            "Python",
            "WSL",
            "Linux",
            "GitLab",
            "GitHub",
            "Image similarity estimation models",
            "Object recognition models",
            "Auto-annotation models",
          ],
          challenges: [
            "Coordinating a large, multi-component autonomous-driving stack while acting as client liaison",
            "Explaining model improvements and evaluation results bilingually to reach client agreement",
            "Standardizing task management and Git-based delivery across engineering and reporting workflows",
            "Owning quality of final deliverables including technical reports and proposals",
          ],
          outcome:
            "As client liaison, handled more than 100 meetings and reports on the vehicle-control project and more than 75 on the AI model R&D project. Implemented the VehicleStateEstimator self-localization module with IMU integration. Standardized GitLab task management and built a script to auto-generate progress reports (reducing meeting-prep time from about 45 minutes to about 10 minutes). Refreshed delivery around Git for better transparency and traceability. Completed final technical reports and proposal materials as the primary owner for creation, translation, and quality review.",
          confidentiality:
            "Model details, client names, and deliverable contents are not shared publicly.",
        },
      },
      {
        id: "work-04",
        title: "Work 04: Image Annotation Tool Development",
        subtitle: "Label Studio–based tooling with custom extensions",
        study: {
          overview:
            "Extended the open-source Label Studio platform with proprietary features for in-house and client use to improve annotation efficiency and review quality. Agile development. (Oct 2024 – Mar 2025.)",
          role: "Engineer / Client liaison",
          workedOn: [
            "Frontend through backend implementation and unit / integration testing",
            "Client interviews, improvement proposals, and specification alignment",
            "Meeting facilitation and technical explanation in Japanese and English",
            "Deliverable and specification documentation and translation",
          ],
          technicalScope: [
            "TypeScript",
            "React",
            "Python",
            "Docker",
            "AWS S3",
            "Label Studio (open source)",
          ],
          challenges: [
            "Implementing request-driven extensions on a full-stack basis within short timelines",
            "Aligning custom features with annotation and review workflows in client meetings",
            "Maintaining clear bilingual documentation alongside delivery",
          ],
          outcome:
            "Owned full-stack delivery of tool extensions and implemented request-based features quickly. Led about 20 reporting meetings and document-sharing cycles as client liaison.",
          confidentiality:
            "Client-specific requirements, code, and internal specifications are not publicly shared.",
        },
      },
      {
        id: "work-05",
        title: "Work 05: Freelance Web Application Development",
        subtitle: "Contract web development, LP production, and small business systems",
        study: {
          overview:
            "As a sole proprietor, handled web application development, landing pages, small business systems, and IT support end to end—from requirements and design through UI/UX, implementation, infrastructure, and operations. Worked directly with Japanese- and English-speaking clients from requirements through post-delivery support. (Aug 2020 – Jul 2023.)",
          role: "Sole proprietor (all roles)",
          workedOn: [
            "Web application development with Next.js, React, and TypeScript",
            "Backend and database design with Node.js, GraphQL, and MongoDB",
            "Image and video data management, authentication, and hosting on AWS and GCP",
            "Small business applications such as a bookkeeping system for a cleaning company",
            "AI image-transformation proof-of-concept prototypes with PyTorch and TensorFlow",
          ],
          technicalScope: [
            "TypeScript",
            "Next.js",
            "Node.js",
            "Tailwind CSS",
            "MongoDB",
            "GraphQL",
            "AWS",
            "GCP",
            "PyTorch",
            "TensorFlow",
          ],
          challenges: [
            "Owning the full delivery cycle as a one-person team across multiple client domains",
            "Designing backends and data models suited to each client's scale and workflow",
            "Shipping and operating infrastructure on AWS and GCP without a larger ops team",
          ],
          outcome:
            "Delivered multiple client-facing web products and small operational systems, including full-stack apps and AI-related PoCs, with direct bilingual client communication from scoping through support.",
          confidentiality:
            "Client names, proprietary application details, and source code are not publicly shared.",
        },
      },
    ],
  },
  contact: {
    intro:
      "Open to AI implementation and development, full-stack development, and creative project opportunities. Reach out using the form below.",
    form: {
      name: "Name",
      email: "Email",
      company: "Company / Organization",
      reason: "Reason for Contact",
      reasonPlaceholder: "Select a reason",
      message: "Message",
      send: "Send",
      sending: "Sending…",
      success: "Message sent. I'll get back to you soon.",
      error: "Something went wrong. Please try again.",
      reasons: [
        "Job opportunity",
        "Freelance / project inquiry",
        "Collaboration",
        "Question about my work",
        "Other",
      ],
    },
  },
};

export default messages;
