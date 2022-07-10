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
    | { type: 'list'; data: ResourceItem & Index }
    | { type: 'item'; data: T };

  type Index = { id: number };

  interface Pokemon {
    abilities: Ability[];
    base_experience: number;
    forms: ResourceItem[];
    game_indices: Index[];
    height: number;
    held_items: HeldItem[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    past_types: unknown[];
    species: ResourceItem;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
  }

  interface Ability {
    ability: ResourceItem;
    is_hidden: boolean;
    slot: number;
  }

  interface NormalisedResourceItem {
    name: string;
  }

  interface ResourceItem {
    name: string;
    url: string;
  }

  interface Index {
    game_index: number;
    version: ResourceItem;
  }

  interface HeldItem {
    item: ResourceItem;
    version_details: VersionDetail[];
  }

  interface VersionDetail {
    rarity: number;
    version: ResourceItem;
  }

  interface Move {
    move: ResourceItem;
    version_group_details: VersionGroupDetail[];
  }

  interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: ResourceItem;
    version_group: ResourceItem;
  }

  interface Sprites {
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
    icons: Icons2;
  }

  interface Icons2 {
    front_default: string;
    front_female: unknown;
  }

  interface Stat {
    base_stat: number;
    effort: number;
    stat: ResourceItem;
  }

  interface Type {
    slot: number;
    type: ResourceItem;
  }

  interface Move {
    accuracy: number | null;
    contest_combos: ContestCombos;
    contest_effect: ContestEffect;
    contest_type: ResourceItem;
    damage_class: ResourceItem;
    effect_chance: unknown;
    effect_changes: unknown[];
    effect_entries: EffectEntry[];
    flavor_text_entries: FlavorTextEntry[];
    generation: ResourceItem;
    id: number;
    learned_by_pokemon: ResourceItem[];
    machines: Machine[];
    meta: Meta;
    name: string;
    names: Name[];
    past_values: PastValue[];
    power: number | null;
    pp: number;
    priority: number;
    stat_changes: StatChange[];
    super_contest_effect: UrlItem;
    target: ResourceItem;
    type: ResourceItem;
  }

  interface ContestCombos {
    normal: Normal;
    super: Super;
  }

  interface Normal {
    use_after: unknown;
    use_before: ResourceItem[];
  }

  interface Super {
    use_after: unknown;
    use_before: unknown;
  }

  interface ContestEffect {
    url: string;
  }

  interface EffectEntry {
    effect: string;
    language: ResourceItem;
    short_effect: string;
  }

  interface FlavorTextEntry {
    flavor_text: string;
    language: ResourceItem;
    version_group: ResourceItem;
  }

  interface Machine {
    machine: UrlItem;
    version_group: ResourceItem;
  }

  interface UrlItem {
    url: string;
  }

  interface Meta {
    ailment: ResourceItem;
    ailment_chance: number;
    category: ResourceItem;
    crit_rate: number;
    drain: number;
    flinch_chance: number;
    healing: number;
    max_hits: unknown;
    max_turns: unknown;
    min_hits: unknown;
    min_turns: unknown;
    stat_chance: number;
  }

  interface Name {
    language: ResourceItem;
    name: string;
    url: string;
  }

  interface PastValue {
    accuracy: unknown;
    effect_chance: unknown;
    effect_entries: unknown[];
    power: unknown;
    pp: number;
    type: unknown;
    version_group: ResourceItem;
  }

  interface StatChange {
    change: number;
    stat: ResourceItem;
  }
}
