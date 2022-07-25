import React, { useState } from "react";
import "./NavBar.css";
import { ReactComponent as Logo } from "../Images/IoThinc.svg";
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

  const btn = document.querySelector("button.mobile-menu-button");
  const menu = document.querySelector(".mobile-menu");

  //SOME ERROR IN THE COMMENTED CODE:

  /*btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });*/

  return (
    <>
      <div className="fixed w-full">
        <nav className="bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-7">
                <div>
                  <a href="#" className="flex items-center py-4 px-2">
                    <Logo className="w-[173px] h-[54]" />
                  </a>
                </div>
                <div class="hidden md:flex items-center space-x-10">
                  {NAVITEMS.map((item, index) => (
                    <div
                      className={
                        "text-[#202764] text-[18px] leading-[30px] cursor-pointer font-normal"
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
                </div>
              </div>

              <div className="md:hidden flex items-center">
                <button className="outline-none mobile-menu-button">
                  <svg
                    className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                    x-show="!showMenu"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="hidden mobile-menu">
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
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
