import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { pokemonHandler } from "core/adapters/primaries/pokemon.module";
import { Pokemon } from "core/domain/entities/pokemon";

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const { number = "" }: { number: string } = useParams();
  const history = useHistory();

  useEffect(() => {
    pokemonHandler.get(number).subscribe((pokemon) => setPokemon(pokemon));
  }, [number]);

  return (
    <div
      className="card"
      onClick={() => history.push(`/`)}
      style={{ maxWidth: 600, margin: "0 auto" }}
    >
      <img alt={pokemon?.name} src={pokemon?.avatar} />
      <h2>
        #{pokemon?.number} <br /> {pokemon?.name}
      </h2>
      <ul>
        <li>Weight: {pokemon?.weight}</li>
        <li>Height: {pokemon?.height}</li>
        <li>Type: {pokemon?.description}</li>
      </ul>
    </div>
  );
};

export default PokemonDetails;
