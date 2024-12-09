export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

export interface TodosSchema {
  isLoading: boolean;
  isPending: boolean;
  isShowRemoveModal: boolean;
  error?: string;
  data?: Todo[];
}

export interface TodosDTO {
  limit: number;
  skip: number;
  total: number;
  todos: Todo[];
}
