import { createSlice, EntityState } from '@reduxjs/toolkit';

import { pokemonApi } from '@/features/pokemon/api';
import { pokemonAdapter } from '@/features/pokemon/schema';

interface ResourceState {
  pokemon: EntityState<Pokemon.NormalisedPokemon>;
}

const initialState: ResourceState = {
  pokemon: pokemonAdapter.getInitialState(),
};

// eslint-disable-next-line import/prefer-default-export
export const resourceSlice = createSlice({
  name: 'resource',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addMatcher(
        pokemonApi.endpoints.getListOfPokemon.matchFulfilled,
        (state, action) => {
          state.pokemon = pokemonAdapter.upsertMany(
            state.pokemon,
            action.payload.results.map((data) => ({
              type: 'list',
              data,
            })),
          );
        },
      )
      .addMatcher(
        pokemonApi.endpoints.getPokemonByName.matchFulfilled,
        (state, action) => {
          state.pokemon = pokemonAdapter.upsertOne(state.pokemon, {
            type: 'item',
            data: action.payload,
          });
        },
      ),
});
