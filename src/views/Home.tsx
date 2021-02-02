import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Pokemon } from "core/domain/entities/pokemon";
import { pokemonHandler } from "core/adapters/primaries/pokemon.module";

const Home = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const history = useHistory();

  useEffect(() => {
    pokemonHandler.all().subscribe((pokemons) => setPokemons(pokemons));
  }, []);

  return (
    <div className="grid">
      {pokemons.map((pokemon) => (
        <div
          className="card"
          onClick={() => history.push(`/${pokemon.number}`)}
        >
          <h2>
            #{pokemon.number} {pokemon.name}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Home;
