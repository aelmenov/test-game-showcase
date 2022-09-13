import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames, selectGames, selectGamesCount } from './games-slice';

export const Games = () => {
  const games = useSelector(selectGames);
  const gamesCount = useSelector(selectGamesCount);
  const dispatch = useDispatch();

  useEffect(() => {
    if (gamesCount === 0) {
      dispatch(fetchGames());
    }
  });

  console.log(games);

  return (
    <main>
      Hey!
    </main>
  );
};
