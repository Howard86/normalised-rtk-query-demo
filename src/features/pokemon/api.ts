import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'pokemon',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2',
  }),
  endpoints: (builder) => ({
    getListOfPokemon: builder.query<
      Pokemon.PaginationResponse<Pokemon.NamedAPIResource>,
      Partial<Pokemon.PaginationParam>
    >({
      query: (params) => ({
        url: 'pokemon',
        params,
      }),
    }),
    getPokemonByName: builder.query<Pokemon.Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
    getListOfMove: builder.query<
      Pokemon.PaginationResponse<Pokemon.NamedAPIResource>,
      Partial<Pokemon.PaginationParam>
    >({
      query: (params) => ({
        url: 'move',
        params,
      }),
    }),
    getPokemonMoveByName: builder.query<Pokemon.Move, string>({
      query: (name) => `move/${name}`,
    }),
  }),
});

export const {
  useGetListOfPokemonQuery,
  useGetPokemonByNameQuery,
  useGetListOfMoveQuery,
  useGetPokemonMoveByNameQuery,
} = pokemonApi;
