import {
  BulletList,
  PageBody,
  PageIntro,
  Paragraph,
  Subsection,
} from "@/components/sections/helpers/PortfolioContent";

export default function Introduction() {
  return (
    <div className="pb-2">
      <PageIntro>
        <Paragraph>
          A brief introduction to my background in engineering, creative
          technology, and bilingual communication.
        </Paragraph>
      </PageIntro>

      <PageBody>
      <Subsection title="Background">
        <div className="space-y-3">
          <Paragraph>
            I&apos;m Kazuki Mori, an AI Product Engineer and Creative
            Full-Stack Developer based in Japan and the U.S.
          </Paragraph>
          <Paragraph>
            My background combines production-focused engineering, creative
            technology, and bilingual communication.
          </Paragraph>
          <Paragraph>
            At Corpy, an international AI startup, I worked as a Project Leader
            / Full-Stack Developer on systems involving full-stack development,
            computer vision workflows, deployment support, debugging, and client
            communication.
          </Paragraph>
          <Paragraph>
            I work at a native level in both English and Japanese, helping
            bridge engineering teams, clients, and business stakeholders across
            languages.
          </Paragraph>
          <Paragraph>
            Before engineering, I worked with 2D/3D animation as a freelance
            creator. That background shapes how I think about motion, visual
            systems, interaction, and user experience.
          </Paragraph>
          <Paragraph>
            I&apos;m currently pursuing a Master of Science in Computer Science
            at Georgia Tech, where I&apos;m strengthening my foundation in
            machine learning, AI, and computer science.
          </Paragraph>
          <Paragraph>
            Today, I&apos;m focused on building practical AI applications,
            production web systems, and interactive digital experiences.
          </Paragraph>
        </div>
      </Subsection>

      <Subsection title="Interests">
        <BulletList
          items={[
            "Building software that is useful in real workflows",
            "Connecting AI models with practical products",
            "Designing interfaces that feel visual and intuitive",
            "Communicating clearly across teams and languages",
            "Combining reliable engineering with creative expression",
          ]}
        />
      </Subsection>
      </PageBody>
    </div>
  );
}
