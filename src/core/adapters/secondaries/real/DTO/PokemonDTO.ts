export interface PokemonPageDTO {
  count: number;
  next: string;
  previous: string;
  results: PokemonSimpleDTO[];
}

export interface PokemonSimpleDTO {
  name: string;
  url: string;
}

export interface PokemonDTO {
  id: number;
  name: string;
  abilities: AbilityDTO[];
  base_experience: number;
  location_area_encounters: string;
  forms: FormDTO[];
  game_indices: GameIndiceDTO[];
  height: number;
  held_items: [];
  is_default: boolean;
  moves: [];
  order: number;
  species: {
    name: string;
    url: string;
  };
  sprites: SpritesDTO;
  stats: StatDTO[];
  weight: number;
  types: TypeDTO[];
}

export interface TypeDTO {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface StatDTO {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface SpritesDTO {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: {
    dream_world: {
      front_default: string;
      front_female: string;
    };
    "official-artwork": {
      front_default: string;
      front_female: string;
    };
  };
}

export interface AbilityDTO {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface FormDTO {
  name: string;
  url: string;
}

export interface GameIndiceDTO {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}
