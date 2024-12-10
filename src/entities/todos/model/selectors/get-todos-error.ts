import type { StateSchema } from 'app/providers/store';

export const getTodosError = (state: StateSchema) => state.todos?.error;
