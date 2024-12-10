import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Todo, TodosSchema } from '../types/todos-schema';
import { fetchTodos } from '../services/fetch-todos';

const initialState: TodosSchema = {
  isLoading: false,
  isPending: false,
  isShowRemoveModal: false,
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    toggleCompleted: (state, action: PayloadAction<number>) => {
      state.data = state.data?.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
    },
    showRemoveModal: (state) => {
      state.isShowRemoveModal = true;
    },
    hideRemoveModal: (state) => {
      state.isShowRemoveModal = false;
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.data = state.data?.filter((item) => item.id !== action.payload);
    },
    setIsPending: (state, action: PayloadAction<boolean>) => {
      state.isPending = action.payload;
    },
  },
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
