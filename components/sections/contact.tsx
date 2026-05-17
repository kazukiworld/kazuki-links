"use client";

import { useState } from "react";
import {
  PageBody,
  PageIntro,
  Paragraph,
} from "@/components/sections/helpers/PortfolioContent";
import { useTranslations } from "next-intl";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgvrokb";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<FormStatus>("idle");
  const reasons = t.raw("form.reasons") as string[];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="pb-2">
      <PageIntro>
        <Paragraph>{t("intro")}</Paragraph>
      </PageIntro>

      <PageBody>
        <form
          action={FORMSPREE_ENDPOINT}
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <label className="block space-y-1">
            <span className="text-xs font-bold text-white">
              {t("form.name")}
            </span>
            <input
              name="name"
              type="text"
              required
              disabled={status === "submitting"}
              className="w-full rounded border border-white/20 bg-black/40 px-3 py-2 text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none disabled:opacity-50"
            />
          </label>
          <label className="block space-y-1">
            <span className="text-xs font-bold text-white">
              {t("form.email")}
            </span>
            <input
              name="email"
              type="email"
              required
              disabled={status === "submitting"}
              className="w-full rounded border border-white/20 bg-black/40 px-3 py-2 text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none disabled:opacity-50"
            />
          </label>
          <label className="block space-y-1">
            <span className="text-xs font-bold text-white">
              {t("form.company")}
            </span>
            <input
              name="company"
              type="text"
              disabled={status === "submitting"}
              className="w-full rounded border border-white/20 bg-black/40 px-3 py-2 text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none disabled:opacity-50"
            />
          </label>
          <label className="block space-y-1">
            <span className="text-xs font-bold text-white">
              {t("form.reason")}
            </span>
            <select
              name="reason"
              required
              defaultValue=""
              disabled={status === "submitting"}
              className="w-full rounded border border-white/20 bg-black/40 px-3 py-2 text-white focus:border-white/50 focus:outline-none disabled:opacity-50"
            >
              <option value="" disabled>
                {t("form.reasonPlaceholder")}
              </option>
              {reasons.map((option) => (
                <option key={option} value={option} className="bg-black">
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="block space-y-1">
            <span className="text-xs font-bold text-white">
              {t("form.message")}
            </span>
            <textarea
              name="message"
              required
              rows={4}
              disabled={status === "submitting"}
              className="w-full resize-y rounded border border-white/20 bg-black/40 px-3 py-2 text-white placeholder:text-white/40 focus:border-white/50 focus:outline-none disabled:opacity-50"
            />
          </label>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded border border-white/30 bg-white/10 py-2 font-bold text-white transition-colors hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === "submitting" ? t("form.sending") : t("form.send")}
          </button>
          {status === "success" && (
            <p className="text-center text-sm text-white/80" role="status">
              {t("form.success")}
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-red-300" role="alert">
              {t("form.error")}
            </p>
          )}
        </form>
      </PageBody>
    </div>
  );
}

