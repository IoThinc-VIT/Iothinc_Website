import React from "react";
import "./Projects.css";
import { AiOutlineSearch } from "react-icons/ai";
import Card from "../Components/Card";
import smarthome from "../Images/Smart Home-1.jpg"
import robothand from "../Images/robothand.jpg"
import obsrobot from "../Images/obsrobot.jpg"




const Projects = () => {
  return (
    <div className="App ">
            <div className=" pt-5 grid grid-row-2 md:grid-cols-2 ">
        <div className="md:ml-44">
          <p className=" md:text-left text-5xl text-white">Projects & Blogs</p>
          <p className="md:text-left text-lg text-white">
          Know what we do as a club
          </p>
        </div>
      </div>
  






    
        <div className="flex flex-col mt-2 md:flex-row  place-content-center ">
      <Card
          title={"Smart Glove for Paralysis Patients"}
          image={robothand}
          content={
            "In this project, hand motions are converted into electrical impulses that are delivered to a "+
            "micro-controller, which would then translate the signals into commands or alphabets."
          }
          topic={"Flex Sensors, ESP32, IFTTT Webhooks"}
          
        />
        <Card
          title={"Smart Home Platform"}
          image={smarthome}
          content={
            "A Web App that will help users setup and configure their smart home through an interactive UI."
          }
          topic={"NextJS, Antdesign(UI), PostgreSQL, Arduino"}
          knowMore={"https://github.com/IoThinc-VIT/smartplatform"}
        />
      <Card
          title={"Coordinate Tracing, Obstacle Avoidance Robot"}
          image={obsrobot}
          content={
            "This project demonstrates a robotic unit that is programmed to find an optimal path to its"+
            " destination and simultaneously avoid obstacles on the way."
          }
          topic={"Arduino MEGA, Path-finding, Servos, Ultrasonic Sensor"}
          
        />
        </div> 
        <div className="flex flex-col mt-2 md:flex-row  place-content-center ">
        <Card
          title={"Supplychain QC"}
          content={
            "Supplychain simulation using IOT and blockchain"
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
            "Read our blogs and know about our club and its activities"
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
