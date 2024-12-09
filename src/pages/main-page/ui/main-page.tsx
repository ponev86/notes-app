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

const MainPage = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getTodosIsLoading);
  const error = useAppSelector(getTodosError);
  const todos = useAppSelector(getTodosData);
  const isShowRemoveModal = useAppSelector(getTodosViewRemoveModal);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <h1>Список заметок</h1>
      {error && <p>Ошибка: {error}</p>}
      <Todos
        isLoading={isLoading}
        todos={todos}
        isShowRemoveModal={isShowRemoveModal}
      />
    </>
  );
};

export default MainPage;
