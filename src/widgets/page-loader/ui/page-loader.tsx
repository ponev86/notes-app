import { Loader } from 'shared/ui/loader/loader';

import type { FC } from 'react';

import styles from './page-loader.module.scss';

export const PageLoader: FC = () => {
  return (
    <div className={styles.pageLoader}>
      <Loader />
    </div>
  );
};
