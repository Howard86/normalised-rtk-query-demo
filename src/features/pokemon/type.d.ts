declare namespace Pokemon {
  interface PaginationResponse<T> {
    count: number;
    next: string;
    previous: string | null;
    results: T[];
  }

  type PaginationParam = {
    limit: number;
    offset: number;
  };

  type NormalisedPokemon = Normalised<Pokemon>;
  type NormalisedMove = Normalised<Move>;

  type Normalised<T extends Index> =
    | { type: 'list'; data: NamedAPIResource & Index }
    | { type: 'item'; data: T };

  type Index = { id: number };
  type NameIndex = { name: string };

  interface Pokemon {
    abilities: PokemonAbility[];
    base_experience: number;
    forms: NamedAPIResource[];
    game_indices: VersionGameIndex[];
    height: number;
    held_items: PokemonHeldItem[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: PokemonMove[];
    name: string;
    order: number;
    past_types: unknown[];
    species: NamedAPIResource;
    sprites: PokemonSprites;
    stats: PokemonStat[];
    types: PokemonType[];
    weight: number;
  }

  interface NamedAPIResource extends APIResource {
    name: string;
  }

  interface APIResource {
    url: string;
  }

  interface PokemonAbility {
    ability: NamedAPIResource;
    is_hidden: boolean;
    slot: number;
  }

  interface VersionGameIndex {
    game_index: number;
    version: NamedAPIResource;
  }

  interface PokemonHeldItem {
    item: NamedAPIResource;
    version_details: HeldItemVersionDetail[];
  }

  interface HeldItemVersionDetail {
    rarity: number;
    version: NamedAPIResource;
  }

  interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: NamedAPIResource;
    version_group: NamedAPIResource;
  }

  interface PokemonMove {
    move: NamedAPIResource;
    version_group_details: VersionGroupDetail[];
  }

  interface PokemonSprites {
    back_default: string;
    back_female: string | null;
    back_shiny: string;
    back_shiny_female: string | null;
    front_default: string;
    front_female: string | null;
    front_shiny: string;
    front_shiny_female: string | null;
    other: Other;
    versions: Versions;
  }

  interface Other {
    dream_world: DreamWorld;
    home: Home;
    'official-artwork': OfficialArtwork;
  }

  interface DreamWorld {
    front_default: string;
    front_female: unknown;
  }

  interface Home {
    front_default: string;
    front_female: unknown;
    front_shiny: string;
    front_shiny_female: unknown;
  }

  interface OfficialArtwork {
    front_default: string;
  }

  interface Versions {
    'generation-i': GenerationI;
    'generation-ii': GenerationIi;
    'generation-iii': GenerationIii;
    'generation-iv': GenerationIv;
    'generation-v': GenerationV;
    'generation-vi': GenerationVi;
    'generation-vii': GenerationVii;
    'generation-viii': GenerationViii;
  }

  interface GenerationI {
    'red-blue': RedBlue;
    yellow: Yellow;
  }

  interface RedBlue {
    back_default: string;
    back_gray: string;
    back_transparent: string;
    front_default: string;
    front_gray: string;
    front_transparent: string;
  }

  interface Yellow {
    back_default: string;
    back_gray: string;
    back_transparent: string;
    front_default: string;
    front_gray: string;
    front_transparent: string;
  }

  interface GenerationIi {
    crystal: Crystal;
    gold: Gold;
    silver: Silver;
  }

  interface Crystal {
    back_default: string;
    back_shiny: string;
    back_shiny_transparent: string;
    back_transparent: string;
    front_default: string;
    front_shiny: string;
    front_shiny_transparent: string;
    front_transparent: string;
  }

  interface Gold {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    front_transparent: string;
  }

  interface Silver {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    front_transparent: string;
  }

  interface GenerationIii {
    emerald: Emerald;
    'firered-leafgreen': FireredLeafgreen;
    'ruby-sapphire': RubySapphire;
  }

  interface Emerald {
    front_default: string;
    front_shiny: string;
  }

  interface FireredLeafgreen {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
  }

  interface RubySapphire {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
  }

  interface GenerationIv {
    'diamond-pearl': DiamondPearl;
    'heartgold-soulsilver': HeartgoldSoulsilver;
    platinum: Platinum;
  }

  interface DiamondPearl {
    back_default: string;
    back_female: unknown;
    back_shiny: string;
    back_shiny_female: unknown;
    front_default: string;
    front_female: unknown;
    front_shiny: string;
    front_shiny_female: unknown;
  }

  interface HeartgoldSoulsilver {
    back_default: string;
    back_female: unknown;
    back_shiny: string;
    back_shiny_female: unknown;
    front_default: string;
    front_female: unknown;
    front_shiny: string;
    front_shiny_female: unknown;
  }

  interface Platinum {
    back_default: string;
    back_female: unknown;
    back_shiny: string;
    back_shiny_female: unknown;
    front_default: string;
    front_female: unknown;
    front_shiny: string;
    front_shiny_female: unknown;
  }

  interface GenerationV {
    'black-white': BlackWhite;
  }

  interface BlackWhite {
    animated: Animated;
    back_default: string;
    back_female: unknown;
    back_shiny: string;
    back_shiny_female: unknown;
    front_default: string;
    front_female: unknown;
    front_shiny: string;
    front_shiny_female: unknown;
  }

  interface Animated {
    back_default: string;
    back_female: unknown;
    back_shiny: string;
    back_shiny_female: unknown;
    front_default: string;
    front_female: unknown;
    front_shiny: string;
    front_shiny_female: unknown;
  }

  interface GenerationVi {
    'omegaruby-alphasapphire': OmegarubyAlphasapphire;
    'x-y': XY;
  }

  interface OmegarubyAlphasapphire {
    front_default: string;
    front_female: unknown;
    front_shiny: string;
    front_shiny_female: unknown;
  }

  interface XY {
    front_default: string;
    front_female: unknown;
    front_shiny: string;
    front_shiny_female: unknown;
  }

  interface GenerationVii {
    icons: Icons;
    'ultra-sun-ultra-moon': UltraSunUltraMoon;
  }

  interface Icons {
    front_default: string;
    front_female: unknown;
  }

  interface UltraSunUltraMoon {
    front_default: string;
    front_female: unknown;
    front_shiny: string;
    front_shiny_female: unknown;
  }

  interface GenerationViii {
    icons: Icons;
  }

  interface PokemonStat {
    base_stat: number;
    effort: number;
    stat: NamedAPIResource;
  }

  interface PokemonType {
    slot: number;
    type: NamedAPIResource;
  }

  interface Move {
    id: number;
    accuracy: number | null;
    contest_combos: ContestComboSets;
    contest_effect: APIResource;
    contest_type: NamedAPIResource;
    damage_class: NamedAPIResource;
    effect_chance: number | null;
    effect_changes: unknown[];
    effect_entries: VerboseEffect[];
    flavor_text_entries: MoveFlavorText[];
    generation: NamedAPIResource;
    learned_by_pokemon: NamedAPIResource[];
    machines: MachineVersionDetail[];
    meta: MoveMetaData;
    name: string;
    names: Name[];
    past_values: PastMoveStatValue[];
    power: number | null;
    pp: number;
    priority: number;
    stat_changes: MoveStatChange[];
    super_contest_effect: APIResource;
    target: NamedAPIResource;
    type: NamedAPIResource;
  }

  type ContestComboSets = Record<'normal', 'super', ContestComboDetail>;

  interface ContestComboDetail {
    use_before: NamedAPIResource;
    use_after: NamedAPIResource;
  }

  interface VerboseEffect {
    effect: string;
    language: NamedAPIResource;
    short_effect: string;
  }

  interface MoveFlavorText {
    flavor_text: string;
    language: NamedAPIResource;
    version_group: NamedAPIResource;
  }

  interface MachineVersionDetail {
    machine: APIResource;
    version_group: NamedAPIResource;
  }

  interface MoveMetaData {
    ailment: NamedAPIResource;
    ailment_chance: number;
    category: NamedAPIResource;
    crit_rate: number;
    drain: number;
    flinch_chance: number;
    healing: number;
    max_hits: number;
    max_turns: number;
    min_hits: number;
    min_turns: number;
    stat_chance: number;
  }

  interface Name {
    language: NamedAPIResource;
    name: string;
    url: string;
  }

  interface PastMoveStatValue {
    accuracy: number;
    effect_chance: number;
    effect_entries: VerboseEffect[];
    power: number;
    pp: number;
    type: NamedAPIResource;
    version_group: NamedAPIResource;
  }

  interface MoveStatChange {
    change: number;
    stat: NamedAPIResource;
  }

  interface Species {
    base_happiness: number;
    capture_rate: number;
    color: NamedAPIResource;
    egg_groups: NamedAPIResource[];
    evolution_chain: APIResource;
    evolves_from_species: unknown;
    flavor_text_entries: FlavorTextEntry[];
    form_descriptions: unknown[];
    forms_switchable: boolean;
    gender_rate: number;
    genera: Genera[];
    generation: NamedAPIResource;
    growth_rate: NamedAPIResource;
    habitat: NamedAPIResource;
    has_gender_differences: boolean;
    hatch_counter: number;
    id: number;
    is_baby: boolean;
    is_legendary: boolean;
    is_mythical: boolean;
    name: string;
    names: Name[];
    order: number;
    pal_park_encounters: PalParkEncounter[];
    pokedex_numbers: PokedexNumber[];
    shape: NamedAPIResource;
    varieties: Variety[];
  }

  interface FlavorTextEntry {
    flavor_text: string;
    language: NamedAPIResource;
    version: NamedAPIResource;
  }

  interface Genera {
    genus: string;
    language: NamedAPIResource;
  }

  interface PalParkEncounter {
    area: NamedAPIResource;
    base_score: number;
    rate: number;
  }

  interface PokedexNumber {
    entry_number: number;
    pokedex: NamedAPIResource;
  }
  interface Variety {
    is_default: boolean;
    pokemon: NamedAPIResource;
  }
}
