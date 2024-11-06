import React from "react";
import { Link } from "react-router-dom";
import '../pages/DetailPokemon/index.css';

const DetailPokemonPresentation = ({pokemon, loading}) =>{
    if (loading) return <p>Loading....</p>

    return (
        <>
        {!loading && pokemon && (
            <div class="card">
                <div class="card-background">
                    <div id = "image" style={{backgroundImage: `url(${pokemon.sprites.front_default})`, }}>
                        <div class="number">#{pokemon.id}</div>
                    </div>
                    <div class="card-body">
                        <div class="card-name">
                            <h3> {pokemon.name} </h3>
                            <h2> {pokemon.types[0].type.name} </h2>
                        </div>
                        <div class="stats">
                            <div class="stat-item">HP:
                                <div class="value"> {pokemon.stats[0].base_stat}</div>
                            </div>
                            <div class="stat-item">CP:
                                <div class="value"> {pokemon.stats[1].base_stat}</div>
                            </div>
                            <div class="stat-item">W:
                                <div class="value"> {pokemon.weight}kg</div>
                            </div>
                            <div class="stat-item">H:
                                <div class="value"> {pokemon.height}m</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        )}
        <Link to="/">Volver</Link>
        </>
    );

};

export default DetailPokemonPresentation;
