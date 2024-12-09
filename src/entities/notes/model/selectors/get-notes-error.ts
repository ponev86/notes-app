import type { StateSchema } from 'app/providers/store';

export const getNotesError = (state: StateSchema) => state.notes?.error;
