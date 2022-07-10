import { combineReducers } from '@reduxjs/toolkit';

import localApi from '@/common/services/local';
import { pokemonApi } from '@/features/pokemon/api';

const reducer = combineReducers({
  [localApi.reducerPath]: localApi.reducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

export default reducer;
