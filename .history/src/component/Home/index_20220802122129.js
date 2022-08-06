/** @format */

import React from "react";
import Footer from "../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./style.css";

const Home = () => {
  return (
    <>
      <div className="">
        {/* Start Body content */}
        <div
          className="flex flex-col items-center sm:mr-[110px] mt-0.4 mx-[90px] my-[40px] justify-between aos-init aos-animate"
          data-aos="fade"
        >
          <div className=" w-[300px] h-[200px] sm:w-[150] md:w-[330px] md:h-[400px] ">
            <img
              className="w-full h-full object-fit overflow-hidden rounded-[35px] mb-5 md:mb-0 px-4"
              src="/assete/avatar.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center text-center">
            <h1 className="mt-6 mb-1 text-5xl font-semibold text-black">
              Hi, I'm <span className="my-name"> Salah Eddine</span>
              <h3>
                <span className="my-name"> Mdouka</span>🤚
              </h3>
            </h1>

            <p className="mb-2 text-[24px] text-[#44566c] mr-1">
              I'm a Front End Developer.
            </p>

            <div className="flex space-x-8 justify-center">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[30px] font-bold text-black ">
                  <FontAwesomeIcon icon={faGithub} />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[30px] text-[#0072b1]">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </span>
              </a>
            </div>
          </div>
          <Footer />
        </div>
        {/* End Body content */}
      </div>
    </>
  );
};
export default Home;