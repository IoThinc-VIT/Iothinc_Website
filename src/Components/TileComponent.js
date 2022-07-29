import * as React from "react";
import Instagram from "./../Images/instagram.png";
import Linkedin from "./../Images/Linkedin.png";

const TileComponent = (props) => {
  return (
    <div className="mt-4 md:mx-4 mx-auto">
      <div className={props.backgroundDef + " h-80 w-80 rounded-t-lg"}>
        <div className="h-full w-full z-10">
          <img
            src={props.img}
            className="h-full w-full"
            alt={props.designation}
          />
        </div>
      </div>
      <div className="bg-white font-lato flex flex-col justify-center items-center gap-4 p-6 w-80 h-auto rounded-b-lg">
        <div className="text-3xl text-black font-roboto">
          {props.designation}
        </div>
        <div
          className={"font-bold tracking-wide text-2xl " + props.textColorDef}
        >
          {props.name}
        </div>
        <div className="flex flex-row gap-6 justify-center items-center">
          {props.insta && (
            <a href={props.insta} target="_blank">
              <img src={Instagram} height="30" width="30"></img>
            </a>
          )}
          <a href={props.linkedin} target="_blank">
            <img src={Linkedin} height="30" width="30"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TileComponent;
