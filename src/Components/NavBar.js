import React, { useState } from "react";
import "./NavBar.css";
import { ReactComponent as Logo } from "../Images/IoThinc.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Menu } from "./menu.tsx";
import { ReactDimmer } from "react-dimmer";
import { Link, animateScroll as scroll } from "react-scroll";

const NAVITEMS = [
  {
    title: "Home",
    active: "",
  },
  {
    title: "About",
    active: "about",
  },
  {
    title: "Events",
    active: "events",
  },
  {
    title: "Gallery",
    active: "gallery",
  },
  {
    title: "Projects",
    active: "projects",
  },
  {
    title: "Board",
    active: "board",
  },
  {
    title: "Queries",
    active: "queries",
  },
];

const Navbar = () => {
  const [isMenuOpen, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prevState) => !prevState);
  };
  return (
    <>
      <scroll>
        <div className="header fixed">
          <GiHamburgerMenu className="menu-btn" onClick={handleMenu} />

          <div className="flex justify-center items-center mr-[46%] cursor-pointer">
          <Link to="Home"><Logo viewBox="0 0 80 60" className="w-[173px] h-[54]" /></Link>
          </div>
        </div>
        <div>content goes here</div>
      </scroll>
      <Menu isMenuOpen={isMenuOpen} />
      <ReactDimmer
        isOpen={isMenuOpen}
        exitDimmer={setMenu}
        zIndex={100}
        blur={1.5}
      />
    </>
  );
};

export default Navbar;

/*<div className="w-full h-[80px] bg-white flex justify-between px-[68px] py-[20px] fixed top-0 left-0 z-50">
            <div className="flex justify-center items-center mr-[40px] cursor-pointer">
              
              <Logo viewBox="0 0 126 60" className="w-[113px] h-[54]" />
            </div>
            <ul className="flex items-center gap-[40px] ml-[40px] mr-[80px]">
              {NAVITEMS.map((item, index) => (
                <li
                  className={
                    "text-[#202764] text-[18px] leading-[30px] cursor-pointer font-normal"
                  }
                  key={index}
                >
                  <Link
                    to={item.title}
                    activeClass="font-medium"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>*/
