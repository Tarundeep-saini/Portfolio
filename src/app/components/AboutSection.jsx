"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Next.js</li>
        <li>React.js</li>
        <li> MongoDB </li>
        <li>Node.js</li>
        <li> Express </li>
        <li>Typescript</li>
        <li>Javascript</li>
        <li>Github</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B.C.A from CBLU,Bhiwani</li>
        <li> React, NodeJS, Express & MongoDB - The MERN Fullstack Guide </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16  xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="about-image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col  h-full">
          <h2 className=" text-4xl font-bold text-white mb-4 ">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a committed full-stack web developer, possessing skills in
            JavaScript, NEXT.js, React, Redux, Node.js, Express, HTML, and CSS.
            Known for my adaptability and a continuous drive to enhance my
            capabilities, I approach problem-solving with a proactive mindset.
            Embracing teamwork, I excel in collaborative environments and am
            genuinely passionate about making meaningful contributions to
            inventive projects and applications.
          </p>
          <div className="flex flex-row mt-4">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-3">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
