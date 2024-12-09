import { Loader } from 'shared/ui/loader/loader';

import { memo, FC } from 'react';

import styles from './page-loader.module.scss';

export const PageLoader: FC = memo(() => {
  return (
    <div className={styles.pageLoader}>
      <Loader />
    </div>
  );
});
