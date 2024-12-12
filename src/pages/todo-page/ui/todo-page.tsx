import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getIdFromAlias } from 'shared/utils/common';
import { getTodoById } from '../model/service/get-todo-by-id';
import { Todo } from 'entities/todos/model/types/todos-schema';

import styles from './todo-page.module.scss';
import { Loader } from 'shared/ui/loader/loader';
import { AppLink } from 'shared/ui/app-link/app-link';

const TodoPage = () => {
  const { alias } = useParams<{ alias: string }>();

  if (!alias) {
    return null;
  }

  const todoId = getIdFromAlias(alias);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [todo, setTodo] = useState<Todo | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    getTodoById(todoId)
      .then((todoData) => {
        setTodo(todoData);
      })
      .catch(() => {
        setTodo(null);
        setError('Произошла ошибка! Убедитесь, что ссылка правильная.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [todoId]);

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );
  }

  return (
    <>
      <h1>Информация о заметке</h1>
      {error && <p className={styles.error}>{error}</p>}
      {todo && (
        <>
          <h2>{todo.todo}</h2>
          <p>{todo.completed ? 'Выполнена' : 'Не выполнена'}</p>
        </>
      )}
      <AppLink to="/">На главную</AppLink>
    </>
  );
};

export default TodoPage;
