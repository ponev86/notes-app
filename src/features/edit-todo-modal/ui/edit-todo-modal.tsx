import { getTodosModal } from 'entities/todos';
import { todosSlice } from 'entities/todos/model/slice/todos-slice';
import { TodoForm } from 'features/todo-form';
import { FC, useEffect, useState } from 'react';
import { useAppDispatch } from 'shared/hooks/use-app-dispatch';
import { useAppSelector } from 'shared/hooks/use-app-selector';
import Modal from 'shared/ui/modal/modal';

const TRANSITION_DURATION_MS = 200;

export const EditTodoModal: FC = () => {
  const dispatch = useAppDispatch();

  const todosModal = useAppSelector(getTodosModal);

  const [isOpened, setIsOpened] = useState(() => !!todosModal);

  const handleModalClose = (): void => {
    setIsOpened(false);

    setTimeout(() => {
      dispatch(todosSlice.actions.closeTodoModal());
    }, TRANSITION_DURATION_MS);
  };

  useEffect(() => {
    setIsOpened(!!todosModal);
  }, [todosModal]);

  return (
    <Modal isOpened={!!todosModal && isOpened} onClose={handleModalClose}>
      <TodoForm isEdit onClose={handleModalClose} />
    </Modal>
  );
};
