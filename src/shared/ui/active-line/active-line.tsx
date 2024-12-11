import clsx from 'clsx';
import { FC, memo, PropsWithChildren } from 'react';
import styles from './active-line.module.scss';

interface ActiveLineProps extends PropsWithChildren {
  isActive?: boolean;
  className?: string;
}

export const ActiveLine: FC<ActiveLineProps> = memo((props) => {
  const { isActive, className, children } = props;

  return (
    <div
      className={clsx(styles.line, isActive && styles.lineActive, className)}
    >
      {children}
    </div>
  );
});
