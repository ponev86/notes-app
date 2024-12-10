import { TodosSchema } from 'entities/todos';

export interface StateSchema {
  todos: TodosSchema;
}

export interface ThunkConfig<T = string> {
  rejectValue: T;
  state: StateSchema;
}
