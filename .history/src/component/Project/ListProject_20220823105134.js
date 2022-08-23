import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "./data";

export default function Projects({ tab }) {
  return (
    <section id="projects" className="body-font my-masonry-grid">
      <div className="container mx-auto text-center my-masonry-grid_column w-[33.3333%] md:w-[50%]">
        <div className="flex flex-wrap ml-4 justify-bettwen">
          {projects.map(
            (project) =>
              tab === project.title && (
                <a
                  href={project.link}
                  key={project.image}
                  className="sm:w-1/2 w-full hover:rounded-lg hover:border hover:border-[#212425] transition-all p-4 duration-500  bg-transparent"
                >
                  <div className="flex relative">
                    <img
                      alt="gallery"
                      className="absolute  w-full object-cover"
                      src={project.image}
                    />
                    <div className="p-[24px] relative z-10 w-full border border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                        {project.subtitle}
                      </h2>
                      <h2 className="tracking-widest text-3xl title-font font-medium text-green-400 mb-1">
                        {project.icon}
                      </h2>
                      <div className="border-[2px] rounded-[25px] text-lg font-medium text-white m-8">
                        <a
                          href="https://github.com/paytonjewell"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <CodeIcon className="mx-auto inline-block w-10  " />{" "}
                          Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              )
          )}
        </div>
      </div>
    </section>
  );
}
