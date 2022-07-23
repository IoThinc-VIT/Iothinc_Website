import * as React from "react";
import { ReactComponent as Logo } from "../Images/IoThinc.svg";
import { Link, animateScroll as scroll } from "react-scroll";

interface IMenuProps {
  isMenuOpen: boolean;
}
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
export const Menu = ({ isMenuOpen }: IMenuProps) => {
  return (
    <div className={`app-menu ${isMenuOpen ? "menu-open" : ""}`}>
      <ul className="ul">
        <div className="mr-[40px] cursor-pointer">
          <Logo viewBox="0 0 80 60" className="w-[173px] h-[54]" />
        </div>
        <br></br>
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
            <br></br>
          </li>
        ))}
      </ul>
    </div>
  );
};
