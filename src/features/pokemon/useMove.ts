import { useGetPokemonMoveByNameQuery } from './api';
import { LANGUAGE_NAME } from './constants';
import { moveSelector } from './schema';

import useAppSelector from '@/common/hooks/useAppSelector';

const useMove = (name: string, skip = false) => {
  const move = useAppSelector((state) => moveSelector.selectById(state, name));

  return useGetPokemonMoveByNameQuery(name, {
    skip: skip || move?.type === 'item',
    selectFromResult: (res) => ({
      ...res,
      data: move,
      description:
        move?.type === 'item' &&
        move.data.flavor_text_entries.find(
          (entry) => entry.language.name === LANGUAGE_NAME,
        )?.flavor_text,
    }),
  });
};

export default useMove;
