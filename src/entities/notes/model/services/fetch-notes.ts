import { createAsyncThunk } from '@reduxjs/toolkit';

import type { AxiosError } from 'axios';
import { Notes, NotesDTO } from '../types/notes-schema';
import { ThunkConfig } from 'app/providers/store';
import agent from 'shared/api/agent';

export const fetchNotes = createAsyncThunk<Notes[], void, ThunkConfig<string>>(
  'notes/fetchNotes',
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const response = await agent.get<NotesDTO>('/posts');

      return response.data.posts;
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
