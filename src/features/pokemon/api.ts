import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'pokemon',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2',
  }),
  endpoints: (builder) => ({
    getListOfPokemon: builder.query<
      Pokemon.PaginationResponse<Record<'url' | 'name', string>>,
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
  }),
});

export const { useGetListOfPokemonQuery, useGetPokemonByNameQuery } =
  pokemonApi;
