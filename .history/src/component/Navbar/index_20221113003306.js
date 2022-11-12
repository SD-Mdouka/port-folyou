/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import IconHome from "./svgs/IconHome";
import IconAbout from "./svgs/IconAbout";
import IconWorks from "./svgs/IconWorks";
import IconContact from "./svgs/IconContact";
import "./style.css";
import IconOutMenu from "./svgs/IconOutMenu";
import IconInMenu from "./svgs/IconInMenu";

const Navbar = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => {
    setClick(!click);
    if (!click) {
      document.body.classList.add("hideScroll");
    } else {
      document.body.classList.remove("hideScroll");
    }
  };
  const Close = () => {
    setClick(false);
  };

  return (
    <div className="p-4">
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar w-full ml-4" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <span className="flex flex-row bg-transparent  rounded-xl">
                <span className="text-black mt-3 hidden-icon ml-2 text-[20px] text-bold lg:flex">
                  {click ? "" : <IconHome />}
                </span>
                <NavLink
                  exact
                  to="/"
                  className="nav-links mt-0.5"
                  onClick={() => Close()}
                >
                  Home
                </NavLink>
              </span>
            </li>
            <li className="nav-item">
              <span className="flex flex-row bg-transparent rounded-xl ">
                <span className="text-black hidden-icon mt-3 ml-2 text-[20px] text-bold lg:flex">
                  {click ? "" : <IconAbout />}
                </span>
                <NavLink
                  exact
                  to="/about"
                  activeClassName="active"
                  className="nav-links"
                  onClick={() => Close()}
                >
                  Profile
                </NavLink>
              </span>
            </li>
            <li className="nav-item">
              <span className="flex flex-row bg-transparent rounded-xl">
                <span className="text-black hidden-icon mt-3 ml-2 text-[20px] text-bold lg:flex">
                  {click ? "" : <IconWorks />}
                </span>
                <NavLink
                  exact
                  to="/works"
                  activeClassName="active"
                  className="nav-links"
                  onClick={() => Close()}
                >
                  Works
                </NavLink>
              </span>
            </li>
            <li className="nav-item">
              <span className="flex flex-row bg-transparent rounded-xl">
                <span className="text-black mt-3 ml-2 hidden-icon text-[20px] text-bold lg:flex">
                  {click ? "" : <IconContact />}
                </span>
                <NavLink
                  exact
                  to="/contact"
                  activeClassName="active"
                  className="nav-links"
                  onClick={() => Close()}
                >
                  Contact
                </NavLink>
              </span>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {!click ? <IconInMenu /> : <IconOutMenu />}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
