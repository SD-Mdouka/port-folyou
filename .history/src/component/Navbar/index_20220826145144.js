/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import IconHome from "./svgs/IconHome";
import IconAbout from "./svgs/IconAbout";
import IconWorks from "./svgs/IconWorks";
import IconContact from "./svgs/IconContact";
import "./style.css";

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
                  <IconWorks />
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
                  <IconContact />
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
