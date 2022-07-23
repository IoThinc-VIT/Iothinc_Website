import React from "react";
import "./Projects.css";
import { AiOutlineSearch } from "react-icons/ai";
import Card from "../Components/Card";

const Projects = () => {
  return (
    <div className="container-projects">
      <div className="header">
        <div id="head">
          <h1 id="project-heading">Projects & Blogs</h1>
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
          title={"Supplychain QC"}
          content={
            "supplychain simulation using iot and blockchain"
          }
          topic={"Node-Red,Solidity,Web3py,Fastapi"}
          knowMore={"https://github.com/IoThinc-VIT/SupplychainQCEvent"}
        />
        <Card
          title={"Alexa Projects"}
          content={
            "This repository contains code examples for getting started with Alexa Voice Service(AVS) with HTTP endpoint."
          }
          topic={"Alexa Voice Service,IOT "}
          knowMore={"https://github.com/IoThinc-VIT/Alexa-Projects"}
        />
        <Card
          title={"Blogs"}
          content={
            "Occaecat culpa cupidatat Lorem et labore occaecat incididunt."
          }
          topic={"Hackathons, Sleepovers, New tech "}
          knowMore={"https://medium.com/iothincvit"}
        />
      </div>
    </div>
  );
};

export default Projects;

// AiOutlineSearch
