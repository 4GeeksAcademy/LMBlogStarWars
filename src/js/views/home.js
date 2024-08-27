import React from "react";

import "../../styles/home.css";
import { CarruselPersonajes } from "./carruselPersonajes.jsx";
import { CarruselPlanetas } from "./carruselPlanetas.jsx";

export const Home = () => {
	return(
		<div className="container-fluid bg-black">
		<CarruselPersonajes />
		<CarruselPlanetas />
	</div>
	)
};
	
