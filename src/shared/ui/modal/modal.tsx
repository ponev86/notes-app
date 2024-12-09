import clsx from 'clsx';
import { PropsWithChildren, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import CrossIcon from '../../assets/icons/cross-icon.svg';

import styles from './modal.module.scss';

export const TRANSITION_DURATION_MS = 200;

export interface IModalProps extends PropsWithChildren {
  className?: string;
  isOpened?: boolean;
  closeOnClickOutside?: boolean;
  onClose?(): void;
  overlayClassName?: string;
}

const Modal: React.FC<IModalProps> = (props) => {
  const {
    isOpened,
    className,
    overlayClassName,
    closeOnClickOutside,
    onClose,
    children,
  } = props;

  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const handleClickOutside = (): void => {
    if (closeOnClickOutside) {
      onClose?.();
    }
  };

  useEffect(() => {
    const element = document.createElement('div');

    setContainer(element);

    return () => element.remove();
  }, []);

  useEffect(() => {
    if (!container) return;

    if (isOpened && !isMounted) {
      document.body.appendChild(container);
      setIsMounted(true);
    }

    if (!isOpened && isMounted) {
      const timeout = setTimeout(() => {
        container?.remove();
        setIsMounted(false);
      }, TRANSITION_DURATION_MS);

      return () => clearTimeout(timeout);
    }
  }, [container, isMounted, isOpened, scroll]);

  useEffect(() => {
    if (isOpened && container) {
      window.requestAnimationFrame(() => {
        setIsModalActive(true);
      });
    }

    if (!isOpened && container) {
      window.requestAnimationFrame(() => {
        setIsModalActive(false);
      });
    }
  }, [container, isOpened]);

  if (!container) {
    return null;
  }

  return createPortal(
    <div
      className={clsx(
        overlayClassName,
        styles.overlay,
        isModalActive && styles.overlayActive
      )}
      onClick={handleClickOutside}
    >
      <div className={styles.modalContainer}>
        <div
          className={clsx(
            className,
            styles.modal,
            isModalActive && styles.modalOpened
          )}
          onClick={(event) => event.stopPropagation()}
        >
          {onClose && (
            <button
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Закрыть"
            >
              <CrossIcon />
            </button>
          )}
          {isMounted && children}
        </div>
      </div>
    </div>,
    container
  );
};

export default Modal;
