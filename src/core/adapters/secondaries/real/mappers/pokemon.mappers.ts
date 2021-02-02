import {
  PokemonDTO,
  PokemonPageDTO,
  PokemonSimpleDTO,
} from "../DTO/PokemonDTO";
import { PokemonBuilder } from "core/usecases/pokemon.builder";
import { Pokemon } from "core/domain/entities/pokemon";

export class PokemonMappers {
  static mapToPokemon(pokemonDTO: PokemonDTO): Pokemon {
    return new PokemonBuilder()
      .withNumber(pokemonDTO.id.toString())
      .withName(pokemonDTO.name)
      .withDescription(pokemonDTO.types.map((t) => t.type.name).join(", "))
      .withHeight(pokemonDTO.height.valueOf())
      .withWeight(pokemonDTO.weight.valueOf())
      .withAvatar(pokemonDTO.sprites.front_default)
      .build();
  }

  static mapPageToPokemons(pokemonPageDTO: PokemonPageDTO): Pokemon[] {
    return pokemonPageDTO.results.map(
      (pokemonDTO: PokemonSimpleDTO, index: number) => {
        return new PokemonBuilder()
          .withName(pokemonDTO.name)
          .withNumber((index + 1).toString())
          .build();
      }
    );
  }
}
