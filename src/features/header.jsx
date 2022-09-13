import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <header className="p-6 mb-6 w-full sticky top-0 left-0 bg-white shadow-slate-100 shadow-xl">
    <Link to="/" className="text-3xl font-sans font-extrabold">
      Game Showcase
    </Link>
  </header>
);
