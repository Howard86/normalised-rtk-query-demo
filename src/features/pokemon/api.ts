import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'pokemon',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2',
  }),
  endpoints: (builder) => ({
    getListOfPokemon: builder.query<
      Pokemon.SuccessApiResponse<Pokemon.List[]>,
      Partial<Pokemon.PaginationParam>
    >({
      query: (params) => ({
        url: 'pokemon',
        params,
      }),
    }),
  }),
});

export const { useGetListOfPokemonQuery } = pokemonApi;
