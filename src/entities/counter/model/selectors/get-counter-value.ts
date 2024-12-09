import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from './get-counter';
import { CounterSchema } from '../types/counter-schema';

export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterSchema) => counter.value
);
