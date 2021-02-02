import { PokemonBuilder } from "core/usecases/pokemon.builder";

export class StubPokemonBuilder extends PokemonBuilder {
  protected _number: string = "1";
  protected _name: string = "Pikachu";
  protected _description: string = "Lorem ipsum";
  protected _weight: number = 1;
  protected _height: number = 1;
  protected _avatar: string = "avatar";
}
