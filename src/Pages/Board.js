import React from "react";

import TileComponent from "../Components/TileComponent";

import FacultyCoordinator from "./../Images/faculty_coordinator.png";
import Chairperson from "./../Images/chairperson.png";
import CoSecretary from "./../Images/co-secretary.png";
import DesignHead from "./../Images/design-head.png";
import FinanceHead from "./../Images/finance-head.png";
import ManagementHead from "./../Images/management-head.png";
import ProjectHead from "./../Images/project-head.png";
import PublicityHead from "./../Images/publicity-head.png";
import Secretary from "./../Images/secretary.png";
import TechnicalHead from "./../Images/technical-head.png";
import ViceChairperson from "./../Images/vice-chairperson.png";

const Board = () => {
  return (
    <div className="App">
      <div className="bg-background-solid p-12 min-h-screen min-w-screen">
        <div className="flex flex-col justify-start items-start gap-6 font-satoshi">
          <div className="text-6xl font-bold text-white text-center">Meet the board</div>
          <div className="text-3xl text-white text-center">
            The people who bring life to this club
          </div>
        </div>
        <div className="flex flex-col md:gap-24 p-12 font-jost">
          <div className="md:flex justify-center items-center md:flex">
            <TileComponent
              img={FacultyCoordinator}
              backgroundDef="bg-board-bg-1"
              textColorDef="text-board-text-1"
              svgFill="#8E8ED6"
              designation="Faculty Coordinator"
              name="Prof. Sujatha R"
              insta="@sujathar"
              linkedin="https://www.linkedin.com/in/sujathar/"
            />
            <TileComponent
              img={Chairperson}
              backgroundDef="bg-board-bg-2"
              textColorDef="text-board-text-2"
              svgFill="#8ED6B2"
              designation="Chairperson"
              name="Aravindaan S"
              insta="https://www.instagram.com/aravindaan_777/"
              linkedin="https://www.linkedin.com/in/aravindaan-s-91a955110/"
            />
            <TileComponent
              img={ViceChairperson}
              backgroundDef="bg-board-bg-3"
              textColorDef="text-board-text-3"
              svgFill="#8EC4D6"
              designation="Vice Chairperson"
              name="Aditya Choudhary"
              insta="https://www.instagram.com/aditya.choudhary.11/?hl=en"
              linkedin="https://www.linkedin.com/in/aditya-choudhary-138a1a122"
            />
          </div>
          <div className="md:flex justify-center items-center">
            <TileComponent
              img={Secretary}
              backgroundDef="bg-board-bg-4"
              textColorDef="text-board-text-4"
              svgFill="#D6A08E"
              designation="Secretary"
              name="Swastik Shukla"
              insta="https://www.instagram.com/4th_swastik/?hl=en"
              linkedin="https://www.linkedin.com/in/swastik0411/"
            />

            <TileComponent
              img={CoSecretary}
              backgroundDef="bg-board-bg-5"
              textColorDef="text-board-text-5"
              svgFill="#C8898C"
              designation="Co Secretary"
              name="Vishwa Shah"
              insta="https://www.instagram.com/vishwa_187/?hl=en"
              linkedin="https://www.linkedin.com/in/vishwa-shah-tech/"
            />

            <TileComponent
              img={TechnicalHead}
              backgroundDef="bg-board-bg-6"
              textColorDef="text-board-text-6"
              svgFill="#D6D68E"
              designation="Technical Head"
              name="Hemendra S"
              insta="https://www.instagram.com/hemendra__04/?hl=en"
              linkedin="https://www.linkedin.com/in/hemendrasharma04/"
            />
          </div>
          <div className="md:flex justify-center items-center">
            <TileComponent
              img={DesignHead}
              backgroundDef="bg-board-bg-1"
              textColorDef="text-board-text-1"
              svgFill="#8E8ED6"
              designation="Design Head"
              name="Hem Prasath"
              insta="https://instagram.com/hem.prasath11?igshid=YmMyMTA2M2Y="
              linkedin="https://www.linkedin.com/in/hem-prasath-k-98528918b/"
            />

            <TileComponent
              img={PublicityHead}
              backgroundDef="bg-board-bg-2"
              textColorDef="text-board-text-2"
              svgFill="#8ED6B2"
              designation="Publicity Head"
              name="Mehul Rana"
              insta="https://www.instagram.com/mehul_rana05/?hl=en"
              linkedin="https://www.linkedin.com/in/mehul-rana-996046197"
            />

            <TileComponent
              img={ManagementHead}
              backgroundDef="bg-board-bg-3"
              textColorDef="text-board-text-3"
              svgFill="#8EC4D6"
              designation="Management Head"
              name="Rohan P Surya"
              insta=""
              linkedin=""
            />
          </div>
          <div className="md:flex justify-center items-center">
            <TileComponent
              img={ProjectHead}
              backgroundDef="bg-board-bg-4"
              textColorDef="text-board-text-4"
              svgFill="#D6A08E"
              designation="Project Head"
              name="Hari V"
              insta=""
              linkedin=""
            />

            <TileComponent
              img={FinanceHead}
              backgroundDef="bg-board-bg-6"
              textColorDef="text-board-text-6"
              svgFill="#D6D68E"
              designation="Finance Head"
              name="Vikram Aditya"
              insta="https://www.instagram.com/_vikram.adhitya_/?hl=en"
              linkedin="https://www.linkedin.com/in/vikram-adhitya-8400451a2/"
            />
          </div>
        </div>

        {/*<h1 className="text-3xl font-bold underline text-white">Board</h1>

	<button className="bg-sky-600 hover:bg-sky-700">Save changes</button>*/}
      </div>
    </div>
  );
};

export default Board;
