import { Button } from 'shared/ui/button/button';

import type { FallbackProps } from 'react-error-boundary';

import styles from './fallback-error.module.scss';
import { FC, memo } from 'react';

export const FallbackError: FC<FallbackProps> = memo((props) => {
  const { error, resetErrorBoundary } = props;

  return (
    <div className={styles.fallbackError}>
      <p>Упс!: {error.message}</p>
      <Button onClick={resetErrorBoundary}>Попробуйте еще раз</Button>
    </div>
  );
});
