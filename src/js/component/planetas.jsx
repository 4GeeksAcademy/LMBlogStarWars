import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Planetas = ({ title, director, producer, release_date, id }) => {

    const { store, actions } = useContext(Context)

    return (
        <div className="text-center m-2">
        <div className="row">
            <div className="col-3">
                <div className="card bg-black text-secondary border border-info" style={{ width: "18rem", flex: "none", margin: "10px" }}>
                    <img src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`} className="card-img-top" alt={name} />
                    <div className="card-body">
                        <h5 className="card-title">Name: {title}</h5>
                        <p className="card-text">Director: {director}</p>
                        <p className="card-text">Producer: {producer}</p>
                        <p className="card-text">Relase date: {release_date}</p>
                        <div className="d-flex  justify-content-between">
                            <button className="btn btn-outline-primary float-start">
                                Learn more!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};