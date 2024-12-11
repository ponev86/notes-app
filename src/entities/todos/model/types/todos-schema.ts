export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

export interface TodosSchema {
  isLoading: boolean;
  isPending: boolean;
  data: Todo[];
  todosModal: Todo | null;
  error?: string;
}

export interface TodosDTO {
  limit: number;
  skip: number;
  total: number;
  todos: Todo[];
}
