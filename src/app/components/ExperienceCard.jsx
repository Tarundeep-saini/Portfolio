"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ExperienceCard = ({ job }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 1 }}
      className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6"
    >
      <div className="flex flex-col md:flex-row justify-between items-center mb-2">
        <a
          href="https://xloud.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl md:text-2xl font-bold hover:underline"
        >
          {job.name}
        </a>
        <span className="text-gray-400">{job.location || "Location"}</span>
      </div>
      <p className="text-gray-400 mb-4 text-sm md:text-base text-center md:text-left">
        {job.date}
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm md:text-lg">
        {job.tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceCard;
