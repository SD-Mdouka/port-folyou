import React from "react";
import Footer from "../Footer";
import Project from "../Project/tabsProject";
import "./style.css";

const Works = () => {
  return (
    <>
      <section className="bg-transparent text-black">
        <div data-aos="fade" className="aos-init aos-animate bg-transparent">
          <div className="container sm:px-5 md:px-10 bg-transparent">
            <div className="">
              <h2 className="text-4xl font-bold after:left-52 mt-12 lg:mt-0 ">
                Works
              </h2>
            </div>
            <Project />
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
};
export default Works;
