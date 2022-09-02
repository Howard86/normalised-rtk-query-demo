import { useGetPokemonByNameQuery } from './api';
import { pokemonSelector } from './schema';

import useAppSelector from '@/common/hooks/useAppSelector';

const usePokemon = (name: string, skip = false) => {
  const pokemon = useAppSelector((state) =>
    pokemonSelector.selectById(state, name),
  );

  return useGetPokemonByNameQuery(name, {
    skip: skip || pokemon?.type === 'item',
    selectFromResult: (res) => ({ ...res, data: pokemon }),
  });
};

export default usePokemon;
