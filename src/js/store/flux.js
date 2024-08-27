const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			characters: [],
			planets: [],
			character: {},
			planet: {},
			
		},
		actions: {
			obtenerPersonajes: async () => {
				try {
					const response = await fetch('https://www.swapi.tech/api/people/')
					if (response.ok) {
						const data = await response.json()
						setStore({ characters: data.results })
					}
				}
				catch (error) {
					console.log(error);
				}
			},

			obtenerPlanetas: async () => {
				try {
					const response = await fetch('https://www.swapi.tech/api/planets/')
					if (response.ok) {
						const data = await response.json()
						setStore({ planets: data.results })
					}
				}
				catch (error) {
					console.log(error);
				}
			},

			obtenerPersonajeDetails: async (id) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/${id}`)
					if (response.ok) {
						const data = await response.json()
						setStore({ character: data.result.properties })
						console.log("Personaje individual correcto");
						
					}
				}
				catch (error) {
					console.log(error);
				}
			},

			obtenerPlanetaDetails: async (id) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
					if (response.ok) {
						const data = await response.json();
						if (data.result) {
							setStore({ planet: data.result.properties });
						} else {
							console.error("No se encontró el planeta.");
						}
					} else {
						console.error("Error en la respuesta de la API:", response.status);
					}
				} catch (error) {
					console.error("Error en la petición fetch:", error);
					setStore({ planet: null }); 
				}
			},
		}
	};
};

export default getState;
