import React, { useState, useEffect } from "react";
import AboutImg from "../Images/about.png";
import "./About.css";

const About = () => {
  return (
    <div className="mask-outer">
      <div className="container" style={{ height: "100vh" }}>
        <div className="left">
          <h1 style={{ color: "white" }} id="about-head" className=" font">
            About
          </h1>
          <p id="about-content">
          We, the Internet of Things Community or IoThinc are a student-run technical club at Vellore Institute of Technology, Vellore. We strive to teach students to acquire new skills in the rapidly evolving technology. The club's mission is to expose students to challenges and advancements in the field of IoT and thus to nurture and develop skillsets in this arena. We aim to increase awareness of the opportunities presented by IoT as a growing concept to provide a social platform for IoT enthusiasts to network and connect with experts within the field and to encourage students for the same.
          </p>
        </div>
        <div className="right">
          <img id="about-img" src={AboutImg} />
        </div>
      </div>

      {/* <button className="bg-sky-600 hover:bg-sky-700">
            Save changes
        </button> */}
    </div>
  );
};

export default About;
