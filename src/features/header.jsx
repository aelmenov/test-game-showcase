import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <header className="p-6 mb-6 w-screen sticky top-0 left-0 bg-white shadow-black-50 shadow-xl">
    <Link to="/">
      <h1 className="inline text-3xl font-sans font-extrabold">
        Game Showcase
      </h1>
    </Link>
  </header>
);
