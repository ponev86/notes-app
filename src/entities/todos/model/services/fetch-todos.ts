import { createAsyncThunk } from '@reduxjs/toolkit';

import type { AxiosError } from 'axios';
import { Todo, TodosDTO } from '../types/todos-schema';
import { ThunkConfig } from 'app/providers/store';
import agent from 'shared/api/agent';

export const fetchTodos = createAsyncThunk<Todo[], void, ThunkConfig<string>>(
  'todos/fetchTodos',
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const response = await agent.get<TodosDTO>('/todos');

      return response.data.todos;
    } catch (error) {
      const axiosError = error as AxiosError;

      const errorMessage =
        axiosError.response?.data &&
        typeof axiosError.response.data === 'object'
          ? (axiosError.response.data as { message?: string }).message ||
            'Fetch data failed'
          : 'Fetch data failed';

      console.error('Fetch data error:', errorMessage);

      return rejectWithValue(errorMessage);
    }
  }
);
