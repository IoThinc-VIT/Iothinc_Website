import React from "react";
import "./App.css";
import "./Pages/Query.css";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

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
    <div className="app">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="about" element={<About />} />
          <Route path="board" element={<Board />} />
          <Route path="event" element={<Events />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="home" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="queries" element={<Queries />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Queries/>
    </div>
  );
}

export default App;
