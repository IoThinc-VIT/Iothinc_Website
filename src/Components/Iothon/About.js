import React from "react";

import OtherLogoSrc from "../../Images/Iothon/Logo-3B.svg";
import "./About.scss";

const About = () => {
  return (
    <section
      className="set-bg section section--what-is-a-hackathon"
      id="what-is-a-hackathon"
    >
      <div className="content__wrapper content__wrapper--what-is-a-hackathon max-w-[960px] w-[90%] mx-auto">
        <div
          className="card card--big card--outline card--mission flex flex-row gap-5"
          style={{ backgroundColor: "#000a2b" }}
        >
          <img
            src={OtherLogoSrc}
            className="w-[160px] h-[160px]"
            alt="Iothon Logo"
          />
          <div className="text-left flex flex-col gap-5">
            <h2 className="card__title text-[2rem] font-bold">About IoThon</h2>
            <p className="card__text">
              IoThon is a 48-hour hackathon in which teams compete to create the
              most feasible and unique solutions to real-world problems. We
              welcome participants of all levels of experience because we will
              be providing support and mentoring throughout the event to assist
              you with your project.
            </p>
            <p>
              Come join us this Gravitas for an incredible learning and hands-on
              experience, make a difference, and win amazing cash and exciting
              prizes!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
