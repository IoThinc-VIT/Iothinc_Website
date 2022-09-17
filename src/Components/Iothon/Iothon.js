import React, { useEffect } from "react";

import "./Iothon.css";
import About from "./About";
import Header from "./Header";
import Sample from "./Sample";
import Features from "./Features";
import Live from "./Live";
import HowTo from "./HowTo";
import Faq from "./Faq";
import "./faq.ts";
import Social from "./Social";
import Timeline from "./Timeline";

const Iothon = () => {
  return (
    <div className="flex flex-col">
      {/* <Sample /> */}
      <Header />
      <main>
        <About />
        <Features />
        <Live />
        <HowTo />
        <Faq />
        <Social />
        <Timeline />
      </main>
    </div>
  );
};

export default Iothon;
