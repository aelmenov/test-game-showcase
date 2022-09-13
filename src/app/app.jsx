import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Game } from '../features/game';
import { Games } from '../features/games';
import { Header } from '../features/header';

export const App = () => (
  <>
    <Header />

    <Routes>
      <Route exact path="/" element={<Games />} />
      <Route path=":gameId" element={<Game />} />
    </Routes>
  </>
);
