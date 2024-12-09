import { Action, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import { StateSchema } from './state-shema';
import { counterReducer } from 'entities/counter';
import { notesReducer } from 'entities/notes';

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
      notes: notesReducer,
    },
    devTools: true,
    preloadedState: initialState,
  });
}

export type AppDispatch = ThunkDispatch<StateSchema, any, Action>;
