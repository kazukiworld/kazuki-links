"use client";

import {
  PageBody,
  PageIntro,
  Paragraph,
} from "@/components/sections/helpers/PortfolioContent";

const CONTACT_EMAIL = "kazukimori@gmail.com";

const REASON_OPTIONS = [
  "Job opportunity",
  "Freelance / project inquiry",
  "Collaboration",
  "Question about my work",
  "Other",
] as const;

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const reason = String(data.get("reason") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(
      `[Portfolio] ${reason || "Contact"}${company ? ` — ${company}` : ""}`,
    );
    const body = encodeURIComponent(
      [
        name && `Name: ${name}`,
        email && `Email: ${email}`,
        company && `Company / Organization: ${company}`,
        reason && `Reason: ${reason}`,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pb-2">
      <PageIntro>
        <Paragraph>
          Interested in working together?
        </Paragraph>
        <Paragraph>
          I&apos;m open to AI engineering roles, full-stack development
          opportunities, creative technology projects, and selected freelance
          work involving AI applications, automation tools, computer vision
          workflows, or interactive web experiences.
        </Paragraph>
        <Paragraph>
          Please reach out through the form below.
        </Paragraph>
      </PageIntro>

      <PageBody>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block space-y-1">
          <span className="text-xs font-bold text-white">Name</span>
          <input
            name="name"
            type="text"
            required
            className="w-full rounded border border-white/20 bg-black/40 px-3 py-2 text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none"
          />
        </label>
        <label className="block space-y-1">
          <span className="text-xs font-bold text-white">Email</span>
          <input
            name="email"
            type="email"
            required
            className="w-full rounded border border-white/20 bg-black/40 px-3 py-2 text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none"
          />
        </label>
        <label className="block space-y-1">
          <span className="text-xs font-bold text-white">
            Company / Organization
          </span>
          <input
            name="company"
            type="text"
            className="w-full rounded border border-white/20 bg-black/40 px-3 py-2 text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none"
          />
        </label>
        <label className="block space-y-1">
          <span className="text-xs font-bold text-white">Reason for Contact</span>
          <select
            name="reason"
            required
            defaultValue=""
            className="w-full rounded border border-white/20 bg-black/40 px-3 py-2 text-white focus:border-white/50 focus:outline-none"
          >
            <option value="" disabled>
              Select a reason
            </option>
            {REASON_OPTIONS.map((option) => (
              <option key={option} value={option} className="bg-black">
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="block space-y-1">
          <span className="text-xs font-bold text-white">Message</span>
          <textarea
            name="message"
            required
            rows={4}
            className="w-full resize-y rounded border border-white/20 bg-black/40 px-3 py-2 text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none"
          />
        </label>
        <button
          type="submit"
          className="w-full rounded border border-white/30 bg-white/10 py-2 font-bold text-white transition-colors hover:bg-white/20"
        >
          Send
        </button>
      </form>
      </PageBody>
    </div>
  );
}
