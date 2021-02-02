import { PokemonHandler } from "core/usecases/pokemon.handler";
import { PokemonLoader } from "core/domain/loaders/PokemonLoader";
import { InMemoryPokemonLoader } from "core/adapters/secondaries/inmemory/InMemoryPokemon.loader";
import { Pokemon } from "core/domain/entities/pokemon";
import { StubPokemonBuilder } from "./stubs/stubPokemon.builder";

describe("Pokemon handler fetches", () => {
  let pikachu: Pokemon;
  let salameche: Pokemon;

  beforeEach(() => {
    pikachu = new StubPokemonBuilder()
      .withNumber("1")
      .withName("Pikachu")
      .build();

    salameche = new StubPokemonBuilder()
      .withNumber("2")
      .withName("Salameche")
      .build();
  });

  describe("A list", () => {
    it("With zero pokemon if there is no pokemon in the source", (done) => {
      const pokemonHandler = createPokemonHandler([]);

      pokemonHandler.all().subscribe((pokemons) => {
        verifyListOfPokemons(pokemons, []);
        done();
      });
    });

    it("With one pokemon if there is one pokemon in the source", (done) => {
      const pokemonHandler = createPokemonHandler([pikachu]);

      pokemonHandler.all().subscribe((pokemons) => {
        verifyListOfPokemons(pokemons, [pikachu]);
        done();
      });
    });

    it("With two pokemons if there are two pokemons in the source", (done) => {
      const pokemonHandler = createPokemonHandler([pikachu, salameche]);

      pokemonHandler.all().subscribe((pokemons) => {
        verifyListOfPokemons(pokemons, [pikachu, salameche]);
        done();
      });
    });
  });

  it("A details of one pokemon", (done) => {
    const pokemonHandler = createPokemonHandler([pikachu, salameche]);

    pokemonHandler.get("2").subscribe((pokemon) => {
      verifyOnePokemon(pokemon, salameche);
      done();
    });
  });

  function createPokemonHandler(pokemonPopulation: Pokemon[]) {
    const pokemonSource: PokemonLoader = new InMemoryPokemonLoader(
      pokemonPopulation
    );
    return new PokemonHandler(pokemonSource);
  }

  function verifyOnePokemon(pokemon: Pokemon, expectedPokemon: Pokemon) {
    expect(pokemon.number).toEqual(expectedPokemon.number);
    expect(pokemon.name).toEqual(expectedPokemon.name);
    expect(pokemon.description).toEqual(expectedPokemon.description);
    expect(pokemon.weight).toEqual(expectedPokemon.weight);
    expect(pokemon.height).toEqual(expectedPokemon.height);
    expect(pokemon.avatar).toEqual(expectedPokemon.avatar);
  }

  function verifyListOfPokemons(
    pokemons: Pokemon[],
    expectedPokemons: Pokemon[]
  ) {
    expect(pokemons.length).toEqual(expectedPokemons.length);
    expectedPokemons.forEach((expectedPokemon, index) =>
      verifyOnePokemon(pokemons[index], expectedPokemon)
    );
  }
});
