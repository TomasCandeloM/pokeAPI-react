import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const PokemonCard = ({pokemon}) => {
    const navigate = useNavigate();

    const HandleClick = () => {
        navigate(`/detail/${pokemon.id}`);
    }


    return (
        <div class="card-P" onClick={HandleClick}>
        <div class="card-background-P">
            <div id = "image-P" style={{backgroundImage: `url(${pokemon.sprites.front_default})`, }}>
                <div class="number-P">#{pokemon.id}</div>
            </div>
            <div class="card-body-P">
                <div class="card-name-P">
                    <h3> {pokemon.name} </h3>
                    <h2> {pokemon.types[0].type.name} </h2>
                </div>
            </div>
        </div>
    </div>
    );
}

export default PokemonCard;