import { useCallback, useEffect } from "react";
import { usePokemonDispatch } from "../Context/pokemonctx";
import { actions } from "../Context/pokemonReducer";
import { useFiltersContext } from "../Context/filtersCtx";
import { usePokemonContext } from "../Context/pokemonctx";
import Pokedex from "pokedex-promise-v2";

const usePokemons = () => {
    const dispatch = usePokemonDispatch();
    const { filters } = useFiltersContext();
    const { metadata } = usePokemonContext();
    const pokedex = new Pokedex();

    const fetchAllPagesPokemons = async () => {
        let allPokemons = [];
        let offset = 0;
        let hasMore = true;

        while (hasMore) {
            const response = await pokedex.getPokemonsList({ limit: metadata.limit, offset });
            allPokemons = [...allPokemons, ...response.results];
            
            offset += metadata.limit;
            hasMore = response.results.length > 0;
        }

        return allPokemons;
    };


    const fetchPokemons = useCallback(async () => {
        dispatch({ type: actions.SET_LOADING, payload: true });
        try {
            if (filters.search) {
                const allPokemons = await fetchAllPagesPokemons();

                const filteredResponse = allPokemons.filter((p) =>
                    p.name.replace("-"," ").startsWith(filters.search.replace("-"," "))
                );

                if (filteredResponse.length > 0) {
                    const urls = filteredResponse.map((pokemon) => pokemon.url);
                    const PokemonsResponse = await pokedex.getResource(urls);
                    dispatch({ type: actions.SET_POKEMONS, payload: PokemonsResponse });
                } else {
                    dispatch({ type: actions.SET_POKEMONS, payload: [] });
                }
            } else {
                const response = await pokedex.getPokemonsList({
                    limit: metadata.limit,
                    offset: filters.page * metadata.limit,
                });
                const urls = response.results.map((pokemon) => pokemon.url);
                const PokemonsResponse = await pokedex.getResource(urls);
                dispatch({ type: actions.SET_POKEMONS, payload: PokemonsResponse });
            }
        } catch (error) {
            console.error("Error fetching Pokemons: ", error);
            dispatch({ type: actions.SET_POKEMONS, payload: [] });
        }

        dispatch({ type: actions.SET_LOADING, payload: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, filters, metadata]);

    useEffect(() => {
        fetchPokemons();
    }, [fetchPokemons]);

};

export default usePokemons;