import { Action, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import { StateSchema } from './state-shema';
import { todosReducer } from 'entities/todos';

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      todos: todosReducer,
    },
    devTools: true,
    preloadedState: initialState,
  });
}

export type AppDispatch = ThunkDispatch<StateSchema, any, Action>;
