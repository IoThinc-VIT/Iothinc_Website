import React from "react";
import { ReactComponent as IothonLogo } from "../../Images/Iothon/Logo-4B.svg";

import "./Header.css";

const Header = () => {
  return (
    <header
      className="set-bg section section--hero flex flex-col items-center my-20"
      id="hero"
    >
      <div className="title w-[90%] max-w-[360px]">
        <IothonLogo className="title__title" alt="iothon" />
      </div>

      <a
        href="https://www.iothincvit.in/"
        className=""
        role="button"
        data-ga-apply-button
        data-location="hero"
        data-role="hacker"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="btn red" style={{ minWidth: "145px", margin: "20px" }}>
          Apply now
        </span>
      </a>
    </header>
  );
};

export default Header;
