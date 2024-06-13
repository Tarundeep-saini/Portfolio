"use client";
import ExperienceCard from "./ExperienceCard";

const Work = [
  {
    name: "Xloud Technologies",
    date: "May 2023 - Present",
    location:"New Delhi, India",
    tasks: [
      "Enhanced user engagement by 35% through the implementation of animations using Framer Motion.",
      "Resolved critical form submission bugs, reducing error rates by 40% and ensuring enhanced data integrity.",
      "Developed the knowledge base section with Nextra, boosting content accessibility by 40%.",
      "Improved VM launch speed by 20% through backend image format compatibility checks.",
    ],
  },
  // You can add more work experience objects here
];

const ExperienceSection = () => {
  return (
    <section id="experience">
      <h2 className="text-4xl font-bold text-center text-white mb-4">
        Work Experience
      </h2>
      <div className="max-w-6xl md:mx-auto px-4">
        {Work.map((job, index) => (
          <ExperienceCard key={index} job={job} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
