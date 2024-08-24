"use client"

import { Project, projects } from '@/utils/utils';
import React from 'react'
import { Hind } from "next/font/google";
import { useRouter } from 'next/navigation';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
})

const ProjectIndividualPage = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const correctProject: Project = projects.find((project) => `${project.id}` === `${id}`) || projects[0];
  const router = useRouter();

  const nextProject = (): void => {
    if (Number(id) <= 5) {
      router.push(`/projects/${Number(id) + 1}`);
    } else {
      router.push(`/projects/1`);
    }
  }

  const prevProject = (): void => {
    if (Number(id) >= 2) {
      router.push(`/projects/${Number(id) - 1}`);
    } else {
      router.push(`/projects/6`);
    }
  }
  
  return (
    <div style={{ backgroundImage: "linear-gradient(-62deg, #EEF7FB 0 50%, white 0% 100%)" }}>
      <div className='min-h-screen pt-[120px] pb-[150px] container mx-auto lg:px-24 sm:px-10 px-4 flex flex-col gap-8 justify-between'>
        <div className="flex flex-col gap-8 items-center">
          <div className="flex flex-col gap-8 lg:flex-row items-center">
            <img src={correctProject.projectImg} className='max-h-[550px] object-cover lg:w-[70%] rounded-2xl' />
            <div className='lg:w-[30%]'>
              <div className="text-3xl text-[#47AEDE]">
                {correctProject.name}
              </div>
              <div className={`font-[300] text-[13px] sm:text-base text-[#47626D] leading-6 sm:leading-8 ${hind.className} mt-4`}>
                {correctProject.description}
              </div>
              <div className="mt-6">
                <p className={`text-2xl text-dark font-sans ${hind.className}`}>
                  Feito Com
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {correctProject.skills?.map((skill) => (
                    <div key={skill} className="flex text-white bg-slate-600 px-4 py-2 rounded-full">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-8">
            <a
              href={correctProject.link}
              target="_blank"
              className={`cursor-pointer inline-block hover:bg-[#223740] transition-all duration-300 ease-in-out text-white font-bold uppercase bg-[#47AEDE] hover:show-lg hover:translate-y-1 rounded-lg py-3 px-5 md:py-2 lg:py-3 lg:px-8 md:text-xs lg:text-base ${hind.className}`}
            >
              Deploy
            </a>
            <a
              target="_blank"
              href={correctProject.repo}
              className={`cursor-pointer inline-block bg-[#223740] transition-all duration-300 ease-in-out text-white font-bold uppercase hover:bg-[#47AEDE] hover:show-lg hover:translate-y-1 rounded-lg py-3 px-5 md:py-2 lg:py-3 lg:px-8 md:text-xs lg:text-base ${hind.className}`}
            >
              Repositório
            </a>
          </div>
        </div>
        <div className="flex items-center justify-between min-w-full">
          <div
            onClick={prevProject}
            className=" group duration-300 cursor-pointer flex items-center gap-3 text-[#47AEDE] text-xl"
          >
            <FaArrowCircleLeft className='group-hover:scale-150 scale-125 duration-300 ease-in-out' />Projeto Anterior
          </div>
          <div
            onClick={nextProject}
            className="group duration-300 cursor-pointer flex items-center gap-3 text-[#47AEDE] text-xl"
          >
            Próximo Projeto<FaArrowCircleRight className='group-hover:scale-150 scale-125 duration-300 ease-in-out' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectIndividualPage