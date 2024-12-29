import Image from "next/image";
import React from "react";

const BlogsDetails = ({ params }) => {
  console.log(params.id);

  const singleData = blogs.find((blog) => blog.id == params.id);
  // console.log(singleData);
  const image = singleData.image;
  return (
    <div className="pt-16 my-10">
      <h3 className="text-3xl text-center">blogs details</h3>
      <div>
        <Image width={400} height={400} src={`/${image}`} alt="NO IMG FOUND" />
        <h3 className="text-green-500 text-2xl ">
          blog name : {singleData.name}
        </h3>
        <h4>description : {singleData.description}</h4>
        <h4>Long description : {singleData.Long_description}</h4>
      </div>
    </div>
  );
};
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
    image: "image-2",
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
export default BlogsDetails;
