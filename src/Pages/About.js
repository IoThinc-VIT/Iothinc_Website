import React, { useState, useEffect } from 'react';
import AboutImg from "../Images/about.png"
import "./About.css"

const About = () => {
    return (
    <div className="mask-outer">
        <div className='container' style={{ height:"100vh"}}>
            <div className='left'>
                <h1 style={{color:"white"}} id="about-head" className=" font">About</h1>
                <p id='about-content'>
                    The Internet of Things is the next big thing in the industry. From connecting basic devices in your house to heralding the dawn of the Industry 4.0, IoT will be playing a major roles in the future. 
Here at IoThinC, the Internet of Things Commmunity of VIT Vellore, we discover the nitigrities of Internet of Things through exciting discussions, events and interactions. Other than that we also conduct IoT based competitions which allow you learn and apply your acquired knowledge in real world problems. 
Join us now and connect yourself!
                </p>
            </div>
            <div className='right'>
                <img id='about-img' src={AboutImg} />
            </div>
        </div>

        {/* <button className="bg-sky-600 hover:bg-sky-700">
            Save changes
        </button> */}
    </div> );
}

 
export default About;

