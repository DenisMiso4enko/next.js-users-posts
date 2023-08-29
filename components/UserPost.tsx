import React from "react";

type Props = {
  post: Post;
};

export const UserPost = ({ post }: Props) => {
  return (
    <div className="border-l-4 border-sky-500 p-5">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};
