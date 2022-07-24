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
        <div class="relative w-56 h-10 mx-auto md:ml-44 ">
          <div class="absolute right-0 flex  p-3 pointer-events-none border-l-2 border-black">
            <svg
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            datepicker
            datepicker-title="Flowbite datepicker"
            type="text"
            class="bg-gray-50 border border-black border-2 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500  block w-full pl-10 p-2.5   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 "
            placeholder="Search events..."
          />
        </div>
      </div>
      <div class="flex flex-col mt-2 md:flex-row  place-content-center ">
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
        />
      </div>
    </div>
  );
};

export default Event;
