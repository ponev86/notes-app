import type { StateSchema } from 'app/providers/store';

export const getNotesData = (state: StateSchema) => state.notes?.data;
