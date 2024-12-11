import type { StateSchema } from 'app/providers/store';

export const getTodosModal = (state: StateSchema) =>
  state.todos?.todosModal || null;
