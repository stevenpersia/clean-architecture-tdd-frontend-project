import { PokemonHandler } from "core/usecases/pokemon.handler";
import { PokemonDIFactory } from "core/configuration/pokemonDI.factory";

export const pokemonHandler: PokemonHandler = new PokemonHandler(
  PokemonDIFactory.pokemonLoader()
);
