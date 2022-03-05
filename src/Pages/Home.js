import React, { useState, useEffect } from 'react';
import HomeImg from "../Images/Home1.svg";
import "./Home.css";

const Home = (props) => {
    return (
        <div id='home'
            className="home section">
            <h1 className="text-white text-3xl font-bold underline">
                Home
            </h1>
            <img src={HomeImg} />
        </div>
    );
}

export default Home;
