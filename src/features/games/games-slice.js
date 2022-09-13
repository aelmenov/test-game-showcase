/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import * as gamesRaw from './games.json';

export const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    amount: 12,
    filteredData: [],
    data: [],
    collection: [],
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    incrementGames: (state) => {
      const { collection, data, filteredData, amount } = state;
      const count = collection.length;
      const from = filteredData.length ? filteredData : data;

      state.collection = [
        ...collection,
        ...from.slice(count, count + amount),
      ];
    },
    clear: (state) => {
      state.collection = [];
    },
    filterByCurrency: (state, action) => {
      const { data, filteredData } = state;
      const from = filteredData.length ? filteredData : data;
    
      const result = from.filter(([, x]) => x.real && action.payload in x.real);

      state.filteredData = result;
    },
    filterByProvider: (state, action) => {
      const { data, filteredData } = state;
      const from = filteredData.length ? filteredData : data;
    
      const result = from.filter(([, x]) => x.provider && x.provider === action.payload);

      state.filteredData = result;
    }
  },
});

export const fetchGames = () => (dispatch) => {
  const data = Object.entries(gamesRaw);

  data.sort(([, a], [, b]) => a.collections?.popularity - b.collections?.popularity);

  dispatch(gamesSlice.actions.setData(data));
};

export const selectCollection = ({ games: { collection } }) => collection;
export const selectGame = (gameId) => ({ games: { data } }) => data.find(([id]) => id === gameId)?.[1];
export const selectAllProviders = ({ games: { data } }) => {
  const providers = new Set();

  data.forEach(([, { provider }]) => provider ? providers.add(provider) : null);

  return Array.from(providers);
};
export const selectAllCurrencies = ({ games: { data } }) => {
  const currencies = new Set();

  data.forEach(([, { real }]) => real ? Object.entries(real).forEach(([name]) => currencies.add(name)) : null);

  return Array.from(currencies);
};

export const { incrementGames, clear, filterByCurrency, filterByProvider } = gamesSlice.actions;

