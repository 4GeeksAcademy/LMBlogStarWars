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
					return false;
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
					return false;
				}
			},

			obtenerPersonajeDetails: async (id) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/${id}`)
					if (response.ok) {
						const data = await response.json()
						setStore({ character: data })
					}
				}
				catch (error) {
					console.log(error);
					return false;
				}
			},

			obtenerPlanetaDetails: async (id) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/planets/${id}`)
					if (response.ok) {
						const data = await response.json()
						setStore({ planet: data })
					}
				}
				catch (error) {
					console.log(error);
					return false;
				}
			},
		}
	};
};

export default getState;
