import { createSlice, EntityState } from '@reduxjs/toolkit';

import { pokemonApi } from '@/features/pokemon/api';
import { moveAdapter, pokemonAdapter } from '@/features/pokemon/schema';
import { mapResourceToNormalisedList } from '@/features/pokemon/util';

interface ResourceState {
  pokemon: EntityState<Pokemon.NormalisedPokemon>;
  move: EntityState<Pokemon.NormalisedMove>;
}

const initialState: ResourceState = {
  pokemon: pokemonAdapter.getInitialState(),
  move: moveAdapter.getInitialState(),
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
          state.pokemon = pokemonAdapter.addMany(
            state.pokemon,
            action.payload.results.map(
              mapResourceToNormalisedList<Pokemon.Pokemon>,
            ),
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
          state.move = moveAdapter.addMany(
            state.move,
            action.payload.moves.map((move) =>
              mapResourceToNormalisedList(move.move),
            ),
          );
        },
      )
      .addMatcher(
        pokemonApi.endpoints.getListOfMove.matchFulfilled,
        (state, action) => {
          state.move = moveAdapter.addMany(
            state.move,
            action.payload.results.map(
              mapResourceToNormalisedList<Pokemon.Move>,
            ),
          );
        },
      )
      .addMatcher(
        pokemonApi.endpoints.getPokemonMoveByName.matchFulfilled,
        (state, action) => {
          state.move = moveAdapter.upsertOne(state.move, {
            type: 'item',
            data: action.payload,
          });
          state.pokemon = pokemonAdapter.addMany(
            state.pokemon,
            action.payload.learned_by_pokemon.map(
              mapResourceToNormalisedList<Pokemon.Pokemon>,
            ),
          );
        },
      ),
});
