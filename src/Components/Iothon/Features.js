import React from "react";

import "./Features.css";

const Features = () => {
  return (
    <section className="w-full">
      <div
        className="container-02 row"
        style={{
          backgroundColor: "rosybrown",
          overflowX: "hidden",
          textAlign: "center",
        }}
      >
        <div className="glassmorphic-card col-sm-8">
          <div className="contentBox">
            <h3>Mentors</h3>
            <p>
              We will assign qualified mentors to assist you in overcoming any
              difficulties you may encounter during the event and bringing your
              unique ideas to life.
            </p>
          </div>
        </div>

        <div className="glassmorphic-card">
          <div className="contentBox">
            <h3>Refreshments</h3>
            <p>
              We will provide free refreshments to all participants throughout
              the night to keep your energy levels up and motivate you
              throughout the event.
            </p>
          </div>
        </div>
        <div className="glassmorphic-card">
          <div className="contentBox">
            <h3>Industry Experts</h3>
            <p>
              An opportunity to interact in person with top industry experts who
              will be flying down to campus to meet all of you.
            </p>
          </div>
        </div>
        <div className="glassmorphic-card">
          <div className="contentBox">
            <h3>Speaker</h3>
            <p>
              Speaker sessions with industry experts to enlighten us with their
              knowledge and experience in the field of electronics and IoT.
            </p>
          </div>
        </div>
        <div className="glassmorphic-card">
          <div className="contentBox">
            <h3>Giveaways</h3>
            <p>
              Throughout the event, there will be exciting giveaways and prizes
              to be won.
            </p>
          </div>
        </div>
        <div className="glassmorphic-card">
          <div className="contentBox">
            <h3>Tracks</h3>
            <p>
              The Event tracks are Urban Innovation, Disaster and public safety,
              Open Innovation, Robotics, Healthcare
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
