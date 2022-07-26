import React from "react";
import event from "./../Images/event.png";
import logos_youtube from "./../Images/logos_youtube.png";
const EventCard = (props) => {
  return (
    <div className="bg-[#FFF7EC] rounded-lg mx-auto my-1 p-3 w-4/5 md:w-1/2 lg:my-4 md:mx-2 lg:w-1/4 ">
      <div className="grid place-content-center">
        <img src={props.image} alt="events" className="object-fill" />
      </div>
      <div className="text-left">
        <p className="font-bold">{props.title}</p>
        <p className="text-sm">{props.subtitle}</p>
        <hr className="w-5/6 mb-3 bg-black "></hr>
        <p className="text-xs mb-2  ">{props.des.slice(0,200)}...</p>
        <div className="flex flex-row gap-20">
          <div>
            <p className="font-bold">{props.date}</p>
            <p className="font-bold ">{props.time}</p>
          </div>
          {props.link && 
          <div>
            <a href={props.link} target="_blank"><img src={props.logo} width={40} /></a>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
