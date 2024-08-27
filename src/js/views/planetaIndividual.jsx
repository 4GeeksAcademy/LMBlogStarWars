import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const PlanetaIndividual = () => {
    const { id } = useParams();
    const { actions, store } = useContext(Context);

    useEffect(() => {
        actions.obtenerPlanetaDetails(id);
    }, [id, actions]); // Asegurarse de que se ejecute cada vez que cambie el ID

    // Verificar si los datos del planeta están cargados
    if (!store.planet.name) {
        return <div>Loading...</div>; // Puedes personalizar este mensaje o usar un spinner
    }
    
    return (
        <>
        <div className="text-center m-2">
            <div className="row">
                <div className="col-3">
                    <div className="card" style={{ width: "18rem", flex:"none", margin:"10px" }}>
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="card-img-top" alt={name} />
                        <div className="card-body">
                            <h5 className="card-title">Name: {store.planet.name}</h5>
                            <p className="card-text">Climate: {store.planet.climate}</p>
                            <p className="card-text">Population: {store.planet.population}</p>
                            <p className="card-text">Orbital Period: {store.planet.orbital_period}</p>
                            <p className="card-text">Rotation Period: {store.planet.rotation_period}</p>
                            <p className="card-text">Diameter: {store.planet.diameter}</p>                                                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
</>

    )
};