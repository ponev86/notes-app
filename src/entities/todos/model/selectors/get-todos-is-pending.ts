import type { StateSchema } from 'app/providers/store';

export const getTodosIsPending = (state: StateSchema) =>
  state.todos?.isPending || false;
