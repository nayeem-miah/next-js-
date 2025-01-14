"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    // { href: "/project", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/posts", label: "posts" },
    {href: "/meals", label : "meals"}
  ];

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <nav className="navbar bg-opacity-90 backdrop-blur-md shadow-lg fixed z-50 w-full">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Dropdown for Mobile */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52 font-semibold"
          >
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`${
                    pathName === href ? "font-bold text-green-500" : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Logo */}
        <Link href="/" className="text-xl lg:text-2xl font-bold">
          <span className="bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
            NA<span className="text-orange-600">Y</span>EEM
          </span>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${
                  pathName === href ? "font-bold text-green-500" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
      <button
         
         onClick={() => router.push("/contact")}
             
          className="bg-green-500 p-2 rounded-md my-4"
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
