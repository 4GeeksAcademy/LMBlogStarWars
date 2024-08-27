import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";


import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Home } from "./views/home";
import { Personajes } from "./component/personajes";
import { Planetas } from "./component/planetas";
import { PersonajeIndividual } from "./views/personajeIndividual";
import { PlanetaIndividual } from "./views/planetaIndividual";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/personajes" element={<Personajes/>} />
						<Route path="/planetas" element={<Planetas/>} />
						<Route path="/personajes/:id" element={<PersonajeIndividual />} />
						<Route path="/planeta/:id" element={<PlanetaIndividual/>} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
