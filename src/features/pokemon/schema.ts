import { createEntityAdapter } from '@reduxjs/toolkit';

import { RootState } from '@/app/redux/store';

export const pokemonAdapter = createEntityAdapter<Pokemon.NormalisedPokemon>({
  selectId: (item) => item.data.name,
});

export const pokemonSelector = pokemonAdapter.getSelectors(
  (state: RootState) => state.resource.pokemon,
);
