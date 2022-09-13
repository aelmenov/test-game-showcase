/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    value: {},
  },
  reducers: {
    setGames: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const fetchGames = () => async (dispatch) => {
  try {
    fetch('https://demo.softswiss.net/api/games/allowed_desktop', {
      method: 'get',
      mode: 'no-cors',
      credentials: 'include',
      referrer: 'https://demo.softswiss.net/ru/games/136',
    })
      .then((response) => response.json())
      .then((games) => dispatch(gamesSlice.actions.setGames(games)));
  } catch (err) {
    console.error(err);
  }
};

export const selectGames = (state) => state.games.value;
export const selectGamesCount = (state) => Object.keys(state.games.value).length;
