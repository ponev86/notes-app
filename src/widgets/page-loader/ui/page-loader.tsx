import clsx from 'clsx';

import { Loader } from 'shared/ui/loader/loader';

import type { FC } from 'react';

import styles from './page-loader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={clsx(styles.pageLoader, className)}>
      <Loader />
    </div>
  );
};
