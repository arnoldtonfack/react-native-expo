import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { emptySplitApi } from './services/emptySplitApi';

export const store = configureStore({
  reducer: {
    // branche le reducer généré par RTKQ
    [emptySplitApi.reducerPath]: emptySplitApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emptySplitApi.middleware),
});

//  refetch automatiquement
// quand l’app reprend le focus ou récupère la connexion réseau
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
