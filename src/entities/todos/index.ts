import { getTodosData } from './model/selectors/get-todos-data';
import { getTodosError } from './model/selectors/get-todos-error';
import { getTodosIsLoading } from './model/selectors/get-todos-is-loading';
import { fetchTodos } from './model/services/fetch-todos';
import { todosReducer } from './model/slice/todos-slice';
import type { TodosSchema } from './model/types/todos-schema';
import { Todos } from './ui/todos';

export {
  TodosSchema,
  todosReducer,
  Todos,
  getTodosIsLoading,
  getTodosError,
  getTodosData,
  fetchTodos,
};
