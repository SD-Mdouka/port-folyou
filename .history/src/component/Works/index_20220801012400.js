import React from 'react';
import Footer from '../Footer';
import './style.css';

const Works = () => {
    return (
      <>
        <section className="bg-transparent">
          <div data-aos="fade" className="aos-init aos-animate bg-transparent">
            <div className="container sm:px-5 md:px-10 bg-transparent">
              <div className="py-12">
                <h2 className="text-4xl font-bold after:left-52 mt-12 lg:mt-0 text-white">
                  Portfolio
                </h2>
                <span
                  className="text-7xl font-bold font-robotoSlab inline-block
                 relative after:absolute  transform after:-translate-y-[60%] 
                 after:bg-gradient-to-r from-[#FA5252] to-[#DD2476] after:h-0.5 after:rounded-md after:content-[''] md:after:w-48  after:top-[50%] text-white"
                ></span>
              </div>
              <div className="my-masonry-grid">
                <div
                  className="my-masonry-grid_column w-[33.3333%] md:w-[50%]"
                >
                  <div className="rounded-lg p-6 border-[2px] border-[#212425]">
                    <div className=" overflow-hidden rounded-lg">
                      <img
                        className="w-full cursor-pointer transition duration-200 ease-in-out
                                    transform hover:scale-110 rounded-lg h-auto"
                        src=""
                        alt=""
                      />
                    </div>
                    <span
                      className="pt-5 text-[14px] font-normal
                     text-gray-lite block text-[#A6A6A6]"
                    >
                      Logo
                    </span>
                    <h2
                      className="font-medium cursor-pointer 
                                text-xl duration-300 transition hover:text-[#FA5252] 
                                hover:text-[#FA5252] 
                                text-white mt-2"
                    >
                      Chul urina
                    </h2>
                  </div>
                </div>
                <div
                  className="my-masonry-grid_column"
                  style={{ width: "50%" }}
                >
                  <div className="rounded-lg p-6 border-[2px] border-[#212425]">
                    <div className=" overflow-hidden rounded-lg">
                      <img
                        className="w-full cursor-pointer transition duration-200 ease-in-out transform 
                                   hover:scale-110 rounded-lg h-auto "
                        src=""
                        alt=""
                      />
                    </div>
                    <span className="pt-5 text-[14px] font-normal text-gray-lite block text-[#A6A6A6]">
                      Logo
                    </span>
                    <h2
                      className="font-medium cursor-pointer
                         text-xl duration-300 transition hover:text-[#FA5252] hover:text-[#FA5252]
                          dark:text-white mt-2"
                    >
                      Chul urina
                    </h2>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </section>
      </>
    );
}
export default Works;