import React from "react";
import "./App.css";
import "./Pages/Query.css";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import { Element } from "react-scroll";

import About from "./Pages/About";
import Board from "./Pages/Board";
import Events from "./Pages/Events";
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Queries from "./Pages/Queries";
import NavBar from "./Components/NavBar";

import background from "./Images/Background.svg";

function App() {
  return (
    <div
      className="app"
      style={{
        backgroundImage: background,
      }}
    >
      <NavBar />

      <Element name="Home">
        <Home />
      </Element>
      <Element name="About">
        <About />
      </Element>
      <Element name="Events">
        <Events />
      </Element>
      <Element name="Gallery">
        <Gallery />
      </Element>
      <Element name="Projects">
        <Projects />
      </Element>
      <Element name="Board">
        <Board />
      </Element>
      <Element name="Queries">
        <Queries />
      </Element>
    </div>
  );
}

export default App;
/*<NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} T />
          <Route path="/board" element={<Board />} />
          <Route path="/event" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/queries" element={<Queries />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

      <Link className={`text-[#202764] text-[18px] leading-[30px] cursor-pointer ${
        item.active === active ? "font-medium" : "font-normal"
      }`}
        to="home"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >Home</Link>
      <Link className={`text-[#202764] text-[18px] leading-[30px] cursor-pointer ${
        item.active === active ? "font-medium" : "font-normal"
      }`}
        to="about"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >About</Link>
      <Link className={`text-[#202764] text-[18px] leading-[30px] cursor-pointer ${
        item.active === active ? "font-medium" : "font-normal"
      }`}
        to="board"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >Board</Link>
      <Link className={`text-[#202764] text-[18px] leading-[30px] cursor-pointer ${
        item.active === active ? "font-medium" : "font-normal"
      }`}
        to="event"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >Event</Link>
      <Link className={`text-[#202764] text-[18px] leading-[30px] cursor-pointer ${
        item.active === active ? "font-medium" : "font-normal"
      }`}
        to="gallery"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >Gallery</Link>
      <Link className={`text-[#202764] text-[18px] leading-[30px] cursor-pointer ${
        item.active === active ? "font-medium" : "font-normal"
      }`}
        to="projects"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >Projects</Link>
      <Link className={`text-[#202764] text-[18px] leading-[30px] cursor-pointer ${
                  item.active === active ? "font-medium" : "font-normal"
                }`}
        to="queries"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >Queries</Link>
*/
