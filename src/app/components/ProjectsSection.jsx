"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Doctor Appointment Website ",
    description:
      "The Doctor Appointment Website simplifies booking medical appointments, offering users easy access to doctors' schedules and enabling hassle-free appointment scheduling. ",
    image: "images/Resources/doctor.png",
    tag: ["All", "Deployed"],
    gitUrl: "https://github.com/Tarundeep-saini/doctor-appointment",
    previewurl: "https://doctor-appointment-ten-zeta.vercel.app",
  },
  {
    id: 2,
    title: "Carshub ",
    description:
      "Carshub is a platform that lets users search for and book cars with ease. Using filters like make, model, year, and fuel type, users can quickly find the right car. The app pulls real-time data from an external API to ensure up-to-date listings for a smooth booking experience. ",
    image: "images/Resources/carshub.png",
    tag: ["All", "Deployed"],
    gitUrl: "https://github.com/Tarundeep-saini/doctor-appointment",
    previewurl: "https://carshub-nine.vercel.app",
  },
  {
    id: 3,
    title: "Form.io",
    description:
      "From.io allows users to create forms that encompass three different types of questions—categories, comprehension, and Cloze. Other users can then fill out these forms and review the results. The backend system conducts checks on the forms to uphold security measures throughout the process.",
    image: "images/Resources/Form.png",
    tag: ["All", "Deployed"],
    gitUrl: "https://github.com/Tarundeep-saini/Form.io/tree/main",
    previewurl: "https://form-io.vercel.app",
  },
  {
    id: 4,
    title: "Mobile E-Commerce Store",
    description:
      "In this project, people can buy and sell Mobiles and keep a record of their listings. All the information is stored in a MongoDB database, which holds data about users and products.",
    image: "images/Resources/Mobile.png",
    tag: ["All"],
    gitUrl: "https://github.com/Tarundeep-saini/Mobile-Ordering_store",
    previewurl: null,
  },
  {
    id: 5,
    title: "Chat Website",
    description:
      "This platform offers users the capability to register accounts, enabling communication through messages and file sharing. The exchanged messages are stored in a database for record-keeping.      ",
    image: "images/Resources/Chat.png",
    tag: ["All"],
    gitUrl: "https://github.com/Tarundeep-saini/Live_Chat-",
    previewurl: null,
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProducts = projectsData.filter((project) => {
    return project.tag.includes(tag);
  });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className=" text-4xl font-bold text-center text-white mb-4 ">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center text-white  gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Deployed"
          isSelected={tag === "Deployed"}
        />
      </div>
      <ul ref={ref} className="flex flex-col gap-6">
        {" "}
        {filteredProducts.map((project, index) => {
          return (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.6, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewLink={project.previewurl}
              />
            </motion.li>
          );
        })}{" "}
      </ul>
    </section>
  );
};

export default ProjectsSection;
