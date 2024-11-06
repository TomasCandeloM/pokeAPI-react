import React from "react";
import SearchBox from '../components/SearchBox';
import PokemonCard from '../components/PokemonCard';
import Paginated from '../components/Paginated';
import '../pages/ListPokemon/index.css';

const ListPokemonPresentation = ({pokemons, loading, page, setPage, totalPages}) =>{
    return (
        <div className="App">
          <SearchBox />
          {loading && <p>Loading...</p>}
          <div className='pokedex'>
          {!loading && pokemons.map((pokemon, index) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
          </div>
          <Paginated page={page} setPage={setPage} total={totalPages}/>  
        </div>
      );
};

export default ListPokemonPresentation;