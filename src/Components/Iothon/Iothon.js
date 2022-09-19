import React, { useEffect } from "react";

import "./Iothon.css";
import About from "./About";
import Header from "./Header";
import Features from "./Features";
import Live from "./Live";
import HowTo from "./HowTo";
import Faq from "./Faq";
import Social from "./Social";
import Timeline from "./Timeline";
import Sponsor from "./Sponsor";
import Iothinc from "./Iothinc";
import Footer from "./Footer";

import Sample from "./Sample";
import Form from "./Form";

const Iothon = () => {
  return (
    <div className="flex flex-col">
      {/* <Sample /> */}
      <Header />
      <main>
        <About />
        <Features />
        <HowTo />
        {/* <Form /> */}
        <Timeline />
        <Live />
        <Faq />
        <Social />
        {/* <Sponsor /> */}
        <Iothinc />
        <Footer />
      </main>
    </div>
  );
};

export default Iothon;
