import { AppDispatch } from 'app/providers/store';
import agent from 'shared/api/agent';
import { todosSlice } from '../slice/todos-slice';
import { Todo } from '../types/todos-schema';

export const createTodo =
  (todo: Omit<Todo, 'id'>) =>
  async (dispatch: AppDispatch): Promise<void> => {
    try {
      dispatch(todosSlice.actions.setIsPending(true));

      const { data } = await agent.post<Todo>('/todos/add', {
        ...todo,
        userId: 5,
      });

      dispatch(todosSlice.actions.addTodo(data));
    } catch (error) {
      throw error;
    } finally {
      dispatch(todosSlice.actions.setIsPending(false));
    }
  };
