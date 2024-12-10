import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Todo, TodosSchema } from '../types/todos-schema';
import { fetchTodos } from '../services/fetch-todos';

const initialState: TodosSchema = {
  isLoading: false,
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(
        fetchTodos.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { actions: todosActions } = todosSlice;
export const { reducer: todosReducer } = todosSlice;
