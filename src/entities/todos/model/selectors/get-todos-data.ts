import type { StateSchema } from 'app/providers/store';

export const getTodosData = (state: StateSchema) => state.todos?.data;
