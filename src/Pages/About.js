import React, { useState, useEffect } from "react";
import AboutImg from "../Images/about.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="mask-outer">
      <div className="container">
        <div className="left">
          <h1 style={{ color: "white" }} id="about-head" className=" font">
            About Us
          </h1>
          <p id="about-content" className="text-justify">
          We, the Internet of Things Community or IoThinc are a student-run technical club at Vellore Institute of Technology, Vellore. We strive to teach students to acquire new skills in the rapidly evolving technology. The club's mission is to expose students to challenges and advancements in the field of IoT and thus to nurture and develop skillsets in this arena. We aim to increase awareness of the opportunities presented by IoT as a growing concept to provide a social platform for IoT enthusiasts to network and connect with experts within the field and to encourage students for the same.
          </p>
        </div>
        <div className="right pl-10">
          <img id="about-img" src={AboutImg}/>
        </div>
      </div>
    </div>
  );
};

export default About;
