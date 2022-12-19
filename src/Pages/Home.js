import React, { useState, useEffect } from "react";
import HomeImg from "./Home1.svg";
import "./Home.css";
const Home = () => {
  return (
    <div className="text-white flex flex-col items-center p-[52px] ">
      <img src={HomeImg} width="639" height="517" className="mb-[16px] mt-8 pt-4" />
      <p className="quote text-center">
        “If you think that the internet has changed your life, think again.
        <br/>&nbsp;&nbsp;The IoT is about to change it all over again!”
      </p>
      <p className="author">
        -Brendan O’Brien, Chief Architect & Co-Founder, Aria Systems
      </p>
    </div>
  );
};

export default Home;
