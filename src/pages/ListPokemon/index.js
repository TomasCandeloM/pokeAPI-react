import './index.css';
import React, { useState, useEffect, useCallback } from 'react';
import Pokedex from 'pokedex-promise-v2';
import SearchBox from '../../components/SearchBox';
import PokemonCard from '../../components/PokemonCard';
import Paginated from '../../components/Paginated';

const interval = {
    limit: 150,
    offset: 0,
    };

  const total = 1025;

const ListPokemon = () => {
    const [pokemons, setPokemons] = useState([]);
    const [searched, setSearched] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);


    const handleSearch = (search) => {  
        const filtered = pokemons.filter((pokemon) => {return pokemon.name.includes(search)});
        setSearched(filtered);
    }

    const fetchPokemons = useCallback(async () => {
        setLoading(true);
        const pokedex = new Pokedex();
        const response = await pokedex.getPokemonsList({ ...interval, offset: page * interval.limit });
        const urls = response.results.map((pokemon) => pokemon.url);
        const PokemonsResponse = await pokedex.getResource(urls);
        setPokemons(PokemonsResponse);
        setSearched(PokemonsResponse);
        setLoading(false);
    }, [page, setPokemons, setSearched]);

    // eslint-disable-next-line no-undef
    useEffect(() => {
        fetchPokemons();
    }, [fetchPokemons]);

    return (
      <div className="App">
        <SearchBox onSearch={handleSearch} />
        {loading && <p>Loading...</p>}
        <div className='pokedex'>
        {!loading && searched.map((pokemon, index) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
        </div>
        <Paginated page={page} setPage={setPage} total={total/interval.limit} />
      </div>
    );
  }

export default ListPokemon;

