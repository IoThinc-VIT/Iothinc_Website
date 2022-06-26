import React, { useState } from "react";

import { ReactComponent as Logo } from "../Images/IoThinc.svg";

const NAVITEMS = [
  {
    title: "Home",
    active: "home",
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
  const [active, setActive] = useState("home");

  return (
    <>
      <div className="w-full h-[80px]"></div>
      <div className="w-full h-[80px] bg-white flex justify-between px-[68px] py-[20px] fixed top-0 left-0 z-50">
        <div className="flex justify-center items-center mr-[40px] cursor-pointer">
          {/* LOGO */}
          <Logo viewBox="0 0 126 60" className="w-[113px] h-[54]" />
        </div>
        <ul className="flex items-center gap-[40px] ml-[40px] mr-[80px]">
          {NAVITEMS &&
            NAVITEMS.map((item, index) => (
              <li
                key={index}
                className={`text-[#202764] text-[18px] leading-[30px] cursor-pointer ${
                  item.active === active ? "font-medium" : "font-normal"
                }`}
                onClick={() => {
                  setActive(item.active);
                }}
              >
                {item.title}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
