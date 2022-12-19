import React, { useState } from "react";
import "./NavBar.css";
import { ReactComponent as Logo } from "../Images/IoThinc.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { Component } from "react";

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
    <nav className="fixed w-full px-5 py-2 nav-color" >
      <div className="flex justify-between">
        <div className="logo-background">
          <Link
            to="Home"
            className="flex items-center px-2 cursor-pointer"
            activeClass="font-medium"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <Logo className="" />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-10">
          {NAVITEMS.map((item, index) => (
            <div
              key={index}
              className={
                "text-[#FFFFFF] text-[16px] lg:text-[18px] leading-[30px] cursor-pointer font-normal"
              }
            >
              <center>
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
              </center>
            </div>
          ))}
          <div
            className={
              "text-[#FFFFFF] text-[18px] leading-[30px] cursor-pointer font-bold"
            }
          >
            <center>
              <RouterLink to="/iothon">Iothon</RouterLink>
            </center>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="outline-none mobile-menu-button"
            onClick={handleMenu}
          >
            <svg
              className=" w-6 h-6 text-gray-500 hover:text-green-500 "
              x-show="!showMenu"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="mobile-menu">
          <ul className="ul">
            {NAVITEMS.map((item, index) => (
              <li
                className={
                  "text-[#202764] text-[18px] leading-[30px] cursor-pointer font-normal"
                }
                key={index}
              >
                <center>
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
                </center>
              </li>
            ))}
            <li
              className={
                "text-[#202764] text-[18px] leading-[30px] cursor-pointer font-bold"
              }
            >
              <center>
                <RouterLink to="/iothon">Iothon</RouterLink>
              </center>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
