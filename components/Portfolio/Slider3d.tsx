"use client";

import React, { useEffect, useState } from "react";
import { Project, projects } from "@/utils/utils";

import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Slider3D: React.FC = () => {
  const correctOrderProjects = projects.reverse();
  const [projectIndex, setProjectIndex] = useState<number>(0);
  const [activeProject, setActiveProject] = useState<Project | null>(
    projects[projectIndex]
  );
  const [rotation, setRotation] = useState<number>(0);
  const [animateTitle, setAnimateTitle] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    setActiveProject(projects[projectIndex]);
    setAnimateTitle(true);
    const timeoutId = setTimeout(() => setAnimateTitle(false), 500); // Adjust timing based on your animation duration

    return () => clearTimeout(timeoutId);
  }, [projectIndex]);

  const nextProject = () => {
    setProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
    setRotation((prevRotation) => prevRotation + 60);
  };

  const prevProject = () => {
    setProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
    setRotation((prevRotation) => prevRotation - 60);
  };

  return (
    <div className="flex flex-col gap-7 lg:gap-14 items-center relative">
      <div className="flex flex-col gap-5 min-h-16 min-h-[90px] lg:min-h-[120px]">
        {activeProject && (
          <div
            className={`text-[#47AEDE] font-recoletaBlack text-3xl md:text-3xl lg:text-5xl xl:text-5xl ${
              animateTitle ? "project-name" : ""
            }`}
          >
            {activeProject.name}
          </div>
        )}
      </div>
      <div
        className="slider"
        style={{ transform: `perspective(1000px) rotateY(${rotation}deg)` }}
      >
        {correctOrderProjects.map((project, index) => (
          <span
            style={{ "--i": index + 1 } as React.CSSProperties}
            key={project.id}
          >
            <a href={`/projects/${project.id}`}>
              <img
                src={project.imgSrc}
                alt={project.name}
                className="absolute top-0 left-0 w-full h-full rounded-[15px] border-black border-[6px] hover:translate-y-[-0.25rem] duration-500 cursor-pointer"
              />
            </a>
          </span>
        ))}
      </div>
      <div className="flex justify-around sm:justify-between absolute max-w-[400px] md:max-w-[688px] lg:max-w-[1088px] 2xl:max-w-[1344px] w-full m-auto bottom-[-25%] sm:bottom-[30%] px-6 md:px-0">
        <div
          onClick={nextProject}
          className="scale-[2.25] hover:scale-[2.5] duration-300 cursor-pointer"
        >
          <FaArrowCircleLeft />
        </div>
        <div
          onClick={prevProject}
          className="scale-[2.25] hover:scale-[2.5] duration-300 cursor-pointer"
        >
          <FaArrowCircleRight />
        </div>
      </div>
    </div>
  );
};

export default Slider3D;