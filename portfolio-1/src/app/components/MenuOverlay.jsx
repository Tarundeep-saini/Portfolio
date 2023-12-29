"use client";
import React from "react";
import NavLinks from "./NavLinks";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col items-center   py-4 ">
      {links.map((link, index) => {
        return (
          <li className="" key={index}>
            <NavLinks title={link.title} path={link.path} />;
          </li>
        );
      })}
    </ul>
  );
};

export default MenuOverlay;
