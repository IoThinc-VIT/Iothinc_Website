import React, { useState, useEffect } from "react";
import HomeImg from "./Home1.svg";
import "./Home.css";
const Home = () => {
  return (
    <div className="text-white flex flex-col items-center p-[52px] ">
      <img src={HomeImg} className="mb-[16px] mt-8" />
      <p className="quote text-left">
        “If you think that the internet has changed your life, think again.
        <br/>The IoT is about to change it all over again!”
      </p>
      <p className="author">
        -Brendan O’Brien, Chief Architect & Co-Founder, Aria Systems
      </p>
    </div>
  );
};

export default Home;
