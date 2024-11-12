import React, { useEffect, useState } from "react";

const DetailPokemonPresentation = ({ pokemon, loading }) => {
    const [Link, setLink] = useState(null);
    const [stylesLoaded, setStylesLoaded] = useState(false);

    useEffect(() => {

        import("react-router-dom").then((module) => {
            setLink(() => module.Link);
        });

        import("../pages/DetailPokemon/index.css").then(() => {
            setStylesLoaded(true);
        });
    }, []);

    if (loading) return <p>Loading....</p>;
    if (!Link || !stylesLoaded) return <p>Loading components...</p>;

    return (
        <>
            {!loading && pokemon && (
                <div className="card">
                    <div className="card-background">
                        <div
                            id="image"
                            style={{ backgroundImage: `url(${pokemon.sprites.front_default})` }}
                        >
                            <div className="number">#{pokemon.id}</div>
                        </div>
                        <div className="card-body">
                            <div className="card-name">
                                <h3>{pokemon.name}</h3>
                                <h2>{pokemon.types[0].type.name}</h2>
                            </div>
                            <div className="stats">
                                <div className="stat-item">HP:
                                    <div className="value">{pokemon.stats[0].base_stat}</div>
                                </div>
                                <div className="stat-item">CP:
                                    <div className="value">{pokemon.stats[1].base_stat}</div>
                                </div>
                                <div className="stat-item">W:
                                    <div className="value">{pokemon.weight}kg</div>
                                </div>
                                <div className="stat-item">H:
                                    <div className="value">{pokemon.height}m</div>
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

