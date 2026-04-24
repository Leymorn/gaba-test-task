"use client";

import { useI18n } from "@/shared/i18n/I18nProvider";
import { getUserDetailGroups } from "../lib/getUserDetailGroups";
import { User } from "../model/types";

type UserDetailsBlockProps = {
  user: User;
};

export function UserDetailsBlock({ user }: UserDetailsBlockProps) {
  const { locale } = useI18n();
  const detailGroups = getUserDetailGroups(user, locale);

  return (
    <>
      {detailGroups.map((group) => (
        <section key={group.title} className="surface-border rounded-[2rem] p-6">
          <h2 className="mb-5 text-2xl font-semibold tracking-tight">{group.title}</h2>
          <dl className="space-y-3">
            {group.items.map(
              ([label, value]) =>
                value !== undefined &&
                value !== null && (
                  <div
                    key={label}
                    className="flex flex-col gap-1 rounded-2xl bg-[var(--surface-elevated)] px-4 py-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
                  >
                    <dt className="text-sm text-[var(--muted)]">{label}</dt>
                    <dd className="text-sm font-medium break-all text-[var(--foreground)]">
                      {value}
                    </dd>
                  </div>
                ),
            )}
          </dl>
        </section>
      ))}
    </>
  );
}
