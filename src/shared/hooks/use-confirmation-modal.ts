import { useRef, useState } from 'react';
import {
  createPromiseController,
  TPromiseController,
} from '../utils/promise-controller';

export interface IConfirmationModalControls {
  isModalOpened: boolean;
  onOpenModal(): TPromiseController<boolean>;
  onConfirm(): void;
  onCancel(): void;
}

function useConfirmationModal(): IConfirmationModalControls {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  const confirmationController = useRef<TPromiseController<boolean> | null>(
    null
  );

  const handleOpenModal = (): TPromiseController<boolean> => {
    confirmationController.current = createPromiseController<boolean>();
    setIsModalOpened(true);

    return confirmationController.current;
  };

  const handleConfirm = (): void => {
    if (confirmationController.current) {
      confirmationController.current.resolve(true);
      setIsModalOpened(false);
      confirmationController.current = null;
    }
  };

  const handleCancel = (): void => {
    if (confirmationController.current) {
      confirmationController.current.resolve(false);
      setIsModalOpened(false);
      confirmationController.current = null;
    }
  };

  return {
    isModalOpened,
    onOpenModal: handleOpenModal,
    onConfirm: handleConfirm,
    onCancel: handleCancel,
  };
}

export default useConfirmationModal;
