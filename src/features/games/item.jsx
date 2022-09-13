/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({ id, title }) => (
  <Link to={encodeURIComponent(id)} className="cursor-pointer">
    <div
      className="w-48 h-48 bg-center bg-cover bg-slate-50 shadow-slate-300 shadow-xl rounded-md"
      style={{
        backgroundImage: `url('${`https://cdn2.softswiss.net/i/s2/${id}.png`}')`,
      }}
    />

    <div className="mt-1 text-center">
      {title}
    </div>
  </Link>
);
