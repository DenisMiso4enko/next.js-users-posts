import React from "react";

type Props = {
  user: User;
};

export const UserCard = ({ user }: Props) => {
  return (
    <div className="flex flex-col gap-1 border-2 border-sky-500 p-5">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.address.street}</p>
      <p>{user.company.name}</p>
    </div>
  );
};
