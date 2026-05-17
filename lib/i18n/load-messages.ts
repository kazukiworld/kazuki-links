import type { AppMessages } from "@/lib/i18n/types";
import type { Locale } from "./routing";

const messageLoaders = {
  en: () => import("@/content/en"),
  ja: () => import("@/content/ja"),
} satisfies Record<Locale, () => Promise<{ default: AppMessages }>>;

export async function loadMessages(locale: Locale): Promise<AppMessages> {
  return (await messageLoaders[locale]()).default;
}
