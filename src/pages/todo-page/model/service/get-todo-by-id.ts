import { Todo } from 'entities/todos/model/types/todos-schema';
import agent from 'shared/api/agent';

export async function getTodoById(id: number): Promise<Todo> {
  const { data } = await agent.get<Todo>(`/todo/${id}`);

  return data;
}
