import { AppDispatch } from 'app/providers/store';
import agent from 'shared/api/agent';
import { todosSlice } from '../slice/todos-slice';
import { Todo } from '../types/todos-schema';

export const editTodo =
  (id: number, todo: Omit<Todo, 'id'>) =>
  async (dispatch: AppDispatch): Promise<void> => {
    try {
      dispatch(todosSlice.actions.setIsPending(true));

      // TODO: условие для успешного изменения добавленных вручную записей
      if (id < 255) {
        const { data } = await agent.put<Todo>(`/todos/${id}`, todo);
        dispatch(todosSlice.actions.updateTodo(data));
      } else {
        dispatch(todosSlice.actions.updateTodo({ id, ...todo }));
      }
    } catch (error) {
      throw error;
    } finally {
      dispatch(todosSlice.actions.setIsPending(false));
    }
  };
