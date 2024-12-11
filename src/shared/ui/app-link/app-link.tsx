import clsx from 'clsx';
import { Link } from 'react-router-dom';

import type { FC, PropsWithChildren } from 'react';
import type { LinkProps } from 'react-router-dom';

import styles from './app-link.module.scss';

export enum AppLinkTheme {
  Primary = 'primary',
  Secondary = 'secondary',
}

interface AppLinkProps extends LinkProps, PropsWithChildren {
  theme?: AppLinkTheme;
  className?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    theme = AppLinkTheme.Primary,
    className,
    children,
    ...other
  } = props;

  return (
    <Link
      to={to}
      className={clsx(styles.link, className, styles[theme])}
      {...other}
    >
      {children}
    </Link>
  );
};
