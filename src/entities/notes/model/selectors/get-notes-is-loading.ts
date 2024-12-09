import type { StateSchema } from 'app/providers/store';

export const getNotesIsLoading = (state: StateSchema) =>
  state.notes?.isLoading || false;
