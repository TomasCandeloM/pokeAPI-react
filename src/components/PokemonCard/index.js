import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const PokemonCard = ({pokemon}) => {
    const navigate = useNavigate();

    const HandleClick = () => {
        navigate(`/detail/${pokemon.id}`);
    }


    return (
        <div className="card-P" onClick={HandleClick}>
        <div className="card-background-P">
            <div id = "image-P" style={{backgroundImage: `url(${pokemon.sprites.front_default})`, }}>
                <div className="number-P">#{pokemon.id}</div>
            </div>
            <div className="card-body-P">
                <div classN="card-name-P">
                    <h3> {pokemon.name} </h3>
                    <h2> {pokemon.types[0].type.name} </h2>
                </div>
            </div>
        </div>
    </div>
    );
}

export default PokemonCard;