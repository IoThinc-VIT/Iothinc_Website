import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./Pages/About";
import Board from "./Pages/Board";
import Events from "./Pages/Events";
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Queries from "./Pages/Queries";
import NavBar from "./Components/NavBar"

function App() {

  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Events />
      <Projects />
      <Board />
      <Gallery />
      <Queries />
    </div>
  );
}

export default App;
