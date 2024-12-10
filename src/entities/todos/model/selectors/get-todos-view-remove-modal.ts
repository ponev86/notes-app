import type { StateSchema } from 'app/providers/store';

export const getTodosViewRemoveModal = (state: StateSchema) =>
  state.todos?.isShowRemoveModal;
