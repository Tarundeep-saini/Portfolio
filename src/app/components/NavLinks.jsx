import Link from "next/link";
import React from "react";

const NavLinks = ({ title, path }) => {
  return (
    <Link href={path} className="block text-lg py-2 pl-3 pr-4 text-[#ADB7BE] ">
      {title}
    </Link>
  );
};

export default NavLinks;
