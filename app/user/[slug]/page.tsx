import { UserDetailsBlock, usersApi } from "@/entities/user";
import { notFound } from "next/navigation";
import { MainInfo } from "@/widgets/pages/user";

export default async function UserPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const userId = Number(slug);

  if (Number.isNaN(userId)) {
    notFound();
  }

  const user = await usersApi.getUserById(userId);

  if (!user) {
    notFound();
  }

  return (
    <section className="container space-y-8 p-4 md:p-8">
      <MainInfo user={user} />
      <div className="grid gap-5 lg:grid-cols-2">
        <UserDetailsBlock user={user} />
      </div>
    </section>
  );
}
