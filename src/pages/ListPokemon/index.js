import './index.css';
import React, { useState } from 'react';
import Pokedex from 'pokedex-promise-v2';
import SearchBox from '../../components/SearchBox';
import PokemonCard from '../../components/PokemonCard';
import Paginated from '../../components/Paginated';

import usePokemons from '../../hooks/usePokemons';
import {usePokemonContext} from '../../Context/pokemonctx';

const ListPokemon = () => {
    usePokemons();
    const {pokemons, loading, metadata: {total, limit}} = usePokemonContext();
    const [page, setPage] = useState(0);

    return (
      <div className="App">
        <SearchBox />
        {loading && <p>Loading...</p>}
        <div className='pokedex'>
        {!loading && pokemons.map((pokemon, index) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
        </div>
        <Paginated page={page} setPage={setPage} total={total/limit}/>  
      </div>
    );
  }

export default ListPokemon;

