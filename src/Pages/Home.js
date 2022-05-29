import React, { useState, useEffect } from "react";
import HomeImg from "./Home1.svg";

const Home = () => {
  return (
    <div className="bg-[#060622] text-white flex flex-col items-center p-[52px]">
      <img src={HomeImg} className="mb-[16px]" />
      <p className="mx-[44px] mb-[10px] text-[#FFF7EC] text-[36px] font-[700] font-['Satoshi'] leading-[40px]">
        “If you think that the internet has changed your life, think again.
        <br></br>The IoT is about to change it all over again!”
      </p>
      <p className="mb-[32px] text-[#FFF7EC] text-[22px] font-[500] font-['Satoshi'] leading-[30px]">
        -Brendan O’Brien, Chief Architect & Co-Founder, Aria Systems
      </p>
      <button className="px-[48px] py-[20px] text-[#000000] bg-[#FFF7EC] text-[30px] font-[700] font-['Satoshi'] leading-[41px] rounded-[10px]">
        Supply Chain Using IoT
      </button>
    </div>
  );
};

export default Home;
