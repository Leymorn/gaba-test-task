"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useI18n } from "@/shared/i18n/I18nProvider";
import { Button } from "@/shared/ui/Button";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  totalUsers: number;
};

const clampNumber = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export function Pagination({ currentPage, totalPages, totalUsers }: PaginationProps) {
  const router = useRouter();
  const { dictionary } = useI18n();

  const navigateToPage = (page: number) => {
    const nextPage = clampNumber(page, 1, totalPages);
    const params = new URLSearchParams();

    if (nextPage > 1) {
      params.set("page", String(nextPage));
    }

    const query = params.toString();
    router.push(query ? `/?${query}` : "/");
  };

  return (
    <div className="sticky top-[74px] z-20 border-b border-[var(--border)] bg-[var(--background)]/85 py-4 md:top-[84px]">
      <div className="flex items-center gap-3">
        <div className="surface-static hidden h-[50px] items-center rounded-full px-4 text-sm text-[var(--muted)] lg:inline-flex">
          {dictionary.pagination.users}:{" "}
          <span className="ml-2 font-semibold text-[var(--foreground)]">{totalUsers}</span>
        </div>

        <div className="surface-static hidden h-[50px] items-center rounded-full px-4 text-sm text-[var(--muted)] md:inline-flex">
          {dictionary.pagination.page}:
          <span className="ml-2 font-semibold text-[var(--foreground)]">
            {currentPage} / {totalPages}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => navigateToPage(currentPage - 1)}
            disabled={currentPage <= 1}
            ariaLabel={dictionary.pagination.previousPageAriaLabel}
            icon={<ChevronLeft className="h-4 w-4" />}
            className="disabled:cursor-not-allowed disabled:opacity-40"
          />
          <Button
            onClick={() => navigateToPage(currentPage + 1)}
            disabled={currentPage >= totalPages}
            ariaLabel={dictionary.pagination.nextPageAriaLabel}
            icon={<ChevronRight className="h-4 w-4" />}
            className="disabled:cursor-not-allowed disabled:opacity-40"
          />
        </div>
      </div>
    </div>
  );
}
