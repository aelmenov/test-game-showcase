import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectGame } from './games/games-slice';

export const Game = () => {
  const { gameId } = useParams();
  const game = useSelector(selectGame(decodeURIComponent(gameId)));

  return (
    <main className="flex justify-center items-center h-screen w-screen">
      <h2 className="text-2xl font-sans font-extrabold">
        {game?.title}
      </h2>
    </main>
  );
}