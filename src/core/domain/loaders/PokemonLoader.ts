import { Observable } from "rxjs";
import { Pokemon } from "core/domain/entities/pokemon";

export interface PokemonLoader {
  all(): Observable<Pokemon[]>;

  get(number: string): Observable<Pokemon>;
}
