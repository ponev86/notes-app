import clsx from 'clsx';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import styles from '../../ui/todos.module.scss';
import { Todo } from '../../model/types/todos-schema';
import { ActiveLine } from 'shared/ui/active-line/active-line';
import { useAppDispatch } from 'shared/hooks/use-app-dispatch';
import { todosActions } from 'entities/todos/model/slice/todos-slice';
import useConfirmationModal from 'shared/hooks/use-confirmation-modal';
import { deleteTodoById, getTodosIsPending } from 'entities/todos';
import { useAppSelector } from 'shared/hooks/use-app-selector';

export function useGetTodosTableData(todos?: Todo[]) {
  const dispatch = useAppDispatch();
  const isPending = useAppSelector(getTodosIsPending);

  const { isModalOpened, onCancel, onConfirm, onOpenModal } =
    useConfirmationModal();

  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );

  const isCompletedFilterActive = useMemo(
    () => queryParams.get('completed') === 'true',
    [queryParams]
  );

  const [showCompleted, setShowCompleted] = useState(isCompletedFilterActive);

  const onToggleComplete = useCallback(() => {
    setShowCompleted((prev) => !prev);
  }, []);

  const onChangeCompleteTodo = useCallback(
    (id: number) => {
      dispatch(todosActions.toggleCompleted(id));
    },
    [dispatch]
  );

  const onEditTodo = useCallback((todo: Todo) => {
    dispatch(todosActions.openTodoModal(todo));
  }, []);

  const onDeleteHandle = useCallback(
    async (id: number): Promise<void> => {
      const isDelete = await onOpenModal();

      if (isDelete) {
        dispatch(deleteTodoById(id));
      }
    },
    [onOpenModal, dispatch]
  );

  const filteredTodos = useMemo(() => {
    const safeTodos = todos || [];
    return showCompleted
      ? safeTodos.filter((todoItem) => todoItem.completed === true)
      : safeTodos;
  }, [todos, showCompleted]);

  const dataSource = useMemo(() => {
    return filteredTodos.map((todoItem) => ({
      ordering: (
        <ActiveLine isActive={todoItem.completed}>{todoItem.id}</ActiveLine>
      ),
      title: (
        <ActiveLine isActive={todoItem.completed}>{todoItem.todo}</ActiveLine>
      ),
      completed: (
        <ActiveLine isActive={todoItem.completed}>
          <input
            type="checkbox"
            checked={todoItem.completed}
            onChange={() => onChangeCompleteTodo(todoItem.id)}
            disabled={isPending}
          />
        </ActiveLine>
      ),
      edit: (
        <ActiveLine isActive={todoItem.completed}>
          <Button
            onClick={() => onEditTodo(todoItem)}
            theme={ButtonTheme.Secondary}
            disabled={isPending}
          >
            Редактировать
          </Button>
        </ActiveLine>
      ),
      delete: (
        <ActiveLine isActive={todoItem.completed}>
          <Button
            onClick={() => onDeleteHandle(todoItem.id)}
            theme={ButtonTheme.Secondary}
            className={styles.removeButton}
            disabled={isPending}
          >
            Удалить
          </Button>
        </ActiveLine>
      ),
    }));
  }, [
    filteredTodos,
    onChangeCompleteTodo,
    isPending,
    onEditTodo,
    onDeleteHandle,
  ]);

  const tableColumns = useMemo(
    () => [
      { title: '#ID', dataIndex: 'ordering', width: 80 },
      { title: 'Название', dataIndex: 'title' },
      {
        title: (
          <Button
            onClick={onToggleComplete}
            theme={ButtonTheme.Clear}
            className={clsx(
              styles.completedButton,
              showCompleted && styles.completedButtonActive
            )}
          >
            Выполнен
          </Button>
        ),
        dataIndex: 'completed',
        width: 150,
      },
      { dataIndex: 'edit', width: 150 },
      { dataIndex: 'delete', width: 80 },
    ],
    [onToggleComplete, showCompleted]
  );

  useEffect(() => {
    navigate(showCompleted ? '?completed=true' : '?', { replace: true });
  }, [showCompleted, navigate]);

  return {
    tableColumns,
    dataSource,
    isModalOpened,
    onCancel,
    onConfirm,
  };
}
