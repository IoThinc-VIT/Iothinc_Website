import React, { useState, useEffect } from "react";
import EventCard from "../Components/EventCard";
import logos_youtube from "./../Images/logos_youtube.png";
import watson from "././../Images/watson.jpeg";
import IOTprotocol from "./../Images/IOT protocol.jpeg";
import qualityweek from "./../Images/qualityweek.jpeg"
const Event = () => {
  return (
    <div className="App ">
      <div className="justify-center pt-5 grid grid-row-2 md:grid-cols-2 ">
        <div className="md:ml-44">
          <p className="text-centre md:text-left text-5xl text-white">Events</p>
          <p className="text-centre md:text-left text-lg text-white">
            Don't forget to register on Vtop
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-2 md:flex-row  place-content-center ">
        <EventCard
          title="Introduction to IoT Protocols and ThingSpeak."
          image={IOTprotocol}
          subtitle=""
          des="Across the globe, billions of devices are today communicating and exchanging data with each other, thanks to the Internet of Things (IoT).
          IoT communication protocols protect and ensure security to the data being exchanged between these devices.
          An open-source software written in Ruby which allows users to communicate with internet enabled devices? Yes you heard that right! ThingSpeak is more than that, It facilitates data access, retrieval and logging of data by providing an API to both the devices and social network website"
          date="Date: 05-07-2022"
          time=""
          logo={logos_youtube}
          link=""
        />
        <EventCard
          title="Quality Control in Supply Chain using IoT and Blockchain"
          image={qualityweek}
          subtitle=""
          des="Wait a second. Blockchain in supply chain? Yes, you read that right! Maintaining quality throughout the supply chain is essential for a successful business but did you know you can improve its security as well? We will be showing how something as simple as quality control can be elevated using emerging technologies like IoT and Blockchain.
          "
          date="Date: 25-02-22"
          time=""
          logo={logos_youtube}
          link="https://youtu.be/-JY6DthMW20"
        />
        <EventCard
          title="Introduction to IBM Watson IoT Platform"
          image={watson}
          subtitle=""
          des="This is a paragraph with more information about something important.
          This something has many uses and is made of 100% recycled
          material.This is a paragraph with more information about something
          important. This something has many uses and is made of 100% recycled
          material."
          date="Date: 24-11-2021"
          time=""
          logo={logos_youtube}
          link="https://youtu.be/Xa00p0VuofY"
        />
      </div>
    </div>
  );
};

export default Event;
