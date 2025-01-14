import getPosts from "@/Components/getPost";
import Link from "next/link";
import React from "react";

// const getPost = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// };

const postPage = async () => {
  const posts = await getPosts();
//   console.log(posts);
  return (
    <div className="mt-20">
      post pages : {posts?.length}
      <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-2">
        {posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <div className="border border-green-500 p-4">
              <h3 className="text-2xl via-violet-500 my-3">{post.title}</h3>
              <h3 className="text-gray-50"> {post?.body}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default postPage;
