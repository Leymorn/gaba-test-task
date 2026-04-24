import Image from "next/image";
import Link from "next/link";
import { User } from "../model/types";

type UserCardProps = {
  user: User;
  compact?: boolean;
};

export function UserCard({ user, compact = false }: UserCardProps) {
  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <Link
      href={`/user/${user.id}`}
      className={
        compact
          ? "surface-elevated-interactive flex items-center gap-4 rounded-2xl p-4"
          : "surface-interactive group flex h-full flex-col gap-4 rounded-3xl p-6"
      }
    >
      <div className="flex items-center gap-4">
        <Image
          src={user.image}
          alt={fullName}
          width={compact ? 56 : 64}
          height={compact ? 56 : 64}
          className={
            compact ? "h-14 w-14 rounded-2xl object-cover" : "h-16 w-16 rounded-3xl object-cover"
          }
        />
        <div className="min-w-0">
          <p className="text-lg font-semibold tracking-tight">{fullName}</p>
          <p className="truncate text-sm text-[var(--muted)]">@{user.username}</p>
        </div>
      </div>

      {!compact && (
        <div className="space-y-1 text-sm text-[var(--muted)]">
          <p>{user.email}</p>
          <p>
            {user.address.city}, {user.address.country}
          </p>
        </div>
      )}
    </Link>
  );
}
