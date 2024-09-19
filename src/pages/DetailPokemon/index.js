import './index.css';
import React, {useEffect, useState} from "react";
import {Link, useParams } from "react-router-dom";
import Pokedex from 'pokedex-promise-v2';


const DetailPokemon = () => {
    const {idPokemon} = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPokemon = async () => {
        try {
          const pokedex = new Pokedex();
          const response = await pokedex.getResource(`/api/v2/pokemon/${idPokemon}`);
          setPokemon(response);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        } 
      };
      getPokemon();
    }, [idPokemon]);

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
        {loading && <p>Loading...</p>}
        {!loading && !pokemon && <p>Pokemon not found 404</p>}
        <Link to="/">Volver</Link>
        </>
    );
};

export default DetailPokemon;