import React from "react";
import "./Projects.css";
import { AiOutlineSearch } from "react-icons/ai";
import Card from "../Components/Card";

const Projects = () => {
  return (
    <div className="container-projects">
      <div className="header">
        <div id="head">
          <h1 id="project-heading">Projects, Blogs</h1>
          <p id="content"> Know what we do as a club</p>
        </div>
        <div id="search-div">
          <input id="search-input" type={"text"} placeholder="Search..." />
          <button id="search-btn">
            <AiOutlineSearch />
          </button>
        </div>
      </div>
      <div id="card-holder">
        <Card
          title={"Project"}
          content={
            "Occaecat culpa cupidatat Lorem et labore occaecat incididunt. Occaecat culpa cupidatat Lorem et labore occaecat incididunt. Occaecat culpa cupidatat Lorem et labore occaecat incididunt."
          }
          topic={"Nodejs, Express "}
          knowMore={"https://www.google.com"}
        />
        <Card
          title={"Blogs"}
          content={
            "Occaecat culpa cupidatat Lorem et labore occaecat incididunt. Occaecat culpa cupidatat Lorem et labore occaecat incididunt. Occaecat culpa cupidatat Lorem et labore occaecat incididunt."
          }
          topic={"Hackathons, Sleepovers, New tech "}
          knowMore={"https://www.google.com"}
        />
      </div>
    </div>
  );
};

export default Projects;

// AiOutlineSearch
