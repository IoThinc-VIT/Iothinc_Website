import React from "react";
import "./Board.css"
import TileComponent from "../Components/TileComponent";

import FacultyCoordinator from "./../Images/Prof.jpg";
import Chairperson from "./../Images/Aravindaan s.jpg";
import CoSecretary from "./../Images/vishwa shah.jpg";
import DesignHead from "./../Images/hem prasath.jpg";
import FinanceHead from "./../Images/vikram adhitya.jpg";
import ManagementHead from "./../Images/rohan pon.jpg";
import ProjectHead from "./../Images/hari v.jpg";
import PublicityHead from "./../Images/mehul rana.jpg";
import Secretary from "./../Images/swastik shukla.jpg";
import TechnicalHead from "./../Images/hemendra sharma.jpg";
import ViceChairperson from "./../Images/Adita choudhary.jpg";

const Board = () => {
  return (
    <div className="App">
      <div className="bg-background-solid p-12 min-h-screen min-w-screen">
        <div className="flex flex-col justify-start items-start gap-6 font-satoshi">
          <div className="text-6xl font-bold text-white text-center">
            Meet the board
          </div>
          <div className="text-3xl text-white text-center mb-5">
            The people who bring life to this club
          </div>
        </div>
        <div className="flex flex-col md:gap-5 font-jost">
          <center>
          <div className="md:flex justify-center items-center md:flex">
              <TileComponent
                img={FacultyCoordinator}
                svgFill="#8E8ED6"
                designation="Faculty Coordinator"
                name="Prof. Sujatha R"
                insta=""
                linkedin="https://www.linkedin.com/in/dr-sujatha-rajkumar-840914164"
              />
              <TileComponent
                img={Chairperson}
                svgFill="#8ED6B2"
                designation="Chairperson"
                name="Aravindaan S"
                insta="https://www.instagram.com/aravindaan_777/"
                linkedin="https://www.linkedin.com/in/aravindaan-s-91a955110/"
              />
              <TileComponent
                img={ViceChairperson}
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
                svgFill="#D6A08E"
                designation="Secretary"
                name="Swastik Shukla"
                insta="https://www.instagram.com/4th_swastik/?hl=en"
                linkedin="https://www.linkedin.com/in/swastik0411/"
              />
              <TileComponent
                img={CoSecretary}
                svgFill="#C8898C"
                designation="Co Secretary"
                name="Vishwa Shah"
                insta="https://www.instagram.com/vishwa_187/?hl=en"
                linkedin="https://www.linkedin.com/in/vishwa-shah-tech/"
              />

              <TileComponent
                img={TechnicalHead}
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
                svgFill="#8E8ED6"
                designation="Design Head"
                name="Hem Prasath"
                insta="https://instagram.com/hem.prasath11?igshid=YmMyMTA2M2Y="
                linkedin="https://www.linkedin.com/in/hem-prasath-k-98528918b/"
              />
              <TileComponent
                img={PublicityHead}
                svgFill="#8ED6B2"
                designation="Publicity Head"
                name="Mehul Rana"
                insta="https://www.instagram.com/mehul_rana05/?hl=en"
                linkedin="https://www.linkedin.com/in/mehul-rana-996046197"
              />

              <TileComponent
                img={ManagementHead}
                svgFill="#8EC4D6"
                designation="Management Head"
                name="Rohan P Surya"
                insta="https://www.instagram.com/_.rogueone._/?hl=en"
                linkedin="https://linkedin.com/in/rohan-pon-surya-murugan-823605209"
              />
               
            </div>
            <div className="md:flex justify-center items-center">
            <TileComponent
                img={ProjectHead}
                svgFill="#D6A08E"
                designation="Project Head"
                name="Hari V"
                insta="https://www.instagram.com/_hari_venkat/?hl=en"
                linkedin="https://linkedin.com/in/hari-venkatesan-3198b91a3"
              />
              <TileComponent
                img={FinanceHead}
                svgFill="#D6D68E"
                designation="Finance Head"
                name="Vikram Aditya"
                insta="https://www.instagram.com/_vikram.adhitya_/?hl=en"
                linkedin="https://www.linkedin.com/in/vikram-adhitya-8400451a2/"
              />
            </div>
          </center>
        </div>

        {/*<h1 className="text-3xl font-bold underline text-white">Board</h1>

	<button className="bg-sky-600 hover:bg-sky-700">Save changes</button>*/}
      </div>
    </div>
  );
};

export default Board;
