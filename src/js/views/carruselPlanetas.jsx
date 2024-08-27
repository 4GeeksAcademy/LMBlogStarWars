import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Planetas } from "../component/planetas.jsx";

export const CarruselPlanetas = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.obtenerPlanetas();
    }, []);

    // Dividir los planetas en grupos de 4
    const groupPlanets = (planets, groupSize) => {
        let groups = [];
        for (let i = 0; i < planets.length; i += groupSize) {
            groups.push(planets.slice(i, i + groupSize));
        }
        return groups;
    };

    const planetGroups = groupPlanets(store.planets, 4);

    return (
        <div className="text-center mt-3">
            <div>
                <h1 className="fw-semibold text-info text-opacity-50">Planets</h1>
            </div>
            <div id="planetCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {planetGroups.map((group, index) => (
                        <div 
                            className={`carousel-item ${index === 0 ? "active" : ""}`} 
                            key={index}>
                            <div className="d-flex justify-content-center">
                                {group.map((item, subIndex) => (
                                    <Planetas
                                        key={subIndex}
                                        name={item.name}
                                        population={item.population}
                                        terrain={item.terrain}
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
                    data-bs-target="#planetCarousel" 
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button 
                    className="carousel-control-next" 
                    type="button" 
                    data-bs-target="#planetCarousel" 
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};