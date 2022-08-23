import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "./data";
import { motion } from "framer-motion";

export default function Projects({ tab }) {
  return (
    <section id="projects" className="body-font my-masonry-grid">
      <div className="container mx-auto text-center my-masonry-grid_column w-[33.3333%] md:w-[50%]">
        <div className="flex flex-wrap ml-4 justify-bettwen">
          {projects.map(
            (project) =>
              tab === project.title && (
                <motion.div
                  initial={{ x: 20, y: -40, opacity: 0, translate: 0.9 }}
                  animate={{ x: 10, y: 10, opacity: 1, translate: 1 }}
                  exit={{ x: 10, y: -40, opacity: 0, translate: 0.9 }}
                  transition={{
                    duration: 2.18,
                    ease: [0.12, 0.93, 0.66, 0.97],
                  }}
                >
                  <a
                    href={project.link}
                    key={project.image}
                    className="sm:w-1/2 w-full hover:rounded-lg hover:border hover:border-[#212425] transition-all duration-500  bg-transparent"
                  >
                    <div className="flex relative gap-5">
                      <img
                        alt="gallery"
                        className="absolute  w-full h-[250px] object-cover"
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
                </motion.div>
              )
          )}
        </div>
      </div>
    </section>
  );
}
