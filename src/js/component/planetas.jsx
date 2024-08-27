import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Planetas = ({ name, id }) => {

    const { store, actions } = useContext(Context)

    return (
        <div className="text-center m-2">
        <div className="row">
            <div className="col-3">
                <div className="card bg-black text-secondary border border-info" style={{ width: "18rem", flex: "none", margin: "10px" }}>
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="card-img-top" alt={name} />
                    <div className="card-body">
                        <h5 className="card-title">Name: {name}</h5>
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