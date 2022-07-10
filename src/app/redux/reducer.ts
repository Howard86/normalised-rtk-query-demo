import { combineReducers } from '@reduxjs/toolkit';

import { resourceSlice } from './resource';

import localApi from '@/common/services/local';
import { pokemonApi } from '@/features/pokemon/api';

const reducer = combineReducers({
  [localApi.reducerPath]: localApi.reducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
  [resourceSlice.name]: resourceSlice.reducer,
});

export default reducer;
