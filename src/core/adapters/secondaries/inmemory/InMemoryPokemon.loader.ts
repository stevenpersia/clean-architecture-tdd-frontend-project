import { PokemonLoader } from "core/domain/loaders/PokemonLoader";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { Pokemon } from "core/domain/entities/pokemon";
import { map } from "rxjs/operators";

export class InMemoryPokemonLoader implements PokemonLoader {
  private pokemons$: Subject<Pokemon[]> = new BehaviorSubject(this.pokemons);

  constructor(private pokemons: Pokemon[]) {}

  all(): Observable<Pokemon[]> {
    return this.pokemons$;
  }

  get(number: string): Observable<Pokemon> {
    return this.pokemons$.pipe(
      map(
        (pokemons) => pokemons.filter((pokemon) => pokemon.number === number)[0]
      )
    );
  }
}
