import {
  fetchTodos,
  getTodosData,
  getTodosError,
  getTodosIsLoading,
  getTodosViewRemoveModal,
  Todos,
} from 'entities/todos';

import { useEffect } from 'react';
import { useAppDispatch } from 'shared/hooks/use-app-dispatch';
import { useAppSelector } from 'shared/hooks/use-app-selector';
import { AppLink } from 'shared/ui/app-link/app-link';

import styles from './main-page.module.scss';
import { RoutePath } from 'shared/config/route-config';
import { EditTodoModal } from 'features/edit-todo-modal';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getTodosIsLoading);
  const error = useAppSelector(getTodosError);
  const todos = useAppSelector(getTodosData);
  const isShowRemoveModal = useAppSelector(getTodosViewRemoveModal);

  useEffect(() => {
    if (todos.length) return;
    dispatch(fetchTodos());
  }, [dispatch, todos]);

  return (
    <>
      <div className={styles.mainHeader}>
        <h1>Список заметок</h1>
        <AppLink to={RoutePath.todo_create}>Создать заметку</AppLink>
      </div>

      {error && <p className={styles.error}>Ошибка: {error}</p>}

      <Todos
        isLoading={isLoading}
        todos={todos}
        isShowRemoveModal={isShowRemoveModal}
      />

      <EditTodoModal />
    </>
  );
};

export default MainPage;
