import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Todo, TodosSchema } from '../types/todos-schema';
import { fetchTodos } from '../services/fetch-todos';

const initialState: TodosSchema = {
  isLoading: false,
  isPending: false,
  todosModal: null,
  data: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    toggleCompleted: (state, action: PayloadAction<number>) => {
      state.data = state.data.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    setIsPending: (state, action: PayloadAction<boolean>) => {
      state.isPending = action.payload;
    },
    openTodoModal(state, action: PayloadAction<Todo>) {
      state.todosModal = action.payload;
    },
    closeTodoModal(state) {
      state.todosModal = null;
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.data = [action.payload, ...state.data];
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      state.data = state.data.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
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
