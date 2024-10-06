import { FaCode } from 'react-icons/fa';
import React from "react";
import { projects } from "../data";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="font-mono text-gray-400 bg-violet-100 body-font">
      <div className="container  font-mono px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <FaCode className="mx-auto inline-block w-10 h-10 mb-4 text-violet-600" />
          <h1 className="underline decoration p-0 px-6 text-3xl md:text-[60px] font-semibold text-center mt-[40px] text-customPurple mb-14 uppercase">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-900">
            Here are some of the projects I've worked on recently, showcasing my skills and passion for frontend development.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:w-1/2 w-full p-4"
            >
              <div className="relative overflow-hidden border-4 border-customPurple rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
               
                <img
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 transform scale-90 hover:scale-100"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full bg-violet-200 opacity-0 hover:opacity-100 transition-opacity duration-500">
                  <h2 className="tracking-widest text-sm title-font font-medium text-violet-800 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-violet-500 mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-gray-700">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
