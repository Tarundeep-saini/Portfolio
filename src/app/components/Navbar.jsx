"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
  {
    title: "Work Experience",
    path: "#experience",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 ">
      <div className="flex items-center justify-center px-2 py-3">
        <div className="mobile-menu ml-auto  block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className=" flex items-center  px-3 py-2 border rouned border-slate-200  text-slate-200  hover:text-white hover:border-white "
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className=" flex items-center  px-3 py-2 border rouned border-slate-200  text-slate-200  hover:text-white hover:border-white "
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto">
          <ul className="flex  space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLinks title={link.title} path={link.path} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
