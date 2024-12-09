import { memo } from 'react';

import styles from './Header.module.scss';

export const Header = memo(() => {
  return <header className={styles.header}>NOTES APP</header>;
});
