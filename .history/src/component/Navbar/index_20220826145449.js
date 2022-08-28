/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import IconHome from "./svgs/IconHome";
import IconAbout from "./svgs/IconAbout";
import IconWorks from "./svgs/IconWorks";
import IconContact from "./svgs/IconContact";
import "./style.css";
import IconOutMenu from "./svgs/IconOutMenu";

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
              <IconOutMenu />
            )}

            <i></i>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
