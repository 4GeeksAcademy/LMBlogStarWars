import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Personajes } from "../component/personajes.jsx";



export const CarruselPersonajes = () => {

    const { store, actions } = useContext(Context)

    
    useEffect(() => {
        actions.obtenerPersonajes();
    }, []);

    // Dividir los personajes en grupos de 4
    const groupCharacters = (characters, groupSize) => {
        let groups = [];
        for (let i = 0; i < characters.length; i += groupSize) {
            groups.push(characters.slice(i, i + groupSize));
        }
        return groups;
    };

    const characterGroups = groupCharacters(store.characters, 4);

    return (
        <div className="text-center mt-3">
            <div>
                <h1 className="fw-semibold text-info text-opacity-50">Characters</h1>
            </div>
            <div id="characterCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {characterGroups.map((group, index) => (
                        <div 
                            className={`carousel-item ${index === 0 ? "active" : ""}`} 
                            key={index}>
                            <div className="d-flex justify-content-center">
                                {group.map((item, subIndex) => (
                                    <Personajes
                                        key={subIndex}
                                        name={item.name}
                                        gender={item.gender}
                                        hair_color={item.hair_color}
                                        eye_color={item.eye_color}
                                        id={index * 4 + subIndex + 1}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <button 
                    className="carousel-control-prev" 
                    type="button" 
                    data-bs-target="#characterCarousel" 
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button 
                    className="carousel-control-next" 
                    type="button" 
                    data-bs-target="#characterCarousel" 
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};