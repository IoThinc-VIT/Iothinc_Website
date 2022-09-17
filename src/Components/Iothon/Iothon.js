import React, { useEffect } from "react";

import "./Iothon.css";
import About from "./About";
import Header from "./Header";
import Sample from "./Sample";

const Iothon = () => {
  return (
    <div className="flex flex-col">
      {/* <Sample /> */}
      <Header />
      <main>
        <About />
      </main>
    </div>
  );
};

export default Iothon;
