import Link from "next/link";
import React from "react";
const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      name: "Item One",
      image: "image 1",
      description: "This is the first item.",
      Long_description:
        "This is the first item.Potenti pharetra. Maxime minim rerum cum, similique irure imperdiet elit? Saepe gravida. Reiciendis explicabo dictum, lobortis alias? Molestie sociosqu! Vel, nobis accusantium incididunt sem. Sociis enim iusto. Exercitationem ac litora eleifend exercitationem, qui omnis totam, commodo nulla neque sit.",
    },
    {
      id: 2,
      name: "Item Two",
      image: "image 2",
      description: "This is the second item.",
      Long_description:
        "This is the first item.Potenti pharetra. Maxime minim rerum cum, similique irure imperdiet elit? Saepe gravida. Reiciendis explicabo dictum, lobortis alias? Molestie sociosqu! Vel, nobis accusantium incididunt sem. Sociis enim iusto. Exercitationem ac litora eleifend exercitationem, qui omnis totam, commodo nulla neque sit.",
    },
    {
      id: 3,
      name: "Item Three",
      image: "image 3",
      description: "This is the third item.",
      Long_description:
        "This is the first item.Potenti pharetra. Maxime minim rerum cum, similique irure imperdiet elit? Saepe gravida. Reiciendis explicabo dictum, lobortis alias? Molestie sociosqu! Vel, nobis accusantium incididunt sem. Sociis enim iusto. Exercitationem ac litora eleifend exercitationem, qui omnis totam, commodo nulla neque sit.",
    },
    {
      id: 4,
      name: "Item Four",
      image: "image 4",
      description: "This is the four item.",
      Long_description:
        "This is the first item.Potenti pharetra. Maxime minim rerum cum, similique irure imperdiet elit? Saepe gravida. Reiciendis explicabo dictum, lobortis alias? Molestie sociosqu! Vel, nobis accusantium incididunt sem. Sociis enim iusto. Exercitationem ac litora eleifend exercitationem, qui omnis totam, commodo nulla neque sit.",
    },
    {
      id: 5,
      name: "Item Five",
      image: "image 5",
      description: "This is the Five item.",
      Long_description:
        "This is the first item.Potenti pharetra. Maxime minim rerum cum, similique irure imperdiet elit? Saepe gravida. Reiciendis explicabo dictum, lobortis alias? Molestie sociosqu! Vel, nobis accusantium incididunt sem. Sociis enim iusto. Exercitationem ac litora eleifend exercitationem, qui omnis totam, commodo nulla neque sit.",
    },
    {
      id: 6,
      name: "Item Six",
      image: "image 6",
      description: "This is the six item.",
      Long_description:
        "This is the first item.Potenti pharetra. Maxime minim rerum cum, similique irure imperdiet elit? Saepe gravida. Reiciendis explicabo dictum, lobortis alias? Molestie sociosqu! Vel, nobis accusantium incididunt sem. Sociis enim iusto. Exercitationem ac litora eleifend exercitationem, qui omnis totam, commodo nulla neque sit.",
    },
  ];
  return (
    <div className="pt-16 my-8">
      <h4 className="text-center text-3xl mb-5">BlogsPage</h4>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id}>
            <div className="border border-green-600 p-4 rounded-lg shadow-lg">
              {/* <img src={blog.image} alt={blog.image} /> */}
              <h3 className="text-green-500 text-2xl ">
                blog name : {blog.name}
              </h3>
              <h4>description : {blog.description}</h4>
              <h4>Long description : {blog.Long_description}</h4>

             <Link href={`/blogs/${blog.id}`}> <button className="bg-green-500 p-2 rounded-md my-4">
                see more
              </button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
