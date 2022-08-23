/** @format */
import { motion } from "framer-motion";
import React from "react";
import Footer from "../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./style.css";

const Home = () => {
  return (
    <>
      <motion.div
        className="box"
        initial={{ x: 0, y: 0, opacity: 0, scale: 0.9 }}
        animate={{ x: 0, y: 20, opacity: 1, scale: 1 }}
        transition={{ duration: 0.18, ease: [0.12, 0.93, 0.66, 0.97] }}
      >
        {/* Start Body content */}
        <div
          className="flex flex-col items-center sm:mr-[110px] mt-0.4 mx-[90px] my-[40px] justify-between aos-init aos-animate"
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
              <a
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
              </a>
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
