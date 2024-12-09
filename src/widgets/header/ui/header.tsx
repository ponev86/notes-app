import { FC, memo } from 'react';

import styles from './Header.module.scss';

export const Header: FC = memo(() => {
  return <header className={styles.header}>NOTES APP</header>;
});
