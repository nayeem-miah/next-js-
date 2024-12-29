import Link from "next/link";
import React from "react";

const aboutPage = () => {
  return (
    <div>
      <div className="my-10 lg:mx-0 mx-3 mt-20">
        <h3 className="text-center font-bold text-3xl lg:mt-16 mt-5 mb-5">
          About Me
        </h3>
        <p className=" lg:text-xl text-xs">
          I'm Nayeem,I am a Frontend Developer.I'm a dedicated Frontend
          Developer driven by a passion for creating visually stunning and
          user-friendly web interfaces. My expertise spans HTML, CSS,
          JavaScript, React.js, Node.js, Express.js, Firebase, MongoDB, and
          Tailwind CSS. With a strong focus on design and an ongoing commitment
          to enhancing my skills, I strive to deliver seamless and engaging user
          experiences. I have been involved in web development for several days.
          I am still learning. I have also done several projects. Still doing
          the project. My dream is to become a MERN stack developer. Inshallah
          that dream will be fulfilled very soon. My web development journey
          started in 2023. My journey continues with{" "}
          <Link
            className="text-purple-600 hover:link"
            target="_blank"
            href="https://web.programming-hero.com/"
          >
            programming hero
          </Link>{" "}
          in hand. Then in the long run dedication and hard work made me a
          junior web developer.
        </p>
        <p className="py-4">
          <span className="font-bold text-2xl underline uppercase">
            education :
          </span>
          I am studying Diploma Engineering in Computer Science and Technology
          from Moulvibazar Polytechnic Institute. I gave SSC Exam in 2021.
        </p>
        <div>
          <div className="flex justify-center items-center py-5"></div>

          <div className=" lg:flex md:flex justify-between ">
            <div className="">
              <h4 className="font-bold">Name:</h4>
              <p className="">Nayeem miah </p>
            </div>
            <div className="">
              <h4 className="font-bold">Email:</h4>
              <p className="">nayeem5113a@gmail.com</p>
            </div>
            <div className="">
              <h4 className="font-bold">Date of birth:</h4>
              <p className=""> 10 November 2004</p>
            </div>
            <div className="">
              <h4 className="font-bold">From:</h4>
              <p className=""> Mymensingh, Bangladesh</p>
            </div>
          </div>
          <div className="flex justify-center items-center py-5 gap-3 my-10">
            <Link
              href={"/skills"}
              className="bg-gradient-to-r flex  items-center gap-1 from-purple-500 via-pink-500 to-red-500 text-white font-bold py-2 px-4 rounded "
            >
              --skills--
            </Link>
            <Link
              href={"/projects"}
              className="bg-gradient-to-r flex  items-center gap-1 from-purple-500 via-pink-500 to-red-500 text-white font-bold py-2 px-4 rounded "
            >
              --projects--
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutPage;
