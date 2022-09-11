import React from "react";
import { CodeIcon, ArrowDownIcon } from "@heroicons/react/solid";
import { Icon } from "@iconify/react";
import { projects } from "./data";

export default function Projects({ tab }) {
  return (
    <section className="text-center mt-3 relative grid grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-1 ml-6">
      {projects.map(
        (project) =>
          tab === project.title && (
            <a
              href={project.link}
              key={project.image}
              className="w-full hover:rounded-lg 
              hover:border hover:border-[#212425] transition-all 
              duration-1000 ease-in-out  
              bg-transparent"
            >
              <div className="flex relative m-8">
                <img
                  alt="gallery"
                  className="absolute p-1"
                  src={project.image}
                />
                <div
                  className="p-[35px] relative z-10 w-full border
                 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100"
                >
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h2 className="tracking-widest text-3xl title-font font-medium text-green-400 mb-1">
                    {project.icon}
                  </h2>
                  <div className=" flex flex-col text-lg font-medium text-white m-8">
                    {project.live !== "" && (
                      <a
                        className="border-[2px] rounded-[25px]"
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="mx-4 pt-3 pb-3 inline-block text-xl ">
                          <span>Live Site</span>
                          <Icon icon="heroicons:arrow-top-right-on-square-solid" />
                        </span>
                      </a>
                    )}
                    {project.link !== "" && (
                      <a
                        className="border-[2px] rounded-[25px] mt-1"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <CodeIcon className="mx-auto inline-block w-10  " />{" "}
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </a>
          )
      )}
    </section>
  );
}
