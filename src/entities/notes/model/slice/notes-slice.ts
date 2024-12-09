import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { fetchNotes } from '../services/fetch-notes';
import { Notes, NotesSchema } from '../types/notes-schema';

const initialState: NotesSchema = {
  isLoading: false,
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchNotes.fulfilled,
        (state, action: PayloadAction<Notes[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(
        fetchNotes.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { actions: notesActions } = notesSlice;
export const { reducer: notesReducer } = notesSlice;
