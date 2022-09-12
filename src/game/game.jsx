import React from 'react';
import { useParams } from 'react-router';

export const Game = () => {
  let { gameId } = useParams();

  return (
    <div>
      Yo, it's {gameId}
    </div>
  );
}