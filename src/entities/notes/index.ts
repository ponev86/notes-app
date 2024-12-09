import { getNotesData } from './model/selectors/get-notes-data';
import { getNotesError } from './model/selectors/get-notes-error';
import { getNotesIsLoading } from './model/selectors/get-notes-is-loading';
import { fetchNotes } from './model/services/fetch-notes';
import { notesReducer } from './model/slice/notes-slice';
import type { NotesSchema } from './model/types/notes-schema';
import { Notes } from './ui/notes';

export {
  NotesSchema,
  notesReducer,
  Notes,
  getNotesIsLoading,
  getNotesError,
  getNotesData,
  fetchNotes,
};
