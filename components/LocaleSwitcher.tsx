"use client";

import { Link } from "@/lib/i18n/navigation";
import { useLocale } from "next-intl";

const linkBase =
  "inline-flex min-h-8 min-w-[2.25rem] items-center justify-center rounded px-2.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white";

export default function LocaleSwitcher() {
  const locale = useLocale();

  return (
    <li className="flex items-center">
      <div
        role="group"
        aria-label="Language"
        className="flex items-center gap-0.5 rounded-md border border-white/25 bg-zinc-900/90 p-0.5"
      >
        <Link
          href="/"
          locale="en"
          aria-current={locale === "en" ? "true" : undefined}
          className={`${linkBase} ${
            locale === "en"
              ? "bg-white/20 text-white"
              : "text-white/60 hover:bg-white/10 hover:text-white"
          }`}
        >
          EN
        </Link>
        <Link
          href="/"
          locale="ja"
          aria-current={locale === "ja" ? "true" : undefined}
          className={`${linkBase} ${
            locale === "ja"
              ? "bg-white/20 text-white"
              : "text-white/60 hover:bg-white/10 hover:text-white"
          }`}
        >
          JA
        </Link>
      </div>
    </li>
  );
}
