import './index.css';
import React, { useState, useEffect } from 'react';
import Pokedex from 'pokedex-promise-v2';
import { useNavigate } from 'react-router-dom';

const interval = {
    limit: 150,
    offset: 0,
    };


const ListPokemon = () => {
    const [pokemons, setPokemons] = useState([]);
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/detail/${id}`);
    }

    // eslint-disable-next-line no-undef
    useEffect(() => {
        const getPokemons = async () => {
          const pokedex = new Pokedex();
          const response = await pokedex.getPokemonsList(interval)
          const urls = response.results.map((pokemon) => pokemon.url);
          const PokemonsResponse = await pokedex.getResource(urls);
          setPokemons(PokemonsResponse);
      };
      getPokemons();
    }, []);
    return (
      <div className="App">
        <div className='pokedex'>
        {pokemons.map((pokemon, index) => (
            <div className='pokemon' onClick={() => handleClick(pokemon.id)}>
              <h3>{pokemon.name}</h3>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <p>Height: {pokemon.height}</p>
            </div>
        ))}
        </div>
      </div>
    );
  }

export default ListPokemon;

