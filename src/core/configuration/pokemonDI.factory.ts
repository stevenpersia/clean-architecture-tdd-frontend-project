import { PokemonLoader } from "core/domain/loaders/PokemonLoader";
import { RESTPokemonLoader } from "core/adapters/secondaries/real/RESTPokemon.loader";
import { Pokemon } from "core/domain/entities/pokemon";
import { PokemonBuilder } from "core/usecases/pokemon.builder";
import { InMemoryPokemonLoader } from "core/adapters/secondaries/inmemory/InMemoryPokemon.loader";

export class PokemonDIFactory {
  static pokemonLoader(): PokemonLoader {
    switch (process.env.REACT_APP_SOURCE) {
      case "rest":
        return new RESTPokemonLoader();

      default:
        const pika: Pokemon = new PokemonBuilder()
          .withName("pikachu")
          .withNumber("25")
          .withDescription("electric")
          .withWeight(3)
          .withHeight(5)
          .withAvatar(
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          )
          .build();

        const salameche: Pokemon = new PokemonBuilder()
          .withName("charmander")
          .withNumber("4")
          .withWeight(2)
          .withHeight(3)
          .withDescription("fire")
          .withAvatar(
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
          )
          .build();

        const mew: Pokemon = new PokemonBuilder()
          .withName("mewtwo")
          .withNumber("151")
          .withWeight(5)
          .withHeight(6)
          .withDescription("psy")
          .withAvatar(
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
          )
          .build();

        return new InMemoryPokemonLoader([pika, salameche, mew]);
    }
  }
}
