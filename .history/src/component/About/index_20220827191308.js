import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWordpressSimple,
  faLaravel,
} from "@fortawesome/free-brands-svg-icons";
import "./style.css";
import { motion } from "framer-motion";
import IconBrithday from "./svgs/IconBrithday";
import IconEmail from "./svgs/IconEmail";
import IconLocation from "./svgs/IconLocation";
import IconPhone from "./svgs/IconPhone";

const About = () => {
  return (
    <>
      <section className="bg-transparent text-black ml-4">
        <div className="container bg-transparent sm:px-5 md:px-10 lg:px-15">
          <div data-aos="fade" className="aos-init aos-animate bg-transparent">
            <motion.div
              initial={{ x: 0, y: -20, opacity: 0, translate: 0.9 }}
              animate={{ x: 10, y: 10, opacity: 1, translate: 1 }}
              exit={{ x: 10, y: -20, opacity: 0, translate: 0.9 }}
              transition={{
                duration: 2.18,
                ease: [0.12, 0.93, 0.66, 0.97],
              }}
            >
              {" "}
              <div className="py-4">
                <h2 className="text-4xl font-black left-52">About Me</h2>
                <div className="grid lg:grid-cols-10 sm:grid-cols-4  md:gap-10 pt-4 md:pt-[40px] items-center">
                  <div className="col-span-3 sm:col-span-2">
                    <motion.div
                      initial={{ x: 10, y: 20, opacity: 0, scale: 0.9 }}
                      animate={{ x: 10, y: 10, opacity: 1, scale: 1 }}
                      exit={{ x: 0, y: 0, opacity: 0, scale: 0.9 }}
                      transition={{
                        duration: 1.18,
                        ease: [0.12, 0.93, 0.66, 0.97],
                      }}
                    >
                      <div className="w-[300px] h-[400px] object-cover overflow-hidden rounded-[35px] mb-5 md:mb-0">
                        <img
                          className="w-full"
                          src="/assete/avatar.jpg"
                          alt=""
                        />
                      </div>
                    </motion.div>
                  </div>
                  <div className="col-span-7 sm:col-span-2 md:col-span-8 space-y-2.5">
                    <div className=" md:mr-12 lg:mr-16">
                      <h3 className="text-3xl font-bold mb-2.5">Who am i?</h3>
                      <p className="text-[#44566c] leading-7 py-10 text-[24px] long-text">
                        I am an application developer that contributes to
                        raising awareness in the community.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold my-5">Personal Info</h3>
                      <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-6">
                        <div className="flex">
                          <span className="box-border md:box-content shadow-lg shadow-blue-400/50 text-[#e93b81] mr-2.5 flex items-center justify-center rounded-md text-2xl p-2">
                            <IconPhone />
                          </span>
                          <div className="space-y-1 mt-2">
                            <p className="font-bold">Phone</p>
                            <h6 className="long-text">0656-559307</h6>
                          </div>
                        </div>
                        <div className="flex">
                          <span className="box-border md:box-content shadow-lg shadow-blue-500/50 text-[#fd7590] mr-2.5 p-2 flex items-center justify-center rounded-md text-2xl">
                            <IconLocation />
                          </span>
                          <div className="space-y-1">
                            <p className="font-bold">Location</p>
                            <h6 className="long-text">
                              Hay Salam ,Sale ,Maroc
                            </h6>
                          </div>
                        </div>
                        <div className="flex">
                          <span className="box-border md:box-content shadow-lg shadow-blue-400/50 text-[#6ab5b9] mr-2.5 flex items-center justify-center rounded-md text-2xl p-2">
                            <IconEmail />
                          </span>
                          <div className="space-y-1">
                            <p className="font-bold">Email</p>
                            <h6 className="long-text">sd.mdouka@gmail.com</h6>
                          </div>
                        </div>
                        <div className="flex">
                          <span className="box-border md:box-content shadow-lg shadow-blue-400/50 text-[#c17ceb] mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                            <IconBrithday />
                          </span>
                          <div className="space-y-1">
                            <p className="font-bold">Birthday</p>
                            <h6 className="long-text">Feb 28, 1998</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="box"
              initial={{ x: 10, y: -20, opacity: 0, scale: 0.9 }}
              animate={{ x: -10, y: -10, opacity: 1, scale: 1 }}
              exit={{ x: 0, y: 0, opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.18,
                ease: [0.12, 0.93, 0.66, 0.97],
              }}
            >
              <div className="pt-10 pl-3">
                <h3 className="text-3xl font-bold pb-5">What I do!</h3>
                <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-3">
                  <div
                    className="transition-all duration-400
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
                    className="transition-all duration-300
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
                      <h3 className=" text-2xl font-semibold">App React Web</h3>
                      <p className=" leading-8 text-gray-lite text-[#44566c] long-text">
                        Creating and developing user interfaces.
                      </p>
                    </div>
                  </div>
                  <div
                    className="transition-all duration-300
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
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
