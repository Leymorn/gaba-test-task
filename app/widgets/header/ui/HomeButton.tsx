"use client";

import Link from "next/link";
import { House } from "lucide-react";
import { useI18n } from "@/shared/i18n/I18nProvider";

export function HomeButton() {
  const { dictionary } = useI18n();

  return (
    <Link
      href="/"
      aria-label={dictionary.header.backHomeAriaLabel}
      className="surface-interactive inline-flex h-[50px] w-[50px] items-center justify-center rounded-full px-0 text-sm font-medium"
    >
      <House className="h-5 w-5" />
    </Link>
  );
}
