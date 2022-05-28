import React, { useState, useEffect } from "react";

const Event = () => {
  return (
    <div className="App">
      <div className="pt-14  grid grid-row-2 md:grid-cols-2">
        <div className="">
          <p className="text-4xl text-white">Events</p>
          <p className="ml-3 md:ml-44 p-2 text-xl text-white">
            Don't forget to register on Vtop
          </p>
        </div>
        <div class="relative w-60 h-12 ml-40 ">
          <div class="absolute  right-0 flex  p-3 pointer-events-none border-l-2 border-black">
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
    </div>
  );
};

export default Event;
