import { UserCard } from "@/components/UserCard";
import { UserPost } from "@/components/UserPost";
import { getUser } from "@/lib/getUser";
import { getUserPosts } from "@/lib/getUserPosts";
import { Metadata } from "next";
import Link from "next/link";

import React from "react";

type Params = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const user: User = await getUser(params.id);
  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

const UserPage = async ({ params }: Params) => {
  const user: User = await getUser(params.id);
  const userPosts: Post[] = await getUserPosts(params.id);

  return (
    <div>
      <Link href={"/users"}>Go Back to Users</Link>
      <h1 className="font-bold text-2xl mb-1">User {user.username} page</h1>
      <UserCard user={user} />
      <br />
      <div className="flex flex-col gap-4">
        {userPosts.map((post) => (
          <UserPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default UserPage;
