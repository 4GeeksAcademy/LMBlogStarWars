import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Planetas = ({ name, id }) => {

    const { store, actions } = useContext(Context)

    const isFavorite = (favoriteName) => {
        if(store.favoritesList.includes(favoriteName)) {
            return true
        }
        return false
    }

    return (
        <div className="text-center m-2">
        <div className="row">
            <div className="col-3">
                <div className="card bg-black text-secondary border border-info" style={{ width: "18rem", flex: "none", margin: "10px" }}>
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="card-img-top" alt={name} />
                    <div className="card-body">
                        <h5 className="card-title">Name: {name}</h5>
                        <div className="d-flex justify-content-center">
                            <Link to={`/planeta/${id}`}>
                            <button className="btn btn-outline-primary mx-auto">
                                Learn more!
                            </button>
                            </Link>
                            <button type="button" onClick={() => actions.agregarFavoritesList(name)} className="btn btn-outline-primary">
                                <i className={isFavorite(name) ? "fa fa-heart text-danger" : "fa fa-heart"}></i>
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};