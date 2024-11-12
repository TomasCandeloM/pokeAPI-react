import React, { useEffect, useState } from "react";
import '../pages/ListPokemon/index.css';

const ListPokemonPresentation = ({ pokemons, loading, page, setPage, totalPages }) => {
    // Estados para cargar los componentes de forma dinámica
    const [SearchBox, setSearchBox] = useState(null);
    const [PokemonCard, setPokemonCard] = useState(null);
    const [Paginated, setPaginated] = useState(null);

    useEffect(() => {
        // Cargar dinámicamente SearchBox
        import('../components/SearchBox').then((module) => {
            setSearchBox(() => module.default);
        });
        // Cargar dinámicamente PokemonCard
        import('../components/PokemonCard').then((module) => {
            setPokemonCard(() => module.default);
        });
        // Cargar dinámicamente Paginated
        import('../components/Paginated').then((module) => {
            setPaginated(() => module.default);
        });
    }, []);

    // Asegurarse de que todos los componentes estén cargados antes de renderizar
    if (!SearchBox || !PokemonCard || !Paginated) {
        return <p>Loading components...</p>;
    }

    return (
        <div className="App">
            <SearchBox />
            {loading && <p>Loading...</p>}
            <div className="pokedex">
                {!loading && pokemons.map((pokemon, index) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
            <Paginated page={page} setPage={setPage} total={totalPages} />
        </div>
    );
};

export default ListPokemonPresentation;
