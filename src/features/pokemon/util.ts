import type { ColorProps } from '@chakra-ui/react';

export const getResourceId = (item: Pokemon.NamedAPIResource) => {
  const urlPaths = item.url.split('/');

  return Number.parseInt(urlPaths[urlPaths.length - 2], 10);
};

export const mapResourceToNormalisedList = <K extends Pokemon.Index>(
  item: Pokemon.NamedAPIResource,
): Pokemon.Typed<K> => ({
  type: 'list',
  data: {
    id: getResourceId(item),
    name: item.name,
    url: item.url,
  },
});

export const mapToNormalizedPokemon = (
  pokemon: Pokemon.Pokemon,
): Pokemon.NormalizedPokemon => ({
  ...pokemon,
  moves: pokemon.moves.map((move) => move.move.name),
});

export const mapToNormalizedMove = (
  move: Pokemon.Move,
): Pokemon.NormalizedMove => ({
  ...move,
  learned_by_pokemon: move.learned_by_pokemon.map((pokemon) => pokemon.name),
});

// Reference: https://bulbapedia.bulbagarden.net/wiki/Type
export const getColorByType = (type: string): ColorProps['color'] => {
  switch (type) {
    case 'normal':
      return 'gray.500';

    case 'fighting':
      return 'orange.400';

    case 'flying':
      return 'cyan.400';

    case 'poison':
      return 'purple.600';

    case 'ground':
      return 'yellow.600';

    case 'rock':
      return 'orange.500';

    case 'bug':
      return 'green.400';

    case 'ghost':
      return 'purple.800';

    case 'steel':
      return 'gray.300';

    case 'fire':
      return 'red.400';

    case 'water':
      return 'blue.400';

    case 'grass':
      return 'green.500';

    case 'electric':
      return 'yellow.300';

    case 'psychic':
      return 'pink.400';

    case 'ice':
      return 'cyan.200';

    case 'dragon':
      return 'blue.800';

    case 'dark':
      return 'gray.800';

    case 'fairy':
      return 'pink.200';

    default:
      return 'blue.200';
  }
};
