/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import IconHome from "./svgs/IconHome";
import "./style.css";
import IconAbout from "./svgs/IconAbout";

const Navbar = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div className="p-4">
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar w-full ml-4" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <span className="flex flex-row bg-transparent  rounded-xl">
                <span className="text-black mt-3 ml-2 text-[20px] text-bold lg:flex">
                  <IconHome />
                </span>
                <NavLink exact to="/" className="nav-links mt-0.5">
                  Home
                </NavLink>
              </span>
            </li>
            <li className="nav-item">
              <span className="flex flex-row bg-transparent rounded-xl ">
                <span className="text-black mt-3 ml-2 text-[20px] text-bold lg:flex">
                  <IconAbout />
                </span>
                <NavLink
                  exact
                  to="/about"
                  activeClassName="active"
                  className="nav-links"
                >
                  Profile
                </NavLink>
              </span>
            </li>
            <li className="nav-item">
              <span className="flex flex-row bg-transparent rounded-xl">
                <span className="text-black mt-3 ml-2 text-[20px] text-bold lg:flex">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                    <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                    <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </span>
                <NavLink
                  exact
                  to="/works"
                  activeClassName="active"
                  className="nav-links"
                >
                  Works
                </NavLink>
              </span>
            </li>
            <li className="nav-item">
              <span className="flex flex-row bg-transparent rounded-xl">
                <span className="text-black mt-3 ml-2 hidden-icon text-[20px] text-bold lg:flex">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M3 2h16.005C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H3V2zm4 2H5v16h2V4zm2 16h10V4H9v16zm2-4a3 3 0 0 1 6 0h-6zm3-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8-6h2v4h-2V6zm0 6h2v4h-2v-4z"></path>
                    </g>
                  </svg>
                </span>
                <NavLink
                  exact
                  to="/contact"
                  activeClassName="active"
                  className="nav-links"
                >
                  Contact
                </NavLink>
              </span>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {!click ? (
              <span
                className={
                  "bg-white text-black w-[40px] h-[40px] rounded-full flex justify-center cursor-pointer items-center text-3xl ml-3 "
                }
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
                </svg>
              </span>
            ) : (
              <span
                className={
                  "opacity-100  bg-white text-black w-[40px] h-[40px] rounded-full flex justify-center cursor-pointer items-center text-3xl ml-3 "
                }
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                </svg>
              </span>
            )}

            <i></i>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;