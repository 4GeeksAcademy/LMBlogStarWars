import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Films } from "../component/films.jsx";



export const CarruselFilms = () => {

    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.obtenerFilms()
    }, [])

    return (
        <div className="text-center mt-3">
            <div>
                <h1 className="fw-semibold text-info text-opacity-50">Films</h1>
            </div>
            <div className="card-group">
                <div className="d-flex flex-row overflow-scroll">
                    {store.films.map((item, index) => (
                        <Films
                            key={index}
                            title={item.title}
                            director={item.director}
                            producer={item.producer}
                            relase_date={item.relase_date}
                            id={index + 1}
                        />
                    ))}
                </div>
            </div>
        </div>
    )

};