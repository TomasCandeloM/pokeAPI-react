import React, { useState } from 'react';
import usePokemons from '../../hooks/usePokemons';
import {usePokemonContext} from '../../Context/pokemonctx';
import ListPokemonPresentation from '../../presentational/ListPokemon';

const ListPokemon = () => {
    usePokemons();
    const {pokemons, loading, metadata: {total, limit}} = usePokemonContext();
    const [page, setPage] = useState(0);

    const totalPages = Math.ceil(total/limit);

    return (
      
      <ListPokemonPresentation 
          pokemons={pokemons}
          loading={loading}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
      />
    );
  };

export default ListPokemon;

