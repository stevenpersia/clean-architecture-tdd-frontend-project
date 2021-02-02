import { PokemonHandler } from "core/usecases/pokemon.handler";
import { Pokemon } from "core/domain/entities/pokemon";
import { PokemonBuilder } from "core/usecases/pokemon.builder";
import { PokemonLoader } from "core/domain/loaders/PokemonLoader";
import { RESTPokemonLoader } from "core/adapters/secondaries/real/RESTPokemon.loader";
import axios from "axios";
import {
  PokemonDTO,
  PokemonPageDTO,
} from "../../core/adapters/secondaries/real/DTO/PokemonDTO";

jest.mock("axios", () => Object.assign(jest.fn(), { get: jest.fn() }));

describe("Integration | REST pokemon loader fetches", () => {
  let fakePokemonPageResponse: { data: PokemonPageDTO };
  let fakePokemonResponse: { data: PokemonDTO };
  let pokemonHandler: PokemonHandler;
  let expectedSimplePokemon: Pokemon;
  let expectedPokemon: Pokemon;

  beforeEach(() => {
    fakePokemonPageResponse = {
      data: {
        count: 100,
        next: "next",
        previous: "next",
        results: [{ name: "pokemon", url: "pokemon" }],
      },
    };

    fakePokemonResponse = {
      data: {
        id: 1,
        name: "pokemon",
        sprites: {
          back_default: "avatar",
          back_female: "sprite",
          back_shiny: "sprite",
          back_shiny_female: "sprite",
          front_default: "avatar",
          front_female: "sprite",
          front_shiny: "sprite",
          front_shiny_female: "sprite",
          other: {
            dream_world: { front_default: "sprite", front_female: "sprite" },
            "official-artwork": {
              front_default: "sprite",
              front_female: "sprite",
            },
          },
        },
        height: 2,
        weight: 5,
        abilities: [],
        base_experience: 64,
        location_area_encounters: "location",
        forms: [],
        game_indices: [],
        held_items: [],
        is_default: true,
        moves: [],
        order: 1,
        species: { name: "pokemon", url: "pokemon" },
        stats: [],
        types: [
          { slot: 1, type: { name: "normal", url: "url" } },
          { slot: 2, type: { name: "feu", url: "url" } },
        ],
      },
    };

    expectedSimplePokemon = new PokemonBuilder()
      .withNumber("1")
      .withName("pokemon")
      .build();

    expectedPokemon = new PokemonBuilder()
      .withNumber("1")
      .withName("pokemon")
      .withDescription("normal, feu")
      .withAvatar("avatar")
      .withWeight(5)
      .withHeight(2)
      .build();

    const pokemonLoader: PokemonLoader = new RESTPokemonLoader();
    pokemonHandler = new PokemonHandler(pokemonLoader);
  });

  it("A list of pokemons", (done) => {
    (axios.get as jest.Mocked<any>).mockImplementationOnce(() => {
      return Promise.resolve(fakePokemonPageResponse);
    });

    const spy = jest.spyOn(axios as any, "get");

    pokemonHandler.all().subscribe((pokemons) => {
      expect(pokemons).toEqual([expectedSimplePokemon]);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(
        "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
      );

      done();
    });
  });

  it("A details of one pokemon", (done) => {
    (axios.get as jest.Mocked<any>).mockImplementationOnce(() => {
      return Promise.resolve(fakePokemonResponse);
    });

    const spy = jest.spyOn(axios as any, "get");

    pokemonHandler.get("1").subscribe((pokemon) => {
      expect(pokemon).toEqual(expectedPokemon);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(
        "https://pokeapi.co/api/v2/pokemon/1"
      );

      done();
    });
  });
});
