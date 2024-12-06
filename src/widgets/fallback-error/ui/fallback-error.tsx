import { Button } from 'shared/ui/button/button';

import type { FallbackProps } from 'react-error-boundary';

import styles from './fallback-error.module.scss';

export const FallbackError: React.FC<FallbackProps> = (props) => {
  const { error, resetErrorBoundary } = props;

  return (
    <div className={styles.fallbackError}>
      <p>Упс!: {error.message}</p>
      <Button onClick={resetErrorBoundary}>Попробуйте еще раз</Button>
    </div>
  );
};
