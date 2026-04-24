"use client";

import { useI18n } from "@/shared/i18n/I18nProvider";

export function HomeIntro() {
  const { dictionary } = useI18n();

  return (
    <div className="text-sm tracking-[0.2em] text-[var(--muted)] uppercase">
      {dictionary.home.badge}

      <h1 className="pt-2 text-4xl font-semibold tracking-tight text-[var(--foreground)] normal-case sm:text-5xl md:pt-4">
        {dictionary.home.title}
      </h1>
    </div>
  );
}
