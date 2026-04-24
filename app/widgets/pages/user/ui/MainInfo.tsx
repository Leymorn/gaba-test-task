"use client";

import Image from "next/image";
import Link from "next/link";
import { User } from "@/entities/user";
import { useI18n } from "@/shared/i18n/I18nProvider";

type MainInfoProps = {
  user: User;
};

export function MainInfo({ user }: MainInfoProps) {
  const { dictionary } = useI18n();

  return (
    <div className="surface-border grid gap-6 rounded-[2rem] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.12)] md:grid-cols-[auto,1fr] md:p-8">
      <Image
        src={user.image}
        alt={`${user.firstName} ${user.lastName}`}
        width={144}
        height={144}
        className="h-28 w-28 rounded-[2rem] object-cover md:h-36 md:w-36"
      />

      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm tracking-[0.2em] text-[var(--muted)] uppercase">
            {dictionary.userPage.profileBadge}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">
            {user.firstName} {user.lastName}
          </h1>
        </div>

        <div className="flex flex-wrap gap-3 text-sm md:text-base">
          {user.email && (
            <Link
              href={`mailto:${user.email}`}
              className="rounded-full bg-[var(--background)] px-3 py-1"
              target="_blank"
            >
              {user.email}
            </Link>
          )}
          {user.phone && (
            <Link
              href={`tel:${user.phone}`}
              className="rounded-full bg-[var(--background)] px-3 py-1"
              target="_blank"
            >
              {user.phone}
            </Link>
          )}
          {user.company && user.company.role && (
            <span className="rounded-full bg-[var(--background)] px-3 py-1">
              {user.company.role}
            </span>
          )}
          {user.company && user.company.title && (
            <span className="rounded-full bg-[var(--background)] px-3 py-1">
              {user.company.title}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
