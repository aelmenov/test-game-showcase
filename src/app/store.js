import { configureStore } from '@reduxjs/toolkit';
import { gamesSlice } from '../features/games/games-slice';

export const store = configureStore({
  reducer: {
    games: gamesSlice.reducer,
  },
});
