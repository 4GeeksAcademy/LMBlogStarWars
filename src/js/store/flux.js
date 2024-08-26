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
					const response = await fetch('https://www.swapi.tech/api/people/', {
					})
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

			obtenerFilms: async () => {
				try {
					const response = await fetch('https://www.swapi.tech/api/films/', {
					})
					if (response.ok) {
						const data = await response.json()
						setStore({ films: data.results })
					}
				}
				catch (error) {
					console.log(error);
					return false;
				}
			},

			obtenerPersonajeDetails: async (id) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/${id}`, {
						method: `GET`,
					})
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

			obtenerFilmDetails: async (id) => {
				try {
					const response = await fetch(`https://swapi.dev/api/planets/${id}`, {
						method: `GET`,
					})
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
