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
				<div className="flex flex-col justify-start items-start gap-6 pb-12 font-satoshi">
					<div className="text-6xl font-bold text-white">Meet the board</div>
					<div className="text-3xl text-white">
						The people who bring life to this club
					</div>
				</div>
				<div className="flex flex-col gap-24 p-12 font-jost">
					<div className="flex flex-row gap-24 justify-center items-center">
						<TileComponent
							img={FacultyCoordinator}
							backgroundDef="bg-board-bg-1"
							textColorDef="text-board-text-1"
							svgFill="#8E8ED6"
							designation="Faculty Coordinator"
							name="Prof. Sujatha R"
						/>
						<TileComponent
							img={Chairperson}
							backgroundDef="bg-board-bg-2"
							textColorDef="text-board-text-2"
							svgFill="#8ED6B2"
							designation="Chairperson"
							name="Aravindaan S"
						/>
						<TileComponent
							img={ViceChairperson}
							backgroundDef="bg-board-bg-3"
							textColorDef="text-board-text-3"
							svgFill="#8EC4D6"
							designation="Vice Chairperson"
							name="Aditya Choudhary"
						/>
					</div>
					<div className="flex flex-row gap-24 justify-center items-center">
						<TileComponent
							img={Secretary}
							backgroundDef="bg-board-bg-4"
							textColorDef="text-board-text-4"
							svgFill="#D6A08E"
							designation="Secretary"
							name="Swastik Shukla"
						/>

						<TileComponent
							img={CoSecretary}
							backgroundDef="bg-board-bg-5"
							textColorDef="text-board-text-5"
							svgFill="#C8898C"
							designation="Co Secretary"
							name="Vishwa Shah"
						/>

						<TileComponent
							img={TechnicalHead}
							backgroundDef="bg-board-bg-6"
							textColorDef="text-board-text-6"
							svgFill="#D6D68E"
							designation="Technical Head"
							name="Hemendra S"
						/>
					</div>
					<div className="flex flex-row gap-24 justify-center items-center">
						<TileComponent
							img={DesignHead}
							backgroundDef="bg-board-bg-1"
							textColorDef="text-board-text-1"
							svgFill="#8E8ED6"
							designation="Design Head"
							name="Hem Prasath"
						/>

						<TileComponent
							img={PublicityHead}
							backgroundDef="bg-board-bg-2"
							textColorDef="text-board-text-2"
							svgFill="#8ED6B2"
							designation="Publicity Head"
							name="Mehul Rana"
						/>

						<TileComponent
							img={ManagementHead}
							backgroundDef="bg-board-bg-3"
							textColorDef="text-board-text-3"
							svgFill="#8EC4D6"
							designation="Management Head"
							name="Rohan P Surya"
						/>
					</div>
					<div className="flex flex-row gap-24 justify-center items-center">
						<TileComponent
							img={ProjectHead}
							backgroundDef="bg-board-bg-4"
							textColorDef="text-board-text-4"
							svgFill="#D6A08E"
							designation="Project Head"
							name="Hari V"
						/>

						<TileComponent
							img={FinanceHead}
							backgroundDef="bg-board-bg-6"
							textColorDef="text-board-text-6"
							svgFill="#D6D68E"
							designation="Finance Head"
							name="Vikram Aditya"
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
