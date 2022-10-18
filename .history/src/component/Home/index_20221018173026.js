/** @format */
import { motion } from "framer-motion";
import React from "react";
import Footer from "../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWordpressSimple,
  faLaravel,
} from "@fortawesome/free-brands-svg-icons";
// import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./style.css";
import { SiTypescript } from "react-icons/si";
import { FaBootstrap, FaFigma } from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";

const Home = () => {
  return (
    <>
      <motion.div
        initial={{ x: 0, y: -40, opacity: 0, translate: 0.4 }}
        animate={{ x: 0, y: 0, opacity: 1, translate: 1 }}
        exit={{ x: 0, y: -40, opacity: 0, translate: 0.4 }}
        transition={{ duration: 1.18, ease: [0.12, 0.93, 0.66, 0.97] }}
      >
        {/* Start Body content */}
        <div
          className="flex flex-col items-center mt-0.4 justify-between aos-init aos-animate"
          data-aos="fade"
        >
          <div className=" w-[250px] h-[250px]  rounded-full overflow-hidden mb-5 md:mb-0 ">
            <img className="w-full " src="/assete/avatar.jpg" alt="" />
          </div>
          <div className="flex flex-col justify-center text-center">
            <h1 className="mt-8 mb-4 text-5xl font-semibold text-black">
              Hi, I'm <span className="my-name"> Salah Eddine</span>
              <h3 className="mt-3">
                <span className="my-name"> Mdouka</span>
              </h3>
            </h1>

            <p className="mb-8 text-[24px] text-[#44566c] mr-1 long-text">
              I'm a Front End Developer.
            </p>

            <div className="flex space-x-8 justify-center">
              {/* <a
                href="https://github.com/SD-Mdouka"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[30px] font-bold text-black ">
                  <FontAwesomeIcon icon={faGithub} />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/salah-eddine-mdouka-578695133/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[30px] text-[#0072b1]">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </span>
              </a> */}
              <motion.div
                initial={{ x: 10, y: -20, opacity: 0, scale: 0.4 }}
                animate={{ x: -10, y: -10, opacity: 1, scale: 1 }}
                exit={{ x: 0, y: 0, opacity: 0, scale: 0.4 }}
                transition={{
                  duration: 0.18,
                  ease: [0.12, 0.93, 0.66, 0.97],
                }}
              >
                <div className="pt-10 pl-3">
                  <h3 className="text-3xl font-bold pb-5">What I do!</h3>
                  <div className="grid gap-8 grid-cols-3 xs:grid-cols-1 md:grid-cols-1">
                    <div
                      className="transition-all duration-300 xs:md:col-span-1
                   hover:box-border hover:md:box-content hover:text-white p-5 rounded-[10px] hover:bg-black hover:shadow-lg
                    hover:shadow-blue-500/50 bg-transparent"
                      data-aos="fade"
                    >
                      <SiTypescript />
                      <div className="space-y-2 mt-1">
                        <h3 className=" text-2xl font-semibold">
                          App React + TypeScript
                        </h3>
                        <p className=" leading-8 text-gray-lite text-[#44566c] long-text">
                          Creating application in organise interfaces.
                        </p>
                      </div>
                    </div>
                    <div
                      className="transition-all duration-300 xs:md:col-span-1
                   hover:box-border hover:md:box-content hover:text-white p-5 rounded-[10px] hover:bg-black hover:shadow-lg
                    hover:shadow-blue-500/50 bg-transparent"
                      data-aos="fade"
                    >
                      <img
                        className="w-12 h-12 object-contain  block"
                        src="/assete/logo512.png"
                        alt=""
                      />
                      <div className="space-y-2 mt-1">
                        <h3 className=" text-2xl font-semibold">
                          App React Web
                        </h3>
                        <p className=" leading-8 text-gray-lite text-[#44566c] long-text">
                          Creating and developing user interfaces.
                        </p>
                      </div>
                    </div>
                    <div
                      className="transition-all duration-300 xs:md:col-span-1
                   hover:box-border hover:md:box-content hover:text-white p-5 rounded-[10px] hover:bg-black hover:shadow-lg
                    hover:shadow-blue-500/50 bg-transparent"
                    >
                      <span className="w-10 h-10 object-contain block">
                        <FontAwesomeIcon
                          className="w-10 h-10 object-contain block text-[#ef1010] hover:text-white"
                          icon={faLaravel}
                        />
                      </span>

                      <div className="space-y-2 mt-1">
                        <h3 className=" text-2xl font-semibold">App Laravel</h3>
                        <p className=" leading-8 text-gray-lite text-[#44566c] long-text">
                          Creating and developing user site single pages.
                        </p>
                      </div>
                    </div>
                    <div
                      className="transition-all duration-400 xs:md:col-span-1
                   hover:box-border hover:md:box-content hover:text-white p-5 rounded-[10px] hover:bg-black hover:shadow-lg
                    hover:shadow-blue-500/50 bg-transparent"
                    >
                      <span className="w-10 h-10 object-contain block">
                        <FontAwesomeIcon
                          className="w-10 h-10 object-contain block"
                          icon={faWordpressSimple}
                        />
                      </span>

                      <div className="space-y-2 mt-1">
                        <h3 className=" text-2xl font-semibold">
                          App Development
                        </h3>
                        <p className=" leading-8 text-gray-lite text-[#44566c] long-text">
                          Creating and developing user site single pages.
                        </p>
                      </div>
                    </div>
                    <div
                      className="transition-all duration-300 xs:md:col-span-1
                   hover:box-border hover:md:box-content hover:text-white p-5 rounded-[10px] hover:bg-black hover:shadow-lg
                    hover:shadow-blue-500/50 bg-transparent"
                      data-aos="fade"
                    >
                      <p className=" object-contain block text-[#ef1010] hover:text-white">
                        <FaBootstrap className="w-10 h-10 inline-block" /> +{" "}
                        <TbBrandTailwind className="w-10 h-10 inline-block" />
                      </p>

                      <div className="space-y-2 mt-1">
                        <h3 className=" text-2xl font-semibold">
                          Design TailwindCss + Bootstrap
                        </h3>
                        <p className=" leading-8 text-gray-lite text-[#44566c] long-text">
                          Styling application your interfaces.
                        </p>
                      </div>
                    </div>
                    <div
                      className="transition-all duration-300 xs:md:col-span-1
                   hover:box-border hover:md:box-content hover:text-white p-5 rounded-[10px] hover:bg-black hover:shadow-lg
                    hover:shadow-blue-500/50 bg-transparent"
                      data-aos="fade"
                    >
                      <FaFigma />
                      <div className="space-y-2 mt-1">
                        <h3 className=" text-2xl font-semibold">UI Figma</h3>
                        <p className=" leading-8 text-gray-lite text-[#44566c] long-text">
                          Convert UI Figma In React.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <Footer />
        </div>
        {/* End Body content */}
      </motion.div>
    </>
  );
};
export default Home;
