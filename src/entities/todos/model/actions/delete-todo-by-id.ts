import { AppDispatch } from 'app/providers/store';
import agent from 'shared/api/agent';
import { todosSlice } from '../slice/todos-slice';

export const deleteTodoById =
  (id: number) =>
  async (dispatch: AppDispatch): Promise<void> => {
    try {
      dispatch(todosSlice.actions.setIsPending(true));

      // TODO: условие для успешного удаления добавленных вручную записей
      if (id < 255) {
        await agent.delete(`/todos/${id}`);
      }

      dispatch(todosSlice.actions.deleteTodo(id));
    } catch (error) {
      throw error;
    } finally {
      dispatch(todosSlice.actions.setIsPending(false));
    }
  };
