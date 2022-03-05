import React, { useState, useEffect } from 'react';
import HomeImg from "./Home1.svg"
import "./Home.css";

const Home = () => {
    return (
    <div className="App">
        <h1 className="text-3xl font-bold underline">
            Home
        </h1>

        <button className="bg-sky-600 hover:bg-sky-700">
            Save changes
        </button>

        <img src={HomeImg} />
    </div>);
}

export default Home;
