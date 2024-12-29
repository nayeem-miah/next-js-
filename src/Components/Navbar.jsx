"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const nabLinks = (
    <div className="flex gap-4 px-1">
      <li>
        <Link
          href={"/"}
          className={`${pathName == "/" && "font-bold text-green-400"}`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href={"/about"}
          className={`${pathName == "/about" && "font-bold text-green-400"}`}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href={"/skills"}
          className={`${pathName == "/skills" && "font-bold text-green-400"}`}
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          href={"/project"}
          className={`${pathName == "/project" && "font-bold text-green-400"}`}
        >
          Projects
        </Link>
      </li>
      {/* <li>
          <Link
            href={"/contact"}
            className={`${pathName == "/contact" && "font-bold text-green-400"}`}
          >
            Contact
          </Link>
        </li> */}
      <li>
        <Link
          href={"/blogs"}
          className={`${pathName == "/blogs" && "font-bold text-green-400"}`}
        >
          Blogs
        </Link>
      </li>
    </div>
  );

  // navigate route
  const handleContact = () => {
    router.push("/contact");
  };
  return (
    <div className="navbar bg-opacity-50 backdrop-blur-lg shadow-2xl   fixed z-10    w-full flex justify-between p-4 ">
      <div className="">
        <Link href={"/"} className="text-xl lg:text-2xl  flex">
          <span
            className=" font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient
"
          >
            NA<span className="text-orange-600 font-bold">Y</span>EEM
          </span>
        </Link>
      </div>
      <div className="   flex">
        <ul className="  font-bold px-1">{nabLinks}</ul>
      </div>
      <div className="">
        <button
          onClick={handleContact}
          className="bg-gradient-to-r flex  items-center gap-1 from-green-500 via-green-500 to-green-500 text-white font-bold py-2 px-4 rounded "
        >
          contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
