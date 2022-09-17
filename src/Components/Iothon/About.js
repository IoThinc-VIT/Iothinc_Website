import React from "react";

import { ReactComponent as OtherLogo } from "../../Images/Iothon/Logo-3B.svg";
import "./About.css";

const About = () => {
  return (
    <section
      className="set-bg section section--what-is-a-hackathon w-full"
      id="what-is-a-hackathon"
    >
      <div className="content__wrapper content__wrapper--what-is-a-hackathon max-w-[960px] w-[90%] mx-auto">
        <div
          className="card card--big card--mission flex flex-row gap-5"
          style={{ backgroundColor: "#000a2b" }}
        >
          <OtherLogo width="160px" height="160px" />
          <div className="text-white flex flex-col gap-5">
            <h2 className="card__title text-[2rem] font-bold">About IoThon</h2>
            <p
              className="card__text"
              style={{ fontSize: "clamp(16px,calc(14px + .4vw),18px)" }}
            >
              IoThon is the latest hackathon organised by IoThinC. It is a
              36-hour hackathon, starting from May 14. The five domains that
              will be covered are: Urban Innovation, Entertainment Tech,
              Development Tools/Robotics, Disaster and Public Safety, and Open
              Innovation.
            </p>
            <p
              className="card__text"
              style={{ fontSize: "clamp(16px,calc(14px + .4vw),18px)" }}
            >
              Teams as well as individual participations will be entertained.
              Get ready to strap yourself for a 2-day event of fun coding,
              interacting and more importantly, learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
