import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const PersonajeIndividual = () => {

    const { id } = useParams()
    const { actions, store } = useContext(Context)

    useEffect(() => {
        actions.obtenerPersonajeDetails(id)
    }, [])

    console.log(store.character.name);
    return (
        <div className="text-center m-2">
            <div className="row">
                <div className="col-3">
                    <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="card-img-top" alt={name} />
                        <div className="card-body">
                            <h5 className="card-title">Name: {store.character.name}</h5>
                            <p className="card-text">Birth Year: {store.character.birth_year}</p>
                            <p className="card-text">Height: {store.character.height}</p>
                            <p className="card-text">Gender: {store.character.gender}</p>
                            <p className="card-text">Skin Color: {store.character.skin_color}</p>
                            <p className="card-text">Eyes Color: {store.character.eye_color}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};