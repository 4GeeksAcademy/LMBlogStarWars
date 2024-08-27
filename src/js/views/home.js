import React from "react";

import "../../styles/home.css";
import { CarruselPersonajes } from "./carruselPersonajes";
import { CarruselPlanetas } from "./carruselPlanetas";

export const Home = () => {
	return(
		<div className="container-fluid bg-black">
		<CarruselPersonajes />
		<CarruselPlanetas />
	</div>
	)
};
	
