import React from "react";
import { Metadata } from "next";
import { getAllUsers } from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
  description: "",
};
const Users = async () => {
  const users: User[] = await getAllUsers();
  const content = (
    <section>
      <h2>
        <Link href={"/"}>Go back home</Link>
      </h2>
      <br />
      {users.map((user) => (
        <div key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </div>
      ))}
    </section>
  );
  return <div>{content}</div>;
};

export default Users;
