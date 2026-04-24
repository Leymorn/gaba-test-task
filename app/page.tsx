import { DEFAULT_USERS_LIMIT, usersApi } from "@/entities/user/api";
import { redirect } from "next/navigation";
import { UserCard } from "./entities/user/ui/UserCard";
import { HomeIntro, Pagination } from "./widgets/pages/index";

type HomeProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const requestedPage = Math.max(1, Number(params.page ?? "1") || 1);
  const users = await usersApi.getAllUsers({ page: requestedPage });
  const totalPages = Math.max(1, Math.ceil(users.total / DEFAULT_USERS_LIMIT));

  if (requestedPage > totalPages) {
    redirect(totalPages === 1 ? "/" : `/?page=${totalPages}`);
  }

  return (
    <section className="container space-y-8 p-4 md:p-8">
      <HomeIntro />

      <Pagination currentPage={requestedPage} totalPages={totalPages} totalUsers={users.total} />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {users.users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
}
