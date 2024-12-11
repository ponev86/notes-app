import clsx from 'clsx';

import styles from './delete-todo-modal.module.scss';
import Modal from 'shared/ui/modal/modal';
import { Button, ButtonTheme } from 'shared/ui/button/button';
import { FC, memo } from 'react';

export interface IDeleteTodoModalProps {
  isOpened: boolean;
  onConfirm: VoidFunction;
  onCancel: VoidFunction;
}

export const DeleteTodoModal: FC<IDeleteTodoModalProps> = memo((props) => {
  const { isOpened, onCancel, onConfirm } = props;

  return (
    <Modal isOpened={isOpened} onClose={onCancel}>
      <h2 className={styles.title}>Подтвердите удаление</h2>
      <div className={styles.buttons}>
        <Button
          className={styles.button}
          theme={ButtonTheme.Secondary}
          onClick={onCancel}
        >
          Отменить
        </Button>

        <Button
          className={clsx(styles.button, styles.buttonConfirm)}
          onClick={onConfirm}
        >
          Удалить
        </Button>
      </div>
    </Modal>
  );
});
