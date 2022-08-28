import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWordpressSimple,
  faLaravel,
} from "@fortawesome/free-brands-svg-icons";
// import "./style.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <section className="bg-transparent text-black">
        <div className="container bg-transparent sm:px-5 md:px-10 lg:px-15">
          <div data-aos="fade" className="aos-init aos-animate bg-transparent">
            <div className="py-4">
              <h2 className="text-4xl font-black after:left-52 lg:mt-0">
                About Me
              </h2>
              <div className="grid grid-cols-10 md:gap-10 pt-4 md:pt-[40px] items-center">
                <div className="col-span-3 md:col-span-1">
                  <div className="w-[300px] h-[400px] object-cover overflow-hidden rounded-[35px] mb-5 md:mb-0">
                    <img className="w-full" src="/assete/avatar.jpg" alt="" />
                  </div>
                </div>
                <div className="col-span-7 md:col-span-8 space-y-2.5">
                  <div className=" md:mr-12 xl:mr-16">
                    <h3 className="text-3xl font-bold mb-2.5">Who am i?</h3>
                    <p className="text-[#44566c] leading-7 py-10 text-[24px] long-text">
                      I am an application developer that contributes to raising
                      awareness in the community.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold my-5">Personal Info</h3>
                    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex">
                        <span className="box-border md:box-content shadow-lg shadow-blue-400/50 text-[#e93b81] mr-2.5 flex items-center justify-center rounded-md text-2xl p-2">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 320 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
                          </svg>
                        </span>
                        <div className="space-y-1 mt-2">
                          <p className="font-bold">Phone</p>
                          <h6 className="">0656-559307</h6>
                        </div>
                      </div>
                      <div className="flex">
                        <span className="box-border md:box-content shadow-lg shadow-blue-500/50 text-[#fd7590] mr-2.5 p-2 flex items-center justify-center rounded-md text-2xl">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 384 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                          </svg>
                        </span>
                        <div className="space-y-1">
                          <p className="font-bold">Location</p>
                          <h6 className="">Hay Salam ,Sale ,Maroc</h6>
                        </div>
                      </div>
                      <div className="flex">
                        <span className="box-border md:box-content shadow-lg shadow-blue-400/50 text-[#6ab5b9] mr-2.5 flex items-center justify-center rounded-md text-2xl p-2">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 512 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"></path>
                          </svg>
                        </span>
                        <div className="space-y-1">
                          <p className="font-bold">Email</p>
                          <h6 className="">sd.mdouka@gmail.com</h6>
                        </div>
                      </div>
                      <div className="flex">
                        <span className="box-border md:box-content shadow-lg shadow-blue-400/50 text-[#c17ceb] mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 448 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path>
                          </svg>
                        </span>
                        <div className="space-y-1">
                          <p className="font-bold">Birthday</p>
                          <h6 className="">Feb 28, 1998</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-10 ">
              <h3 className="text-3xl font-bold pb-5">What I do!</h3>
              <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
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
                    <h3 className=" text-2xl font-semibold">App Development</h3>
                    <p className=" leading-8 text-gray-lite text-[#44566c]">
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
                    <p className=" leading-8 text-gray-lite text-[#44566c]">
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
                    <p className=" leading-8 text-gray-lite text-[#44566c]">
                      Creating and developing user site single pages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
