import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Personajes } from "../component/personajes.jsx";



export const CarruselPersonajes = () => {

    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.obtenerPersonajes()
    }, [])
    console.log(store.characters);
    return (
        <div className="text-center">
            <div>
                <h1 className="fw-semibold text-info text-opacity-50">Characters</h1>
            </div>
            <div className="card-group">
                <div className="d-flex flex-row overflow-scroll">
                    {store.characters.map((item, index) => (
                        <Personajes
                            key={index}
                            name={item.name}
                            gender={item.gender}
                            hair_color={item.hair_color}
                            eye_color={item.eye_color}
                            id={index + 1}
                        />
                    ))}
                </div>
            </div>
        </div>
    )

};