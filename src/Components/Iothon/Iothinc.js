import React from "react";

import IoThinCLogo from "../../Images/Iothon/IoThinC-White.png";

import "./Iothinc.scss";

const Iothinc = () => {
  return (
    <section className="set-bg section section--about-us" id="about-us">
      <div className="content__wrapper">
        <h2 className="section__title">
          The association <br />
          behind IoThon
        </h2>
        <p className="about-us__subtitle">
          IoThinC is a non-profit student organization at VIT Vellore.
        </p>
        <div className="about-us__layout">
          <img
            data-markup-inline
            src={IoThinCLogo}
            alt=""
            className="about-us__logo"
          />

          <div className="card card--about-us">
            <p>
              An Emerging Technological Innovation. Internet of Things (IoT) is
              creating an environment of convergence in society. This technology
              environment brings a paradigm shift in our professional and
              personal life. The IoThinc Club is an initiative taken to
              encourage and master the students of the institute in the Internet
              of Things and related domains.
            </p>
            <p>
              The main idea is to develop new skills and help students to gain
              knowledge in the Internet of Things and also work on various
              related domains. This will also facilitate peer to peer learning
              among the students.
            </p>
            <a
              className="--about-us"
              href="https://iothinc.in/"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
            >
              <span className="btn red">Go to website</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Iothinc;
