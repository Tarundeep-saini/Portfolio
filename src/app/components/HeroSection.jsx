"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-col-1 sm:grid-cols-12 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="col-span-7 place-self-center  text-center sm:text-left "
        >
          <h2 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className=" text-transparent bg-clip-text  bg-gradient-to-r from-purple-500 to-pink-700 ">
              {` Hello, I'm`}
            </span>
            <br />
            <TypeAnimation
              sequence={["Tarundeep", 1000, " Web Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <p className="text-[#ADB7BE] text-base sm:text-lg  mb-6 lg:text-xl">
            {` I'm a versatile full-stack developer skilled in JavaScript,NEXT.js
            React, Node.js, and more. Known for proactive problem-solving and a
            passion for collaborative projects, I'm committed to making
            meaningful contributions.`}
          </p>
          <div className="flex  ">
            <a
              href="#contact"
              className="px-6 py-3 mr-4 w-full sm:w-fit  mb-2  rounded-full  bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-black "
            >
              Hire Me
            </a>
            <a
              href="/Files/Tarundeep-Saini-Resume.pdf"
              download
              className="px-6 py-3 mr-4 w-full sm:w-fit  mb-2  text-white rounded-full  bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 hover:bg-slate-200  "
            >
              Download CV
            </a>
          </div>
        </motion.div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 ">
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className=" rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] relative"
          >
            <Image
              src="/images/hero-image.png"
              alt="Hero Image"
              className="  absolute transform  -translate-x-1/2 -translate-y-1/2 top-1/2  left-1/2 "
              width={300}
              height={300}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
