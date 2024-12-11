import clsx from 'clsx';

import {
  memo,
  type ButtonHTMLAttributes,
  type FC,
  type PropsWithChildren,
} from 'react';

import styles from './button.module.scss';

export enum ButtonTheme {
  Primary = 'primary',
  Secondary = 'secondary',
  Clear = 'clear',
}

export enum ButtonSize {
  Medium = 'medium',
  Large = 'large',
}

export interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = memo((props) => {
  const {
    className,
    square,
    disabled,
    theme = ButtonTheme.Primary,
    size = ButtonSize.Medium,
    children,
    ...other
  } = props;

  return (
    <button
      className={clsx(
        styles.button,
        className,
        styles[theme],
        square && styles.square,
        styles[size],
        disabled && styles.disabled
      )}
      disabled={disabled}
      {...other}
    >
      {children}
    </button>
  );
});
