import React, { useEffect, useState, lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";
import "../pages/ListPokemon/index.css";

const LazySearchBox = lazy(() => import("../components/SearchBox"));
const LazyPaginated = lazy(() => import("../components/Paginated"));

const ListPokemonPresentation = ({
  pokemons,
  loading,
  page,
  setPage,
  totalPages,
}) => {
  const [PokemonCard, setPokemonCard] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView && !PokemonCard) {
      import("../components/PokemonCard").then((module) => {
        setPokemonCard(() => module.default);
      });
    }
  }, [inView, PokemonCard]);

  return (
    <div className="App">
      <Suspense fallback={<p>Loading SearchBox...</p>}>
        <LazySearchBox />
      </Suspense>
      {loading && <p>Loading...</p>}
      <div className="pokedex">
        {!loading &&
          pokemons.map((pokemon) => (
            <div key={pokemon.id} ref={ref} className="pokemon">
              <Suspense fallback={<p>Loading PokemonCard...</p>}>
                {React.createElement(
                  React.lazy(() => import("../components/PokemonCard")),
                  { pokemon }
                )}
              </Suspense>
            </div>
          ))}
      </div>

      <Suspense fallback={<p>Loading Paginated...</p>}>
        <LazyPaginated page={page} setPage={setPage} total={totalPages} />
      </Suspense>
    </div>
  );
};

export default ListPokemonPresentation;
