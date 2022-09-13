/* eslint-disable react/prop-types */
import React from 'react';

export const Button = ({ text, onClick }) => (
  <button
    type="button"
    className="block w-48 py-4 my-0 mx-auto bg-blue-500 text-blue-50 shadow-xl shadow-blue-400 rounded-md"
    onClick={onClick}
  >
    {text}
  </button>
);
