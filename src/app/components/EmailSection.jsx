"use client";
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const sendEmail = async (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="p-2 mt-16 ">
      <div>
        <h5 className="text-3xl font-bold text-white my-2">{`Let's Contact`}</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md ">
         {` I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!`}
        </p>
        <div className="socials flex flex-row gap-2">
          <Link
            href="https://github.com/Tarundeep-saini"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/tarundeep-saini-925791247/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image src={LinkedinIcon} alt="Github Icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
