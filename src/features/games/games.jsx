/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../button';
import { Filter } from '../filter';
import { incrementGames, selectCollection } from './games-slice';
import { Item } from './item';

export const Games = () => {
  const games = useSelector(selectCollection);
  const dispatch = useDispatch();

  useEffect(() => {
    if (games.length < 12) {
      dispatch(incrementGames());
    }
  }, [games, dispatch]);

  const handleClick = useCallback(() => {
    dispatch(incrementGames());
  }, [dispatch]);

  return (
    <main className="m-6">
      <Filter />

      <section className="flex flex-wrap gap-6 justify-center mb-6">
        {games.map(([id, game]) => <Item key={id} id={id} title={game.title} />)}
      </section>

      <Button text="Показать еще" onClick={handleClick} />
    </main>
  );
};
