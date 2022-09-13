/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { clear, filterByCurrency, filterByProvider, selectAllCurrencies, selectAllProviders } from './games/games-slice';
import { Select } from './select';

export const Filter = () => {
  const currencies = useSelector(selectAllCurrencies);
  const providers = useSelector(selectAllProviders);
  const dispatch = useDispatch();

  const handleCurrencyChoose = useCallback((value) => {
    dispatch(filterByCurrency(value));
    dispatch(clear());
  }, [dispatch]);

  const handleProviderChoose = useCallback((value) => {
    dispatch(filterByProvider(value));
    dispatch(clear());
  }, [dispatch]);

  return (
    <section className="flex flex-wrap gap-6 justify-start mb-6">
      <Select
        title="Валюта"
        color="green"
        values={currencies}
        onChange={handleCurrencyChoose}
      />

      <Select
        title="Провайдер"
        color="orange"
        values={providers}
        onChange={handleProviderChoose}
      />
    </section>
  );
}