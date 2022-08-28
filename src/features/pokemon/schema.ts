import { createEntityAdapter } from '@reduxjs/toolkit';

import type { RootState } from '@/app/redux/store';

export const pokemonAdapter = createEntityAdapter<Pokemon.NormalisedPokemon>({
  selectId: (item) => item.data.name,
  sortComparer: (a, b) => a.data.id - b.data.id,
});

export const pokemonSelector = pokemonAdapter.getSelectors(
  (state: RootState) => state.resource.pokemon,
);

export const moveAdapter = createEntityAdapter<Pokemon.NormalisedMove>({
  selectId: (item) => item.data.name,
  sortComparer: (a, b) => a.data.id - b.data.id,
});

export const moveSelector = moveAdapter.getSelectors(
  (state: RootState) => state.resource.move,
);
