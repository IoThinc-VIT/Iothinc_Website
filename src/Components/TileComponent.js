import * as React from "react";
import Instagram from "./../Images/insta.png";
import Linkedin from "./../Images/linked.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const TileComponent = (props) => {
  return (
    <div className="mt-4 md:mx-4 mx-auto">
      <div className={" h-80 w-80 rounded-t-lg"}>
        <div className="h-full w-full z-10">
          
          <LazyLoadImage
            alt={props.designation}
            className="h-full w-full"
            src={props.img}
            
          />
        </div>
      </div>
      <div className="bg-white font-lato flex flex-col justify-center items-center gap-4 p-6 w-80 h-auto rounded-b-lg">
        <div className="text-2xl text-black font-roboto">
          {props.designation}
        </div>
        <div
          className={"font-bold tracking-wide text-2xl text-board-text-1"}
        >
          {props.name}
        </div>
        <div className="flex flex-row gap-6 justify-center items-center">
          {props.insta && (
            <a href={props.insta} target="_blank">
              <img src={Instagram} height="40" width="40"></img>
            </a>
          )}
          <a href={props.linkedin} target="_blank">
            <img src={Linkedin} height="40" width="40"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TileComponent;
