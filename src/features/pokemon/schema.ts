import {
  createEntityAdapter,
  createSelector,
  Dictionary,
  EntityId,
} from '@reduxjs/toolkit';

import type { RootState } from '@/app/redux/store';
import { last } from '@/common/utils';

export const pokemonAdapter = createEntityAdapter<Pokemon.TypedPokemon>({
  selectId: (item) => item.data.name,
  sortComparer: (a, b) => a.data.id - b.data.id,
});

export const pokemonSelector = pokemonAdapter.getSelectors(
  (state: RootState) => state.resource.pokemon,
);

export const moveAdapter = createEntityAdapter<Pokemon.TypedMove>({
  selectId: (item) => item.data.name,
  sortComparer: (a, b) => a.data.id - b.data.id,
});

export const moveSelector = moveAdapter.getSelectors(
  (state: RootState) => state.resource.move,
);

const selectFilteredEntityIds = <
  I extends Pokemon.Index,
  T extends Pokemon.Typed<I>,
>(
  entities: Dictionary<T>,
  ids: EntityId[],
) => {
  if (ids.length === entities[last(ids)]?.data.id) return ids;

  const lastMatchedIndex = ids.findIndex(
    (name, index) => entities[name]?.data.id !== index + 1,
  );

  if (!lastMatchedIndex) return ids;

  return ids.slice(0, lastMatchedIndex);
};

export const selectLastPokemonIds = createSelector(
  pokemonSelector.selectEntities,
  pokemonSelector.selectIds,
  selectFilteredEntityIds,
);

export const selectLastMoveIds = createSelector(
  moveSelector.selectEntities,
  moveSelector.selectIds,
  selectFilteredEntityIds,
);
