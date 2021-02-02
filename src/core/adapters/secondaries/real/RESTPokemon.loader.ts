import { PokemonLoader } from "core/domain/loaders/PokemonLoader";
import { Pokemon } from "core/domain/entities/pokemon";
import { PokemonDTO, PokemonPageDTO } from "./DTO/PokemonDTO";
import { PokemonMappers } from "./mappers/pokemon.mappers";
import { from, Observable } from "rxjs";
import axios from "axios";

export class RESTPokemonLoader implements PokemonLoader {
  all(): Observable<Pokemon[]> {
    const pokemons = axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
      .then((reponse) => {
        const pokemonPageDTO = reponse.data as PokemonPageDTO;
        return PokemonMappers.mapPageToPokemons(pokemonPageDTO);
      });

    return from(pokemons);
  }

  get(number: string): Observable<Pokemon> {
    const pokemon = axios
      .get(`https://pokeapi.co/api/v2/pokemon/${number}`)
      .then((reponse) => {
        const pokemonDTO = (reponse.data as unknown) as PokemonDTO;
        return PokemonMappers.mapToPokemon(pokemonDTO);
      });
    return from(pokemon);
  }
}
