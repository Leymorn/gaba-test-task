"use client";

import { Languages } from "lucide-react";
import { Button } from "@/shared/ui/Button";
import { useI18n } from "@/shared/i18n/I18nProvider";

export function LanguageSwitch() {
  const { dictionary, locale, toggleLocale } = useI18n();

  return (
    <Button
      ariaLabel={dictionary.header.toggleLanguageAriaLabel}
      icon={<Languages className="h-5 w-5" />}
      onClick={toggleLocale}
    >
      {locale === "ru" ? "RUS" : "ENG"}
    </Button>
  );
}
