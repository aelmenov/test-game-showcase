/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Game } from '../features/game';
import { Games } from '../features/games';
import { fetchGames } from '../features/games/games-slice';
import { Header } from '../features/header';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  return (
    <>
      <Header />
  
      <Routes>
        <Route exact path="/" element={<Games />} />
        <Route path=":gameId" element={<Game />} />
      </Routes>
    </>
  );
};
