import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewLink }) => {
  return (
    <div className="flex flex-col sm:flex-row ">
      <div
        className=" w-full md:w-5/12 h-44 md:h-60  rounded-t-lg relative group "
        style={{
          width: "full",
          background: `url(${imgUrl})`,
          backgroundSize: " cover  ",
        }}
      >
        <div className="overlay justify-center items-center gap-4 absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80  transition-all duration-500  ">
          <a
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] cursor-pointer hover:text-white" />
          </a>
          {previewLink && (
            <a
              href={previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] cursor-pointer hover:text-white" />
            </a>
          )}
        </div>
      </div>
      <div className=" w-full md:w-7/12 text-white md:rounded-none rounded-b-xl bg-[#2a2929] py-6 px-4 ">
        <h5 className="text-2xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
