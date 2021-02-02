import { Observable } from "rxjs";
import { PokemonLoader } from "core/domain/loaders/PokemonLoader";
import { Pokemon } from "core/domain/entities/pokemon";

export class PokemonHandler {
  constructor(private pokemonSource: PokemonLoader) {}

  all(): Observable<Pokemon[]> {
    return this.pokemonSource.all();
  }

  get(number: string): Observable<Pokemon> {
    return this.pokemonSource.get(number);
  }
}
