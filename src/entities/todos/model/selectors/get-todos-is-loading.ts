import type { StateSchema } from 'app/providers/store';

export const getTodosIsLoading = (state: StateSchema) =>
  state.todos?.isLoading || false;
