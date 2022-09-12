import React, { StrictMode } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import { Game } from './game';
import { Home } from './home';

export const App = () => (
  <StrictMode>
    <Router>
      <header className="p-6 mb-6 sticky shadow-slate-100 shadow-xl">
        <Link to="/" className="text-3xl font-sans font-extrabold">
          Game Showcase
        </Link>
      </header>
    
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path=":gameId" element={<Game />} />
      </Routes>
    </Router>
  </StrictMode>
);